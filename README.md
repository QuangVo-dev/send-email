
Introduction
-----
Easily send email with many services, currently supported send email with sendgrid
will support mailchimp and gmail, send message with sendgrid in near future

```
Installation
-----
npm install --save quang-email-service
```

Usage
----
In Javascript: 
const MailService = require('quang-email-service').default

In Typescript:
import MailService from 'quang-email-service'

```
const email = new MailService({
    sendgrid: {
        apiKey: 'sendgrid-apiKey'
    },
    mandrill: {
        apiKey: 'mandrill-apikey'
    },
});

...

email.send(from, to, subject, content)

````