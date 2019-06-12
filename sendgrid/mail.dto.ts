import { IsNotEmpty, IsIn, IsDefined } from 'class-validator';

export class MailDTO {
    // @IsDefined({ message: 'To email should be defined' })
    // @IsNotEmpty({ message: 'To email cannot be empty' })
    to: string
    // @IsDefined({ message: 'From email should be defined' })
    // @IsNotEmpty({ message: 'From email cannot be empty' })
    from: string
    // @IsDefined({ message: 'Subject of email should be defined' })
    // @IsNotEmpty({ message: 'Subject of email cannot be empty' })
    subject: string
    text?: string
    html: string
}