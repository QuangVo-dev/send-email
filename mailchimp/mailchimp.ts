import Mailchimp = require('mailchimp-api-v3')


class MailchimpService {
    mailchimp: any
    constructor(API_KEY:any = process.env.MAILCHIMP) {
        this.mailchimp = new Mailchimp(API_KEY)
    }

    test = () => {
        console.log(this.mailchimp)
    }

}

export default MailchimpService