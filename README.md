# Envio

`Envio` is a simple module to help you map environmental variables into class' properties. It has zero external dependencies!

---

## 🚦 Build Status

Current status for **master**(latest): ![Build and Test](https://github.com/rodolphocastro/envio/workflows/Build%20and%20Test/badge.svg)

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

## 💭 Inspiration

This module is heavily inspired by the handy `IConfiguration` from [.NET](https://docs.microsoft.com/en-us/dotnet/api/microsoft.extensions.configuration.iconfiguration?view=dotnet-plat-ext-3.1) which allows us to easily fetch configurations from the Environment, Files and a plethora of other providers!
