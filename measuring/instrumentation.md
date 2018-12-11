# Instrumentation

In order to analyze metrics later, we need to instrument our app to log the right metrics. The primary type of instrumentation we care about is called "event tracking."

Use [Segment](https://segment.com/) to capture events whenever possible. It is analogous to [the adapter pattern](http://sourcemaking.com/design_patterns/adapter) for analytics services.

Segment provides one JavaScript library in our web apps, one library in our server-side framework, and one SDK in our mobile apps. This allows us to toggle different services such as Google Analytics, Amplitude, FullStory, Intercom, and others.

![Segment](../.vuepress/public/images/segment-io.jpg)

When Segment does not support a backend service, we can either use the service directly or contribute to the appropriate [Segment open source libraries](https://segment.com/libraries/analytics.js).

The hardest part of event tracking is choosing the [granularity of the events](http://qr.ae/GBPdx). It's costly to reconstruct historical measurements and missed knowledge can kill an early-stage product. So:

* track events as soon as they exist in the product
* err on the side of more data than less
* include as much state as possible per event
* own the data from the start

Some typical events we'll want to track:

* open app (mobile)
* background app (mobile)
* pageviews (web)
* create account
* make purchase
* add content
* make connection/friend
* upgrade subscription
* refer friend

Use properties on events liberally. Typically include:

* session ID
* all user properties
* environment: operating system, app version, device hardware details,
* current battery, wifi, cellular status
* number of seconds into the session

[Business analytics do not need to be realtime](http://mcfunley.com/whom-the-gods-would-destroy-they-first-give-real-time-analytics) and tracking these data should not slow down the user experience. So, we background these tasks whenever possible using whatever backgrounding system makes sense for our platform. Examples include [Delayed Job](https://github.com/collectiveidea/delayed_job) and [Resque](https://github.com/resque/resque).
