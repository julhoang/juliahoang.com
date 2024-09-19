import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.mail.me.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.ICLOUD_USER,
        pass: process.env.ICLOUD_PASS,
    },
});

export const sendMail = async (to: string) => {
    try {
        await transporter.sendMail({
            from: process.env.FROM_ADDRESS,
            to,
            subject: "Hello from Personal Website",
            text: "Hello, thanks for stopping by! I hope you're having a great day.",
        });
    } catch (error) {
        console.error(error);
    }
};
