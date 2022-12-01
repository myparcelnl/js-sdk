import {originalFetch} from './originalFetch';
import {writeExample} from './writeExample';

/**
 * Execute a real fetch request and save its results as a new example.
 */
export const doActualFetch = async (
  info: string | Request,
  init: RequestInit | undefined,
): Promise<Record<string, unknown>> => {
  const response = await originalFetch.get()(info, init);
  const json = await response.json();

  writeExample(info, init, json);

  return json;
};
