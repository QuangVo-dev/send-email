

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
