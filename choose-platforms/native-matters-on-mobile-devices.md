# Native matters on mobile devices

With mobile, we've traditionally avoided cross-platform technologies which emphasise code reuse over user experience and web technologies over native frameworks for a few reasons:

* **Cost:** it is a costly burden on our designers to try to design for the iOS and Android platforms at the same time. The differences in screen sizes, resolutions, aspect ratios, and expected user interface patterns require different design solutions.
* **Access to new features:** They're usually behind the current state of the platform APIs, meaning that we would be unable to implement new functionality when new operating system versions are released.
* **Unexpected complexity:** Often, it is much more complex to use platform specific features, requiring extensive work making them available.
* **Quality:** By providing a lowest common denominator implementation across multiple platforms, there's a lack of native feel with many UI components, poor quality animations, and poor runtime performance.

We quickly adopted Swift for our iOS apps, and on Android we've done the same with Kotlin. These languages help us build apps faster, and to a higher quality, because of their platform integration and improved type systems.

Most recently, we've been working with [React Native](https://facebook.github.io/react-native/). React Native is a library that allows us to build apps which follow the patterns of React in a way which bridges to native UI elements, all using JavaScript.

We've found that it makes difficult things easy (like complex UI implementations), but also some things quite difficult (like localization and adaptive layouts which at the time of writing aren't supported so well).

We're excited about the approach it takes to "learning once, writing anywhere" as this has allowed us to share common, custom components (a user profile view, for example) between both iOS and Android. We've also been able to reuse skills we've learned elsewhere (JavaScript and the React pattern), which has also enabled more designers and developers at CodeCarrot to be involved in mobile development.
