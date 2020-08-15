import { BaseFromEnvironment } from "../src/mod.ts";

// Setting a sample value in the environment
Deno.env.set("mongoConnectionString", "root@0.0.0.0:12345");

// Defining our Configuration class
class SampleConfiguration extends BaseFromEnvironment {
  mongoConnectionString = "defaultValue";
}

// Creating our subject
const subject = new SampleConfiguration();

// Loading its values from the environment
subject.init();

console.table(subject);
console.log(`
Q:Is the value still the default value?
A: ${subject.mongoConnectionString === "defaultValue"}`);
