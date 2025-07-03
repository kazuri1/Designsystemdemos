import fs from "fs";
import path from "path";

// Usage: ts-node resolve.ts <inputComponentJson> <colorTokenJson> <spacingTokenJson> [themeKey]
const [, , inputPath, colorTokenPath, spacingTokenPath, themeKey] =
  process.argv;
if (!inputPath || !colorTokenPath || !spacingTokenPath) {
  console.error(
    "Usage: ts-node resolve.ts <inputComponentJson> <colorTokenJson> <spacingTokenJson> [themeKey]"
  );
  process.exit(1);
}

const inputAbs = path.resolve(process.cwd(), inputPath);
const colorTokenAbs = path.resolve(process.cwd(), colorTokenPath);
const spacingTokenAbs = path.resolve(process.cwd(), spacingTokenPath);
const themeName = themeKey ? themeKey : "light";
const outputAbs = path.join(
  path.dirname(inputAbs),
  `resolved.button.${themeName}.json`
);
const cssOutputAbs = path.resolve(
  process.cwd(),
  `src/styles/themes/default-${themeName}.css`
);

const component = JSON.parse(fs.readFileSync(inputAbs, "utf-8"));
const colors = JSON.parse(fs.readFileSync(colorTokenAbs, "utf-8"));
const spacing = JSON.parse(fs.readFileSync(spacingTokenAbs, "utf-8"));

function getTokenValue(token: string): string {
  if (typeof token !== "string") return token;
  if (token.startsWith("spacing.")) {
    const key = token.split(".")[1];
    return spacing[key] !== undefined ? spacing[key] + "px" : token;
  }
  if (token.includes(".")) {
    const [group, shade] = token.split(".");
    return colors[group]?.[shade] || colors[token] || token;
  }
  return colors[token] || spacing[token] || token;
}

function resolveReferences(obj: any): any {
  if (typeof obj === "string") {
    return getTokenValue(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(resolveReferences);
  } else if (typeof obj === "object" && obj !== null) {
    const result: any = {};
    for (const key in obj) {
      result[key] = resolveReferences(obj[key]);
    }
    return result;
  }
  return obj;
}

function flattenToCssVars(obj: any, prefix: string[] = []): string[] {
  let vars: string[] = [];
  for (const key in obj) {
    const value = obj[key];
    const pathArr = [...prefix, key];
    if (typeof value === "object" && value !== null) {
      vars = vars.concat(flattenToCssVars(value, pathArr));
    } else {
      const varName = "--" + pathArr.join("-").replace(/_/g, "-");
      vars.push(`${varName}: ${value};`);
    }
  }
  return vars;
}

const themeSection = themeKey ? component[themeKey] : component;
const resolved = resolveReferences(themeSection);
fs.writeFileSync(outputAbs, JSON.stringify(resolved, null, 2));
console.log("Resolved file written to", outputAbs);

// Generate CSS variables
const cssVars = flattenToCssVars(resolved, ["button"]);
const cssSelector = themeKey === "dark" ? ".dark" : ":root";
const cssContent = `${cssSelector} {\n  ${cssVars.join("\n  ")}\n}`;

console.log("themeKey:", themeKey);
console.log("cssSelector:", cssSelector);
fs.mkdirSync(path.dirname(cssOutputAbs), { recursive: true });
fs.writeFileSync(cssOutputAbs, cssContent);
console.log("CSS variables written to", cssOutputAbs);
