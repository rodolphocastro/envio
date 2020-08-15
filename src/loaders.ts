const { get: getFromEnv } = Deno.env;

/**
 * Attempts to fetch a value from the Environment.
 * @param varName Key (name) where the value should be found
 * @param prefix A prefix to be used
 */
export function fetchFromEnv(varName: string, prefix: string): string {
  const expectedKey = prefix !== "" ? `${prefix}_${varName}` : varName;
  const result = getFromEnv(expectedKey);
  return result ?? "";
}

/**
 * A class which properties can be pulled from the Environment.
 */
export class BaseFromEnvironment {
  /**
   * Attempts to initialize all properties with values from the Environment.
   * @param prefix Prefix preceding all the keys in the Environment
   */
  public init(prefix = "") {
    this.listProperties()
      .forEach((p) => {
        this.assignValueByReflection(p, fetchFromEnv(p, prefix));
      });
  }

  /**
   * Lists properties belonging to the object.
   */
  protected listProperties(): string[] {
    return Object
      .entries(this)
      .filter((kp) => typeof kp[1] !== "function")
      .map((kp) => kp[0]);
  }

  /**
   * Assigns a value to a property using Reflection.
   * @param propertyName Property to be assigned
   * @param propertyValue Value to be assigned
   */
  protected assignValueByReflection(
    propertyName: string | keyof this,
    propertyValue: string,
  ) {
    if (propertyValue !== "") {
      Reflect.set(this, propertyName, propertyValue);
    }
  }
}
