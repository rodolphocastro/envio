const { get: getFromEnv } = Deno.env;

/**
 * Attempts to fetch a value from the Environment.
 * @param varName Key (name) where the value should be found
 * @param prefix A prefix to be used
 */
export function fetchFromEnv(varName: string, prefix: string): string {
  const result = getFromEnv(`${prefix}_${varName}`);
  return result ?? "";
}
