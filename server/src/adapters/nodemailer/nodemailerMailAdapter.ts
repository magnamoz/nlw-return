import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "26daf339d3f0eb",
      pass: "2f3bf9b3349d7c"
    }
  });


export class NodemailerMailerAdapter implements MailAdapter {
    async sendMail ({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Magna Moz <magnamoz@hotmail.com>',
            subject,
            html: body
        })
    }
}