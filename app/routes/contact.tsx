import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect } from "react";
import { mailer } from "../utils/config";

enum Icons {
  github = "github",
  linkedin = "linkedin",
  telegram = "telegram",
  email = "email",
}

interface Socials {
  url: string;
  name: string;
  icon: Icons;
}

export const action: ActionFunction = async ({ request }) => {
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

    mailer
      .send(
        "ContactEmailResponse",
        { name, email, ...(phone && { phone }), message },
        {
          to: "my@email.com",
        }
      )
      .catch((err) => console.log(err))
      .then((res) => console.log(res));

    return "success";
  }
};

export default function Contact() {
  const actionData = useActionData();

  const socials: Socials[] = [
    {
      url: "https://github.com/TurniXXD",
      name: "GitHub",
      icon: Icons.github,
    },
    {
      url: "https://www.linkedin.com/in/jakub-vantuch-552514197/",
      name: "LinkedIn",
      icon: Icons.linkedin,
    },
    {
      url: "https://t.me/turnix",
      name: "Telegram",
      icon: Icons.telegram,
    },
    {
      url: "mailto:contact@vantuch.dev",
      name: "Email",
      icon: Icons.email,
    },
  ];

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
      <div className="t-01 l-01 border-r-sky-400 absolute hidden h-8 w-8 rotate-45 border-r-2 bg-grey sm:block"></div>
      <div className="border-sky-400 col-span-1 row-span-2 grid border-2">
        <div className="relative w-full flex-col justify-evenly">
          {socials.map((s, i) => (
            <div
              key={i}
              className="w-full flex-row items-center justify-start gap-6 px-8 sm:justify-center lg:justify-start"
            >
              <img src={`/svg/${s.icon}.svg`} className="h-10 scale-75" />
              <span className="contact-link block text-base sm:hidden sm:text-lg lg:block">
                {s.name}
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
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-2 grid h-full grid-rows-3 gap-4">
        <div
          className={`relative h-20 w-full border-2 sm:h-full ${
            actionData?.formErrors?.name ? "border-error" : "border-sky-400"
          }`}
        >
          {actionData?.formErrors?.name && (
            <div className="text-error absolute left-4 -top-2 h-10 bg-grey px-2 text-sm">
              {actionData.formErrors.name}
            </div>
          )}
          <input
            type="text"
            name="name"
            id=""
            placeholder="Name"
            spellCheck="false"
            autoCorrect="off"
            className="h-full w-full bg-grey px-16 text-center text-xl outline-none"
          />
        </div>
        <div
          className={`relative h-20 w-full border-2 sm:h-full ${
            actionData?.formErrors?.email ? "border-error" : "border-sky-400"
          }`}
        >
          {actionData?.formErrors?.email && (
            <div className="text-error absolute left-4 -top-3 h-10 bg-grey px-2 text-sm">
              {actionData.formErrors.email}
            </div>
          )}
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email"
            spellCheck="false"
            autoCorrect="off"
            className="h-full w-full bg-grey px-16 text-center text-xl outline-none"
          />
        </div>
        <div
          className={`relative h-20 w-full border-2 sm:h-full ${
            actionData?.formErrors?.phone ? "border-error" : "border-sky-400"
          }`}
        >
          {actionData?.formErrors?.phone && (
            <div className="text-error absolute left-4 -top-3 h-10 bg-grey px-2 text-sm">
              {actionData.formErrors.phone}
            </div>
          )}
          <input
            type="text"
            name="phone"
            id=""
            placeholder="Phone"
            spellCheck="false"
            autoCorrect="off"
            className="h-full w-full bg-grey px-16 text-center text-xl outline-none"
          />
        </div>
      </div>
      <div
        className={`border-red relative col-span-3 row-span-2 grid grid-rows-3 border-2 ${
          actionData?.formErrors?.message ? "border-error" : "border-sky-400"
        }`}
      >
        <textarea
          name="message"
          id=""
          spellCheck="false"
          autoCorrect="off"
          placeholder="Let me make your dream come true..."
          cols={30}
          rows={10}
          className="row-span-2 mb-6 grid resize-none bg-grey p-10 text-xl outline-none"
        />
        <div className="absolute bottom-0 right-0 row-span-1 grid h-28 w-full grid-cols-3 grid-rows-1">
          <button
            type="submit"
            className="contact-button border-sky-400 relative col-span-2 col-start-2 row-span-1 grid content-center justify-items-center border-2 border-r-0 border-b-0"
          >
            <div className="border-r-sky-400 absolute -top-4 -left-4 hidden h-8 w-8 rotate-45 border-r-2 bg-grey sm:block"></div>
            <span className="text-2xl">Send</span>
          </button>
        </div>
        {actionData?.formErrors?.phone && (
          <div className="text-error absolute left-4 -top-3 h-10 bg-grey px-2 text-sm">
            {actionData.formErrors.message}
          </div>
        )}
      </div>
    </Form>
  );
}
