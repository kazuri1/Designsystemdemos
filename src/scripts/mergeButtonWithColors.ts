import fs from "fs";
import path from "path";

// Helper to get value from token path like 'blue.500'
function getColorValue(colors: any, token: string): string {
  if (!token.includes(".")) return colors[token] || token;
  const [group, shade] = token.split(".");
  return colors[group]?.[shade] || token;
}

const buttonPath = path.resolve(__dirname, "../styles/components/button.json");
const colorsPath = path.resolve(__dirname, "../styles/base/colors.json");
const outputPath = path.resolve(
  __dirname,
  "../styles/components/resolvedButton.json"
);

const button = JSON.parse(fs.readFileSync(buttonPath, "utf-8"));
const colors = JSON.parse(fs.readFileSync(colorsPath, "utf-8"));

function resolveButtonStyles(obj: any): any {
  if (typeof obj === "string") {
    return getColorValue(colors, obj);
  } else if (Array.isArray(obj)) {
    return obj.map(resolveButtonStyles);
  } else if (typeof obj === "object" && obj !== null) {
    const result: any = {};
    for (const key in obj) {
      result[key] = resolveButtonStyles(obj[key]);
    }
    return result;
  }
  return obj;
}

const resolved = resolveButtonStyles(button);
fs.writeFileSync(outputPath, JSON.stringify(resolved, null, 2));
console.log("Resolved button styles written to", outputPath);
