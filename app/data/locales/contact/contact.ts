import type IContact from "./types";

export const cz: IContact = {
  links: {
    github: "GitHub",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    email: "Email",
  },
  fields: {
    name: {
      title: "Jméno",
      placeholder: "Jakub Vantuch",
    },
    email: {
      title: "Email",
      placeholder: "contact@vantuch.dev",
    },
    phone: {
      title: "Telefon",
      placeholder: "+420123456789",
    },
    messagePlaceholder: "Dovolte mi vám pomoc s vaší vizí...",
    send: "Odeslat",
    messages: {
      requiredField: "Toto pole je povinné",
      invalidEmail: "Neplatná emailová adresa",
      invalidPhone: "Neplatné telefonní číslo",
    },
    success: "Úspěšně odesláno",
    error: "Zprávu se nepodařilo odeslat",
  },
};

export const en: IContact = {
  links: {
    github: "GitHub",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    email: "Email",
  },
  fields: {
    name: {
      title: "Name",
      placeholder: "Jakub Vantuch",
    },
    email: {
      title: "Email",
      placeholder: "contact@vantuch.dev",
    },
    phone: {
      title: "Phone",
      placeholder: "+420123456789",
    },
    messagePlaceholder: "Let me make your dream come true...",
    send: "Send",
    messages: {
      requiredField: "This field is required",
      invalidEmail: "Invad email address",
      invalidPhone: "Invalid phone number",
    },
    success: "Send successfully",
    error: "Message wasn't sent",
  },
};
