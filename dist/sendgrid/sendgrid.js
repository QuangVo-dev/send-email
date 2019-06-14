"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sgMail = __importStar(require("@sendgrid/mail"));
exports.sendEmailWithSendgrid = async (apiKey, inputs) => {
    sgMail.setApiKey(apiKey);
    const msg = {
        to: inputs.to,
        from: inputs.from,
        subject: inputs.subject,
        content: [
            {
                type: 'text/html',
                value: inputs.content,
            },
        ]
    };
    try {
        await sgMail.send(msg);
        console.info('Send Email with Sendgrid successfully');
    }
    catch (err) {
        console.error(err.response.body.errors);
    }
};
//# sourceMappingURL=sendgrid.js.map