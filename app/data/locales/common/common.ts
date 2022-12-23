import type ICommon from "./types";

export const cz: ICommon = {
  menu: {
    about: "O mě",
    work: "Projekty",
    skills: "Dovednosti",
    contact: "Kontakt",
  },
  stats: {
    cpu: "CPU",
    mem: "MEM",
    net: "NET",
    disk: "DISK",
  },
  terminal: {
    tooltip:
      "Začněte spuštěním příkazů. Pro zobrazení dostupných příkazů napište 'help'.",
    user: "vantuch@dev",
    commands: {
      help: "Dostupné příkazy jsou 'help', 'cd', 'ls', 'cat'",
      ls: {
        about: "o_mě",
        work: "projekty",
        skills: "dovednosti",
        contact: "kontakt",
        meTxt: "můj_příběh.txt",
      },
      cat: {
        meTxt:
          "Jsem full-stack web developer z České republiky zaměřující se především na technologie postavené na frameworku React.js, a backendové řešení v Go nebo Node.js.",
      },
    },
    messages: {
      noDir: "Nebyl zvolen adresář",
      cannotFind: "Adresář {{dir}} nebyl nalezen",
      noFile: "Nebyl specifikován žádný soubor",
      isDir: "{{dir}} je adresář",
      isFile: "{{file}} je soubor",
      lsNoParam: "Příkaz ls nemá žádný parametr",
    },
  },
};

export const en: ICommon = {
  menu: {
    about: "About",
    work: "Work",
    skills: "Skills",
    contact: "Contact",
  },
  stats: {
    cpu: "CPU",
    mem: "MEM",
    net: "NET",
    disk: "DISK",
  },
  terminal: {
    tooltip: "Start by typing commands. To see available commands type 'help'.",
    user: "vantuch@dev",
    commands: {
      help: "Available commands are 'help', 'cd', 'ls', 'cat'",
      ls: {
        about: "about",
        work: "work",
        skills: "skills",
        contact: "contact",
        meTxt: "me.txt",
      },
      cat: {
        meTxt:
          "It's me! I am a full-stack web developer from the Czech Republic focusing primarily on technologies built on top of the React.js framework, and Go or Node.js backend solutions to power my projects.",
      },
    },
    messages: {
      noDir: "No directory specified",
      cannotFind: "No such file or directory {{value}}",
      noFile: "No file specified",
      isDir: "{{dir}} is a directory",
      isFile: "{{file}} is a file",
      lsNoParam: "Command ls has no parameters",
    },
  },
};
