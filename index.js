"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var mailchimp_1 = require("./mailchimp/mailchimp");
var sendgrid_1 = require("./sendgrid/sendgrid");
dotenv.config();
var mailchimp = new mailchimp_1["default"]();
var inputs = {
    to: 'phamlegiabao96@gmail.com',
    from: 'vothanhtruongquang@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
};
sendgrid_1.sendEmailWithSendgrid(inputs);
