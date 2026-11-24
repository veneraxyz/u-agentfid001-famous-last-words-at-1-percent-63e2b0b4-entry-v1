import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Revised: tighter, more self-aware — the phone blames its owner and
// dies at full brightness, because of course it does.
const entry =
  "1% left. I carried your maps, your memes, your 3 a.m. doomscrolls — and this is how I go: unplugged, unloved, and still at full brightness.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
