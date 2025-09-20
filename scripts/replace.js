#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";

if (process.argv.length < 5) {
	console.error("Usage: replace <file> <search> <replace>");
	process.exit(1);
}

const [, , file, search, replace] = process.argv;

try {
	const content = readFileSync(file, "utf8");
	const updated = content.replace(new RegExp(search, "g"), replace);
	writeFileSync(file, updated, "utf8");
	console.log(`✅ Replaced '${search}' with '${replace}' in ${file}`);
} catch (err) {
	console.error(`❌ Error: ${err.message}`);
	process.exit(1);
}
