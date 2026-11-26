import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My cat knocked my phone, my keys, and my wedding ring off the table, then claimed the empty spot, stared at me, and said, 'Rent's due.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(joke);
console.log(`chars: ${[...joke].length}`);
