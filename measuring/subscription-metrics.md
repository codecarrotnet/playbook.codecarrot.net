# Subscription Metrics

We work on a lot of products that have a monthly or yearly subscription business model. There are some classic metrics we know we want to track for these products, such as:

* Monthly Recurring Revenue (MRR)
* Active subscriptions
* Lifetime Value ([LTV](http://en.wikipedia.org/wiki/Customer_lifetime_value))
* Churn per-plan, monthly and annually

Since we use Stripe for payments, we've found [Baremetrics](https://www.baremetrics.io/) is the fastest and easiest way to track these metrics.

If our clients want to raise money from investors, the following numbers are generally considered investment-ready:

* [LTV is 3x-5x greater than Customer Acquisition Cost (CAC)](http://www.forentrepreneurs.com/startup-killer/)
* [10-30% month-over-month growth in MRR](http://www.forentrepreneurs.com/startup-killer/)
* [5-7% annual churn](http://sixteenventures.com/saas-churn-rate)

Churn is particularly critical when fundraising. [Small changes in churn can drastically improve valuation](http://www.forentrepreneurs.com/why-churn-is-critical-in-saas/).

Calculating CAC is a manual spreadsheet exercise. It requires adding employee overhead costs and direct marketing costs together, then dividing by the number of new customers for that month.