import React from 'react';
import { readFile, writeFile } from '../../helpers/file-helpers';
import Blur from './Blur';
const DATABASE_PATH = '/src/database.json';

export default async function HitCounter() {
  const json = readFile(DATABASE_PATH);
  let { hits } = await JSON.parse(json);
  hits++;
  writeFile(DATABASE_PATH, JSON.stringify({ hits }));
  return (
    <p>
      Welcome! You are visitor number <Blur>{hits}</Blur>.
    </p>
  );
}
