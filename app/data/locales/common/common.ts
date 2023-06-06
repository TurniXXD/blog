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
				meTxt: "já.txt",
				meditationsTxt: "moje_meditace.txt",
			},
			cat: {
				meTxt:
					"Jsem full-stack web developer z České republiky zaměřující se především na technologie postavené na frameworku React.js, a backendové řešení v Go nebo Node.js.",
				meditationsTxt: "",
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
        meditationsTxt: "my_meditations.txt",
			},
			cat: {
				meTxt:
					"It's me! I am a full-stack web developer from Czech Republic. My main focus are technologies built on top of the React.js framework, and Go or Node.js backend solutions to power my projects.",
				meditationsTxt: `We shouldn't be afraid of death, there is absolute nothingness that you won't have to expirience compared to any other fear that is proven by experience. It is not even the fear of the unknown that proceeds death it's the fear that the knowledge that you gained won't be preserved. On the evolution level, sharing knowledge by reproducing, was the key to today's life. On a molecular level all that cells do is share information or die. To share knowledge is to become immortal.

        It's important to establish that knowledge shouldn't be something that is forced to a person, it should be of a kind that makes a person more focused on sharing and improving his gained knowledge. Right now unique skill is what leads a person to the path of wealth, but it is only to a point when person cannot be easilly replaced or when he establishes enough wealth to reach independence. From a bigger point of view the only things that a person strives for are health, wealth and happiness, but what is wealth if person is always after what is another's and only counts what he has yet to get, and never what he already has. Only by living thus, and not setting too high value on things which can at any moment be taken away from him, can he discover that true, unshakable peace and contentment.
        
        Before acquiring knowledge the truthfulness of an argument should be established, but how can we tell the truth from deceptive lies? When person lies he is trying to convince people more about his argument, and that there is no possibilty that it isn't right, then if he was telling the truth. In heated arguments body language teaches us that person will use open body language more forcefully (banging his hands on the table with his palms open, using more gestures) when he tries his best to express his opinion. The worst scenario is if a person believes that what he shares is the truth, which gaves him assurance about his acts. This can only happen to a person who blindly subjugated to the information without contemplating about it. It is also a spirit killer to believe in religion or artificially created beliefs more than philosophy and psychology.
        
        A man who knows not to which port he sails doesn't find any port favorable. In other words, living without meaning is always finding yourself in a place of uncertain future, short lasting gratification, no self reflection and without any possibility of escape. The sooner you begin to stop giving people chances to destroy your imagination, the sooner you can find your meaning. We suffer more in imagination then in real life, because real life is the result of imagination, if you can set you mindset properly. Determine what will be the result of your doings before going on this path, if it will bring any real value to the world around you and change people's lives, or if it will just help to spin the neverending wheels of the system. Don't waste your time talking about what good man is like, you should be one. When you find your meaning stick to it and give it hundred percent of your effort. Soon you'll understand that if you wanna go fast then go alone, but if you wanna go far then go find a reliable team that will share your vision. When you nurture your goal it's hard to entrust someone with care of it, but to be everywhere is to be nowhere, and by slowly passing on subordinate tasks to other people you can focus on the bigger picture.
        
        We pursue marketing even though we know all of our celebrities and idols are counterfits. Why are we paying off someone who can kick ball in millions, and doctors and scientists get practically nothing. Our judgement cannot be thus until these values are restored`,
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
