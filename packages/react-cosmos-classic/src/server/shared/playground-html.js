// @flow

import { join } from 'path';
import { readFileSync } from 'fs';

import type { PlaygroundOpts } from 'react-cosmos-flow/playground';

export function getPlaygroundHtml(playgroundOpts: PlaygroundOpts) {
  return getHtmlTemplate().replace(
    '__PLAYGROUND_OPTS__',
    JSON.stringify(playgroundOpts)
  );
}

function getHtmlTemplate() {
  return readFileSync(join(__dirname, 'static/index.html'), 'utf8');
}
