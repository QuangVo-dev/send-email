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
const mandrill_api_1 = require("mandrill-api");
exports.sendEmailWithMandrill = (apiKey, inputs) => __awaiter(this, void 0, void 0, function* () {
    const mandrillClient = new mandrill_api_1.Mandrill(apiKey);
    const msg = {
        "html": inputs.content,
        "subject": inputs.subject,
        "from_email": inputs.from,
        "to": [
            {
                "email": inputs.to,
                "type": "to"
            }
        ]
    };
    return new Promise((resolve, reject) => {
        mandrillClient.messages.send({ "message": msg }, result => {
            resolve(result);
            console.info('Send email with Mandrill successfully');
        }, e => {
            console.error(e);
            reject(e);
        });
    });
});
