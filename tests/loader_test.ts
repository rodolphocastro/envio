import { assert, assertEquals, assertNotEquals, assertArrayContains } from "./deps.ts";
import { BaseFromEnvironment, fetchFromEnv } from "../src/loaders.ts";
Deno.test({
  name: 'Fetches values from env',
  fn: () => {
    const { prefix, value } = {
      prefix: 'my_test',
      value: 'aValueForTesting'
    }
    Deno.env.set(`${prefix}_value`, value)
    const result = fetchFromEnv('value', prefix)
    assertEquals(result, value)
  }
})
