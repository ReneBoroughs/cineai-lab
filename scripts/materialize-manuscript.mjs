import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const partsDir = path.resolve('manuscript-source/v0.10');
const output = path.resolve(
  'public/documents/CineAI_Lab_Experimental_Foundations_Open_AI_Native_Cinema.pdf'
);

const partNames = Array.from({ length: 16 }, (_, i) =>
  `part-${String(i + 1).padStart(2, '0')}.b64`
);

const chunks = await Promise.all(
  partNames.map((name) => readFile(path.join(partsDir, name), 'utf8'))
);

const base64 = chunks.join('').replace(/\s+/g, '');
const pdf = Buffer.from(base64, 'base64');

const expectedSize = 158811;
const expectedSha256 = 'a50941df80aae5fc0be66b4b82b72d8947bb1b964206de290793fa6d72309fce';
const sha256 = createHash('sha256').update(pdf).digest('hex');

if (pdf.length !== expectedSize || sha256 !== expectedSha256) {
  throw new Error(
    `Manuscript integrity check failed: size=${pdf.length}, sha256=${sha256}`
  );
}

await writeFile(output, pdf);
console.log(`Materialized manuscript v0.10 (${pdf.length} bytes, ${sha256})`);
