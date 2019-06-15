import { MailData } from '@sendgrid/helpers/classes/mail';
export declare const sendEmailWithSendgrid: (apiKey: string, inputs: MailData) => Promise<void>;
