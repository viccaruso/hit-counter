import React from 'react';

import Blur from './components/Blur';
import HitCounter from './components/HitCounter';

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

async function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <HitCounter />
    </main>
  );
}

export default Home;
