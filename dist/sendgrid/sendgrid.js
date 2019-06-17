"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sgMail = require("@sendgrid/mail");
exports.sendEmailWithSendgrid = (apiKey, inputs) => __awaiter(this, void 0, void 0, function* () {
    sgMail.setApiKey(apiKey);
    const msg = {
        to: inputs.to,
        from: inputs.from,
        subject: inputs.subject,
        html: inputs.html
    };
    try {
        yield sgMail.send(msg);
        console.info('Send Email with Sendgrid successfully');
    }
    catch (err) {
        console.error(err.response.body.errors);
    }
});
