// The guest list, read from the private invitees CSV at build time.
// Only names make it into the built site; emails and notes stay in the CSV.
//
// Each row is: first, last, party, email, notes. Guests who share a party
// RSVP together; a blank party is a guest on their own. Blank lines and lines
// starting with # are skipped. The Docker build points INVITEES_CSV at its copy of the
// file; otherwise it's read from the private submodule.

import fs from 'node:fs';
import path from 'node:path';

const privateCsv = process.env.INVITEES_CSV ?? path.resolve('../../configs/benlovesmolly-private/invitees.csv');
const exampleCsv = path.resolve('../../configs/invitees-example.csv');

// Returns each party as a list of names, in the order they appear in the CSV.
function parse(csv) {
  const parties = new Map();
  csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .forEach((line, row) => {
      const [first = '', last = '', party = ''] = line.split(',').map((field) => field.trim());
      const name = `${first} ${last}`.trim();
      if (!name) return;
      const key = party || `row ${row}`;
      if (!parties.has(key)) parties.set(key, []);
      parties.get(key).push(name);
    });
  return [...parties.values()];
}

function load() {
  const parties = fs.existsSync(privateCsv) ? parse(fs.readFileSync(privateCsv, 'utf8')) : [];
  if (parties.length) return parties;

  // An empty list would turn every guest away, so a real build refuses to
  // ship one. The dev server falls back to the example guests instead.
  if (!import.meta.env.DEV) {
    throw new Error(`No invitees found in ${privateCsv}. Check out the configs/benlovesmolly-private submodule.`);
  }
  console.warn(`No invitees in ${privateCsv}; using ${exampleCsv} for development.`);
  return parse(fs.readFileSync(exampleCsv, 'utf8'));
}

export const parties = load();
