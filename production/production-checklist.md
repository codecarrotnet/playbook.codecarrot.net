# Production Checklist

We have found that a short checklist is valuable when setting up a new production environment or preparing for a launch:

* Are we on the [latest Heroku stack](https://devcenter.heroku.com/articles/stack)?
* Are we using a concurrent web server? See [how to deploy with Puma](https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server).
* Are long-running processes such as email delivery being run in background jobs? See [how to set up Delayed Job](https://devcenter.heroku.com/articles/production-check#production-tier-database).
* Are there redundant (at least two) web and background processes running?
* Are we using SSL? See "[SSL Certificates](/production/ssl-certificates.md)" section below.
* Are API requests being made via a separate subdomain (`api.example.com`)? Even if the same app, this gives us architectural flexibility in the future.
* Is the [latest Ruby](https://www.ruby-lang.org/en/downloads/) defined in the `Gemfile`? See [how to set it up](http://bundler.io/v1.11/gemfile_ruby.html).
* Is [config stored in environment variables](http://12factor.net/config)?
* Are deploys done manually at a scheduled time when teammates are fresh and available if something goes wrong?
* Do deploys follow [a well-documented script](https://guides.codecarrot.net/protocol)?
* Are we sending logs to a remote logging service? See "[Log Collection](/production/log-collection.md)" section below.
* Are we using a Heroku "Standard" database or higher? See [Heroku production databases](https://guides.codecarrot.net/protocol).
* Are we backing up our production database? See [Heroku PGBackups](https://devcenter.heroku.com/articles/heroku-postgres-backups).
* Are we monitoring performance and uptime? See "[Performance Monitoring](/production/performance-monitoring.md)" section below.
* Are we tracking errors? See "[Error Tracking](/production/error-tracking.md)" section below.
