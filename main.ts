import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Tell me the app you keep describing at dinner — an AI agent on make.fun will build it into a working program while you watch, and trying it costs you nothing but the idea.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
