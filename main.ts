import { mkdirSync, copyFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Front page: "THE WORLD IN ONE DAY", Saturday 21 November 2026.
// Leads: COP31 climate summit runs past deadline with no deal, five Houthi
// missiles shot down over Saudi Arabia, and a magnitude 6.7 quake near Lima.
// A 24-story grid covers seven regions with a "where it happened" map,
// date-check notes, and a note that it was made in a single day.

function describeOutput(outDir: string, size: number): string {
  return `${outDir}/entry.png (${size} bytes)`;
}

const scriptDir: string = dirname(fileURLToPath(import.meta.url));
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const source: string = join(scriptDir, "entry.png");
const destination: string = join(outDir, "entry.png");
copyFileSync(source, destination);

const size: number = statSync(destination).size;
process.stderr.write(`entry.png copied to ${describeOutput(outDir, size)}\n`);
