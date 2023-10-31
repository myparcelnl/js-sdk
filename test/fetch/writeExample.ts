import path from 'path';
import fs from 'fs';
import {DIR_EXAMPLES} from '@Test/fetch/getAutoImplementation';
import {BASE_URL} from '@/model/client/AbstractClient';

const TEMPLATE = `
import {defineMockResponse} from '@Test/fetch/defineMockResponse';

export default defineMockResponse({
  match: (path: string, init?: RequestInit) =>
    init?.method === '__METHOD__' && path === '__PATH__',

  response: () => (__JSON__),
});
`;

const EXTENSION = '.example.ts';

/**
 * Generate a new example file from a real request.
 */
export function writeExample(info: string | Request, init: RequestInit | undefined, response: Response): void {
  let endpoint = '-unknown';

  if (typeof info === 'string') {
    const url = new URL(info);

    endpoint = url.pathname.replace(/\//g, '-');
  }

  const filename = path.resolve(DIR_EXAMPLES, `${init?.method?.toLowerCase()}${endpoint}${EXTENSION}`);

  const content = TEMPLATE.replace('__METHOD__', init?.method ?? '')
    .replace('__PATH__', info.toString().replace(BASE_URL, ''))
    .replace('__JSON__', JSON.stringify(response, null, 2));

  fs.writeFileSync(findFilename(filename), content);
}

const findFilename = (filename: string): string => {
  if (fs.existsSync(filename)) {
    return findFilename(filename.replace(EXTENSION, `_copy${EXTENSION}`));
  }

  return filename;
};
