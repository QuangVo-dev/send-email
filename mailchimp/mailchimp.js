"use strict";
exports.__esModule = true;
var Mailchimp = require("mailchimp-api-v3");
var MailchimpService = /** @class */ (function () {
    function MailchimpService(API_KEY) {
        var _this = this;
        if (API_KEY === void 0) { API_KEY = process.env.MAILCHIMP; }
        this.test = function () {
            console.log(_this.mailchimp);
        };
        this.mailchimp = new Mailchimp(API_KEY);
    }
    return MailchimpService;
}());
exports["default"] = MailchimpService;
