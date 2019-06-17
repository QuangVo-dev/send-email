import { MailDTO } from './mail.dto';
declare class MailService {
    config: any;
    constructor(config: object);
    sendEmailWithService: (service: string, apiKey: string, data: any, domain?: any) => Promise<unknown>;
    send: (inputs: MailDTO) => void;
}
export default MailService;
