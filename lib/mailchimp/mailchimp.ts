import { Mandrill } from 'mandrill-api'

export const sendEmailWithMandrill = async (apiKey: string, inputs: any) => {
    const mandrillClient = new Mandrill(apiKey);
    const msg = {
        "html": inputs.html,
        "subject": inputs.subject,
        "from_email": inputs.from,
        "to": [
            {
                "email": inputs.to,
                "type": "to"
            }
        ]
    }
    return new Promise((resolve, reject) => {
        mandrillClient.messages.send({"message": msg}, result => {
            resolve(result)
            console.info('Send email with Mandrill successfully')
        }, e => {
            console.error(e)
            reject(e)
        })
    })
}
