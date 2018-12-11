# Acceptance Tests

Acceptance tests are [jobs stories turned into code](https://gist.github.com/mittalyashu/0cf1ab15b1d75a166f162e3f9e028d8f). This code is run against the application. When executed for the first time, the test will fail. The developer writes application code until the test passes.

When the test passes, the developer commits the code into version control with a message such as:

> Guest creates pledge

The code is then run on the [Continuous Integration](/continuous-integration.md) server to make sure the acceptance test still passes in an environment that matches the production environment.

Meanwhile, the code is pushed to the staging environment and the developer and customer representative smoke test it in the browser.

When the acceptance test is green for the CI server and you and any other designers, developers, or clients are satisfied that the jobs story is complete on staging, the feature can be deployed to production at will. This can result in features being pushed to production very frequently, and therefore more value is being delivered to customers sooner.
