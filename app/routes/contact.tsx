import type { ActionFunction, ActionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useMemo } from "react";
import sendgrid from "@sendgrid/mail";
import { en, cz } from "@locales/contact";
import { Langs } from "@locales/config";
import { useLocale } from "../root";
import { socials } from "@data/models";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const formData = Object.fromEntries(await request.formData());
  const { name, email, phone, message } = formData;

  if (
    typeof name === "string" &&
    typeof email === "string" &&
    typeof message === "string" &&
    typeof phone === "string"
  ) {
    const formErrors = {
      ...(!name && { name: "This field is required" }),
      ...(!email
        ? { email: "This field is required" }
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && {
            email: "Invalid email address",
          }),
      ...(phone && !/^\d+$/.test(phone) && { phone: "Invalid phone number" }),
      ...(!message && { message: "This field is required" }),
    };

    if (Object.values(formErrors).some(Boolean)) return { formErrors };

    await sendgrid
      .send({
        to: "contact@vantuch.dev",
        from: "contact@vantuch.dev",
        subject: "New contact from blog",
        html: `
      <div>
        <ul>
          <li><strong>Name: </strong> ${name}</li>
          <li><strong>Email: </strong> ${email}</li>
          ${phone && `<li><strong>Tel: </strong> ${phone}</li>`}
        </ul>
        <p>${message}</p>
      </div>
      `,
      })
      .then(() => {})
      .catch((err) => console.error(err)); // eslint-disable-line no-console

    return "success";
  }
};

export default function Contact() {
  const actionData = useActionData();
  const { locale } = useLocale();

  const t = useMemo(() => {
    const t = locale === Langs.en ? en : cz;
    return t;
  }, [locale]);

  useEffect(() => {
    const contactLinks = document.getElementsByClassName("contact-link");
    const contactLinkContainers = document.getElementsByClassName(
      "contact-link-container"
    );
    for (let i = 0; i < contactLinkContainers.length; i++) {
      contactLinkContainers[i].addEventListener("mouseover", () =>
        contactLinks[i].classList.add("contact-link-hover")
      );
      contactLinkContainers[i].addEventListener("mouseout", () =>
        contactLinks[i].classList.remove("contact-link-hover")
      );
    }
  }, []);

  return (
    <Form
      method="post"
      className="gap-4 sm:grid sm:h-full sm:grid-cols-3 sm:grid-rows-4"
    >
      <div className="t-01 l-01 border-r-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-r-2 sm:block"></div>
      <div className="border-sky-400 relative col-span-1 row-span-2 grid border-2 py-4 sm:static sm:p-0">
        <div className="relative w-full flex-col justify-evenly">
          {socials.map((s, i) => (
            <div
              key={i}
              className="w-full flex-row items-center justify-start gap-6 px-8 sm:justify-center lg:justify-start"
            >
              <img
                src={`/svg/${s.icon}.svg`}
                className="h-10 scale-75"
                alt={s.icon}
              />
              <span className="contact-link block text-base sm:hidden sm:text-lg lg:block">
                {t.links[s.icon]}
              </span>
            </div>
          ))}
          <div className="absolute h-full w-full flex-col justify-evenly">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="__blank"
                rel="noreferrer noopener nofollow"
                className="contact-link-container h-full w-full flex-row px-8"
              >
                {" "}
              </a>
            ))}
          </div>
        </div>
        <div className="contact-socials-corner-tr border-r-sky-400 bg-main absolute border-r-2 sm:hidden"></div>
        <div className="contact-socials-corner-tl border-r-sky-400 bg-main absolute border-r-2 sm:hidden"></div>
      </div>
      <div className="col-span-2 row-span-2 my-4 grid h-full grid-rows-3 gap-4 sm:m-0">
        <div
          className={`relative h-20 w-full border-2 sm:h-full ${
            actionData?.formErrors?.name ? "border-error" : "border-sky-400"
          }`}
        >
          <div
            className={`bg-main absolute left-4 -top-3 h-10 px-2 text-sm sm:-top-2 ${
              actionData?.formErrors?.name && "text-error"
            }`}
          >
            {actionData?.formErrors?.name
              ? actionData?.formErrors?.name
              : t.fields.name.title}
          </div>
          <input
            type="text"
            name="name"
            id=""
            placeholder={t.fields.name.placeholder || ""}
            spellCheck="false"
            autoCorrect="off"
            className="bg-main h-full w-full px-16 text-center text-xl outline-none"
          />
        </div>
        <div
          className={`relative h-20 w-full border-2 sm:h-full ${
            actionData?.formErrors?.email ? "border-error" : "border-sky-400"
          }`}
        >
          <div
            className={`bg-main absolute left-4 -top-3 h-10 px-2 text-sm ${
              actionData?.formErrors?.email && "text-error"
            }`}
          >
            {actionData?.formErrors?.email
              ? actionData?.formErrors?.email
              : t.fields.email.title}
          </div>
          <input
            type="text"
            name="email"
            id=""
            placeholder={t.fields.email.placeholder || ""}
            spellCheck="false"
            autoCorrect="off"
            className="bg-main h-full w-full px-16 text-center text-xl outline-none"
          />
        </div>
        <div
          className={`relative h-20 w-full border-2 sm:h-full ${
            actionData?.formErrors?.phone ? "border-error" : "border-sky-400"
          }`}
        >
          <div
            className={`bg-main absolute left-4 -top-3 h-10 px-2 text-sm ${
              actionData?.formErrors?.phone && "text-error"
            }`}
          >
            {actionData?.formErrors?.phone
              ? actionData?.formErrors?.phone
              : t.fields.phone.title}
          </div>
          <input
            type="text"
            name="phone"
            id=""
            placeholder={t.fields.phone.placeholder || ""}
            spellCheck="false"
            autoCorrect="off"
            className="bg-main h-full w-full px-16 text-center text-xl outline-none"
          />
        </div>
      </div>
      <div
        className={`border-red relative col-span-3 row-span-2 grid grid-rows-4 border-2 ${
          actionData?.formErrors?.message ? "border-error" : "border-sky-400"
        }`}
      >
        <textarea
          name="message"
          id=""
          spellCheck="false"
          autoCorrect="off"
          placeholder={t.fields.messagePlaceholder || ""}
          cols={30}
          rows={10}
          className="bg-main row-span-3 mb-6 grid resize-none p-10 text-xl outline-none"
        />
        <div className="absolute bottom-0 right-0 row-span-1 grid h-16 w-full grid-cols-3 grid-rows-1 lg:h-20">
          <button
            type="submit"
            className="contact-button border-sky-400 relative col-span-2 col-start-2 row-span-1 grid content-center justify-items-center border-2 border-r-0 border-b-0"
          >
            <div className="border-r-sky-400 bg-main absolute -top-4 -left-4 h-8 w-8 rotate-45 border-r-2"></div>
            <span className="text-2xl">{t.fields.send}</span>
          </button>
        </div>
        {actionData?.formErrors?.phone && (
          <div className="text-error bg-main absolute left-4 -top-3 h-10 px-2 text-sm">
            {actionData.formErrors.message}
          </div>
        )}
      </div>
    </Form>
  );
}
