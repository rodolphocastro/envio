import {
  DixtureFactory,
  dixtureFns,
  InterfaceRuleSet,
  RuleSet,
} from "https://deno.land/x/dixture@v0.2.2/mod.ts";

const dixtureFactory = new DixtureFactory();

export {
  dixtureFactory,
  dixtureFns,
  InterfaceRuleSet,
  RuleSet,
};

export {
  assert,
  assertArrayContains,
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std/testing/asserts.ts";
