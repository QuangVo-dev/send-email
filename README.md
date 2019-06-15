
Introduction
-----
```
Easily send email with many services, currently supported send email with sendgrid
will support mailchimp and gmail, send message with sendgrid in near future
````
Installation
-----

```
npm install --save quang-email-service
```

Usage
-----

```
const email = new MailService({
    sendgrid: {
        apiKey: 'sendgrid-apiKey'
    },
    mandrill: {
        apiKey: 'sendgrid-apiKey'
    },
});

...

email.send(from, to, subject, content)


Release Notes
-------------

```
Fix bug cannot import from javascript files
```
