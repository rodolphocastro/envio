import {
  assert,
  assertEquals,
  assertNotEquals,
  assertArrayContains,
} from "./deps.ts";
import { BaseFromEnvironment, fetchFromEnv } from "../src/loaders.ts";

Deno.test({
  name: "Constructable without parameters",
  fn: () => {
    const subject = new BaseFromEnvironment();
    assertNotEquals(subject, null);
  },
});

Deno.test({
  name: "Inheritable without parameters",
  fn: () => {
    class NewFromEnv extends BaseFromEnvironment {
    }
    const subject = new NewFromEnv();
    assertNotEquals(subject, null);
  },
});

Deno.test({
  name: "Recovers only keys when Inherited",
  fn: () => {
    class SubjectClass extends BaseFromEnvironment {
      /**
       * This should show up in the result!
       */
      myValue = "pudding!";

      /**
       * Wrapper for our subject under test.
       */
      public methodUnderTest() {
        return this.listProperties();
      }

      /**
       * This shouldn't show up in the result!
       */
      fatArrowMethod = () => {
        return this.listProperties();
      };
    }
    const result = new SubjectClass().methodUnderTest();
    assertArrayContains(result, ["myValue"]);
    assert(result.length <= 1);
  },
});

Deno.test({
  name: "Assigns values by Reflection",
  fn: () => {
    class MySubject extends BaseFromEnvironment {
      myProperty = "";

      methodUnderTest = (property: keyof MySubject, value: string) => {
        this.assignValueByReflection(property, value);
      };
    }
    const subject = new MySubject();
    const initialValue = subject.myProperty;
    subject.methodUnderTest("myProperty", "myNewAndImprovedAwesomeValue");
    assertNotEquals(subject.myProperty, initialValue);
  },
});

Deno.test({
  name: "Fetches values from env",
  fn: () => {
    const { prefix, value } = {
      prefix: "my_test",
      value: "aValueForTesting",
    };
    Deno.env.set(`${prefix}_value`, value);
    const result = fetchFromEnv("value", prefix);
    assertEquals(result, value);
  },
});

Deno.test({
  name: "Inits values from the Environment",
  fn: () => {
    const initialValue = "aProperty";
    const expectedValue = "expectedProperty";
    class MySubject extends BaseFromEnvironment {
      myProperty = initialValue;
    }
    const subject = new MySubject();
    Deno.env.set("DENO_APP_myProperty", expectedValue);
    subject.init("DENO_APP");
    const result = subject.myProperty;
    assertNotEquals(result, initialValue);
    assertEquals(result, expectedValue);
  },
});

Deno.test({
  name: 'Does not override not found values',
  fn: () => {
    const initialValue = "aValue!!!"
    class MySubject extends BaseFromEnvironment {
      myProperty = initialValue;
    }
    const subject = new MySubject();
    subject.init("A_RANDOM_PREFIX_TO_ENSURE_NO_OVERLAP")
    const result = subject.myProperty;
    assertEquals(result, initialValue)
  }
})
