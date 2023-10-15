export enum Langs {
  cz = "cz",
  en = "en",
}

interface Links {
  github: string;
  linkedin: string;
  telegram: string;
  email: string;
}

interface FieldsMessages {
  requiredField: string;
  invalidEmail: string;
  invalidPhone: string;
}

interface Field {
  title: string;
  placeholder: string;
}

interface Fields {
  name: Field;
  email: Field;
  phone: Field;
  messagePlaceholder: string;
  send: string;
  messages: FieldsMessages;
  success: string;
  error: string;
}

export default interface IContact {
  links: Links;
  fields: Fields;
}
