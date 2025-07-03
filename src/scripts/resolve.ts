import fs from "fs";
import path from "path";

// Usage: ts-node resolve.ts <inputComponentJson> <colorTokenJson> <spacingTokenJson> <typographyTokenJson> <borderRadiusTokenJson> <elevationTokenJson> [themeKey]
const [
  ,
  ,
  inputPath,
  colorTokenPath,
  spacingTokenPath,
  typographyTokenPath,
  borderRadiusTokenPath,
  elevationTokenPath,
  themeKey,
] = process.argv;
if (!inputPath || !colorTokenPath || !spacingTokenPath) {
  console.error(
    "Usage: ts-node resolve.ts <inputComponentJson> <colorTokenJson> <spacingTokenJson> <typographyTokenJson> <borderRadiusTokenJson> <elevationTokenJson> [themeKey]"
  );
  process.exit(1);
}

const inputAbs = path.resolve(process.cwd(), inputPath);
const colorTokenAbs = path.resolve(process.cwd(), colorTokenPath);
const spacingTokenAbs = path.resolve(process.cwd(), spacingTokenPath);
const typographyTokenAbs = typographyTokenPath
  ? path.resolve(process.cwd(), typographyTokenPath)
  : undefined;
const borderRadiusTokenAbs = borderRadiusTokenPath
  ? path.resolve(process.cwd(), borderRadiusTokenPath)
  : undefined;
const elevationTokenAbs = elevationTokenPath
  ? path.resolve(process.cwd(), elevationTokenPath)
  : undefined;
const themeName = themeKey ? themeKey : "light";

// Extract component name from input file (e.g., drawer.json -> drawer)
const componentName = path.basename(inputAbs).replace(/\.json$/, "");
const outputAbs = path.join(
  path.dirname(inputAbs),
  `resolved.${componentName}.${themeName}.json`
);
const cssOutputAbs = path.resolve(
  process.cwd(),
  `src/styles/themes/default-${themeName}.css`
);

const component = JSON.parse(fs.readFileSync(inputAbs, "utf-8"));
const colors = JSON.parse(fs.readFileSync(colorTokenAbs, "utf-8"));
const spacing = JSON.parse(fs.readFileSync(spacingTokenAbs, "utf-8"));
const typography = typographyTokenAbs
  ? JSON.parse(fs.readFileSync(typographyTokenAbs, "utf-8"))
  : {};
const borderRadius = borderRadiusTokenAbs
  ? JSON.parse(fs.readFileSync(borderRadiusTokenAbs, "utf-8"))
  : {};
const elevation = elevationTokenAbs
  ? JSON.parse(fs.readFileSync(elevationTokenAbs, "utf-8"))
  : {};

function getTokenValue(token: string): string {
  if (typeof token !== "string") return token;
  if (token.startsWith("spacing.")) {
    const key = token.split(".")[1];
    return spacing[key] !== undefined ? spacing[key] + "px" : token;
  }
  if (token.startsWith("typography.fontSizes.")) {
    const key = token.split(".")[2];
    return typography.fontSizes?.[key] || token;
  }
  if (token.startsWith("typography.fontWeights.")) {
    const key = token.split(".")[2];
    return typography.fontWeights?.[key] || token;
  }
  if (token.startsWith("typography.fontFamilies.")) {
    const key = token.split(".")[2];
    return typography.fontFamilies?.[key] || token;
  }
  if (token.startsWith("border-radius.")) {
    const key = token.split(".")[1];
    return borderRadius[key] || token;
  }
  if (token.startsWith("elevation.")) {
    const key = token.split(".")[1];
    return elevation[key] || token;
  }
  if (token.includes(".")) {
    const [group, shade] = token.split(".");
    return colors[group]?.[shade] || colors[token] || token;
  }
  return (
    colors[token] ||
    spacing[token] ||
    typography[token] ||
    borderRadius[token] ||
    elevation[token] ||
    token
  );
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
const cssVars = flattenToCssVars(resolved, [componentName]);
const cssSelector = themeKey === "dark" ? ".dark" : ":root";
const cssContent = `${cssSelector} {\n  ${cssVars.join("\n  ")}\n}`;

console.log("themeKey:", themeKey);
console.log("cssSelector:", cssSelector);
fs.mkdirSync(path.dirname(cssOutputAbs), { recursive: true });

// Append or update Drawer variables in the theme CSS file
let existingCss = "";
if (fs.existsSync(cssOutputAbs)) {
  existingCss = fs.readFileSync(cssOutputAbs, "utf-8");
  // Remove previous block for this component
  const regex = new RegExp(
    `${cssSelector} \\{[^}]*--${componentName}-[^}]*\\}`,
    "gs"
  );
  existingCss = existingCss.replace(regex, "");
}
const newCss = `${existingCss.trim()}\n${cssContent}\n`;
fs.writeFileSync(cssOutputAbs, newCss.trim() + "\n");
console.log("CSS variables written to", cssOutputAbs);
