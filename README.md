
Introduction
-----
Send email easily with sendgrid, mandrill and mailgun api


Installation
-----
```
npm install --save quang-email-service
```


Usage
-----
In Javascript: 
```
const MailService = require('quang-email-service').default
```

In Typescript:
```
import MailService from 'quang-email-service'
```


```
const email = new MailService({
    sendgrid: {
        apiKey: 'sendgrid-apiKey'
    },
    mandrill: {
        apiKey: 'mandrill-apikey'
    },
    mailgun: {
        apiKey: 'mailgun-apikey',
        domain: ''
    }
});

...

email.send(from, to, subject, content)

````