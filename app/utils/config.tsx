import { Mailer } from "nodemailer-react";

const transport = {
  host: "smtp.example.com",
  secure: true,
  auth: { user: "username", pass: "password" },
};

export interface ContactEmail {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const defaults = {
  from: "sender@server.com",
};

export const ContactEmailResponse = ({
  name,
  email,
  phone,
  message,
}: ContactEmail) => ({
  subject: `✉️ ${name}`,
  body: (
    <div>
      <span>From: {name}</span>
      <span>Email: {email}</span>
      {phone && <span>Phone: {phone}</span>}
      <p>{message}</p>
    </div>
  ),
});

export const mailer = Mailer({ transport, defaults }, { ContactEmailResponse });
