import nodemailer from 'nodemailer'

export const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        host: 'Gmail',
        port: 465,
        auth: {
          user: process.env.SMPT_HOST_EMAIL,
          pass: process.env.SMPT_HOST_PASSWORD,
        }
      });

      const message = {
        from: `${process.env.SMPT_FROM_NAME} <${process.env.SMPT_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
      }

      await transporter.sendMail(message);
}