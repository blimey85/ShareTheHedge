import { Client, SendEmailV3_1, LibraryResponse } from 'node-mailjet'

const mailjet = new Client({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
})

export async function POST(request: Request) {
    const res = await request.json()
    const { firstname, lastname, email, subject, message } = res

    const data: SendEmailV3_1.Body = {
        Messages: [
            {
                From: {
                    Email: 'gary@sharethehedge.pub',
                },
                To: [
                    {
                        Email: 'gary@sharethehedge.pub',
                    },
                ],
                TemplateID: 5538597,
                TemplateLanguage: true,
                TemplateErrorReporting: {
                    Email: 'gary@sharethehedge.pub',
                    Name: 'Template Error Reporter',
                },
                Subject: 'Contact Form Submission!',
                Variables: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    subject: subject,
                    message: message,
                },
            },
        ],
    }
    // console.log(data)

    const result: LibraryResponse<SendEmailV3_1.Response> = await mailjet
        .post('send', { version: 'v3.1' })
        .request(data)

    // console.log(result.body.Messages)
    // console.log(result.body.Messages[0])
    const { Status } = result.body.Messages[0]
    return Response.json({ Status })
}
