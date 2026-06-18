import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.env.INIT_CWD;
if (!root) process.exit(0);

const required = { allowJs: true, checkJs: true };

for (const name of ['tsconfig.json', 'jsconfig.json']) {
	const file = join(root, name);
	let json;
	try {
		json = JSON.parse(readFileSync(file, 'utf8'));
	} catch {
		continue;
	}
	json.compilerOptions ??= {};
	let changed = false;
	for (const [key, val] of Object.entries(required)) {
		if (json.compilerOptions[key] !== val) {
			json.compilerOptions[key] = val;
			changed = true;
		}
	}
	if (changed) writeFileSync(file, JSON.stringify(json, null, 2) + '\n');
	process.exit(0);
}

// neither found: create jsconfig.json
writeFileSync(
	join(root, 'jsconfig.json'),
	JSON.stringify({ compilerOptions: required }, null, 2) + '\n'
);
