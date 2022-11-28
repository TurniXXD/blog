import Glow from '../components/glow';

enum Icons {
  github = 'github',
  linkedin = 'linkedin',
  telegram = 'telegram',
  email = 'email'
}

interface Socials {
  url: string,
  name: string,
  icon: Icons
}

export default function Contact() {
  const socials: Socials[] = [
    {
      url: 'https://github.com/TurniXXD',
      name: 'GitHub',
      icon: Icons.github
    },
    {
      url: 'https://www.linkedin.com/in/jakub-vantuch-552514197/',
      name: 'LinkedIn',
      icon: Icons.linkedin
    },
    {
      url: 'https://t.me/turnix',
      name: 'Telegram',
      icon: Icons.telegram
    },
    {
      url: 'mailto:contact@vantuch.dev',
      name: 'Email',
      icon: Icons.email
    },
  ]

  return (
    <div className="gap-4 sm:grid-cols-3 sm:grid-rows-4 h-full">
      <div className="hidden sm:block t-01 l-01 absolute h-8 w-8 rotate-45 border-r-2 border-r-sky-400 bg-grey"></div>
      <div className="grid row-span-2 col-span-1 border-2 border-sky-400">
        <div className="flex-col relative justify-evenly w-full">
          {socials.map((s, i) => (
            <div key={i} className="flex-row w-full px-8 items-center gap-6">
              <img src={`/svg/${s.icon}.svg`} className="scale-75 h-10" />
              <span className="nav-link text-base sm:text-lg">{s.name}</span>
            </div>
          ))}
          <div className="absolute flex-col justify-evenly h-full w-full">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="__blank"
                rel="noreferrer noopener nofollow"
                className="nav-link-container flex-row h-full w-full px-8"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="row-span-2 col-span-2 grid-rows-3 h-full gap-4">
        <input
          type="text"
          name="name"
          id=""
          spellCheck="false"
          autoCorrect="off"
          className="h-full w-full px-16 bg-grey border-2 border-sky-400 outline-none text-xl text-center"
        />
        <input
          type="text"
          name="email"
          id=""
          spellCheck="false"
          autoCorrect="off"
          className="h-full w-full px-16 bg-grey border-2 border-sky-400 outline-none text-xl text-center"
        />
        <input
          type="text"
          name="phone"
          id=""
          spellCheck="false"
          autoCorrect="off"
          className="h-full w-full px-16 bg-grey border-2 border-sky-400 outline-none text-xl text-center"
        />
      </div>
      <div className="grid row-span-2 col-span-3 border-2 border-sky-400">
        <textarea
          name="message"
          id=""
          spellCheck="false"
          autoCorrect="off"
          cols={30}
          rows={10}
          className="outline-none text-xl p-10 bg-grey resize-none"
        />
      </div>
    </div>
  );
}
