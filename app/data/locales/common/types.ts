interface Menu {
  services: string;
  work: string;
  skills: string;
  contact: string;
}

interface Stats {
  cpu: string;
  mem: string;
  net: string;
  disk: string;
}

interface TerminalCommands {
  help: string;
  ls: {
    services: string;
    work: string;
    skills: string;
    contact: string;
    meTxt: string;
    meditationsTxt: string;
    startupGuide: string;
  };
  cat: {
    meTxt: string;
    meditationsTxt: string;
    startupGuide: string;
  };
}

interface TerminalMessages {
  noDir: string;
  cannotFind: string;
  noFile: string;
  isDir: string;
  isFile: string;
  lsNoParam: string;
}

interface Terminal {
  tooltip: string;
  user: string;
  commands: TerminalCommands;
  messages: TerminalMessages;
}

interface Identification {
  btn: string;
  content: string;
}

export default interface ICommon {
  menu: Menu;
  stats: Stats;
  terminal: Terminal;
  identification: Identification;
}
