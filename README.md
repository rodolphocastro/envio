# Envio

`Envio` is a simple module to help you map environmental variables into class' properties. It has zero external dependencies!

## ⚡ Getting started

Do get started with `envio` simply:

1. Import our `mod.ts`
2. Inherit the `BaseFromEnvironment` class
3. Call `yourClass.init()`
4. ???
5. Profit 💲

## 📌 Samples

```typescript
// Defining our Configuration class
class SampleConfiguration extends BaseFromEnvironment {
  mongoConnectionString = "defaultValue";
}

// Creating our subject
const subject = new SampleConfiguration();

// Loading its values from the environment
subject.init();

// subject.mongoConnectionString should now be !== than "defaultValue"
```

Check out the `/samples` folder for further samples!
