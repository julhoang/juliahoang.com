"use server";
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

const sendMail = async (sender: string, email: string, message: string) => {
    try {
        await transporter.sendMail({
            from: process.env.FROM_ADDRESS,
            to: process.env.FROM_ADDRESS,
            subject: "Message from juliahoang.com",
            text: `Name: ${sender}\nEmail: ${email}\nMessage:\n${message}`,
        });

        console.log("Message sent successfully!");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export default sendMail;
