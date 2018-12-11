# Transactional Email

We use [SendGrid](http://sendgrid.com/) to have our application deliver email to users, known as [transactional email](https://www.foundrygroup.com/blog/2010/04/foundry-group-invests-in-sendgrid/).

Examples of transactional email are:

* Confirmations
* Follow ups after the first 3 days of use
* Free trial is expiring
* Message another user in the system

We use SendGrid directly, not via the Heroku add-on, in order to avoid being lumped under the same IP group as others on Heroku (who might be misbehaving).
