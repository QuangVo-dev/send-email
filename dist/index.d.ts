import MailData from '@sendgrid/helpers/classes/mail';
declare class MailService {
    config: any;
    constructor(config: object);
    sendEmailWithService: (service: string, apiKey: string, data: any) => Promise<unknown>;
    sendEmail: (inputs: MailData) => void;
}
export default MailService;
