import type ICommon from "./types";

export const cz: ICommon = {
	menu: {
		services: "Služby",
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
				services: "služby",
				work: "projekty",
				skills: "dovednosti",
				contact: "kontakt",
				meTxt: "já.txt",
				meditationsTxt: "moje_meditace.txt",
        startupGuide: "průvodce_startupem.txt",
			},
			cat: {
				meTxt:
					"Jsem full-stack web developer z České republiky zaměřující se především na technologie postavené na frameworku React.js, a backendové řešení v Go nebo Node.js.",
				meditationsTxt: `Smrti bychom se neměli bát, je tu naprostá nicota, kterou nebudete muset zažít ve srovnání s jakýmkoli jiným strachem ověřeným zkušenostmi. Není to ani strach z neznámého, co vede ke smrti, ale strach, že znalosti, které jste získali, nebudou zachovány. Na evoluční úrovni bylo sdílení znalostí reprodukcí klíčem k dnešnímu životu. Na molekulární úrovni vše, co buňky dělají, je sdílet informace nebo zemřít. Sdílet znalosti znamená stát se nesmrtelným.

        Je důležité stanovit, že znalosti by neměly být něčím, co je člověku vnuceno, mělo by to být takové, aby se člověk více soustředil na sdílení a zlepšování získaných znalostí. Právě teď je jedinečná dovednost to, co vede člověka na cestu bohatství, ale je to pouze do bodu, kdy ho nelze snadno nahradit nebo kdy si vytvoří dostatek bohatství k dosažení nezávislosti. Z většího hlediska jediné, o co člověk touží, je zdraví, bohatství a štěstí, ale co je to bohatství, když člověk vždy touží po tom, co je cizí, a počítá jen to, co ještě musí získat, a nikdy ne to, co už má. Jedině tak, že bude žít a nebude příliš hodnotit věci, které mu mohou být kdykoli odebrány, může objevit ten pravý, neotřesitelný klid a spokojenost.
       
        Před získáním znalostí by měla být prokázána pravdivost argumentu, ale jak můžeme rozlišit pravdu od klamných lží? Když člověk lže, snaží se lidi více přesvědčit o svém argumentu a že neexistuje žádná možnost, že by to nebylo správné, pak pokud mluvil pravdu. V prudkých hádkách nás řeč těla učí, že člověk bude používat otevřenou řeč těla důrazněji (bouchá rukama do stolu s otevřenými dlaněmi, používá více gest), když se ze všech sil snaží vyjádřit svůj názor. Nejhorší scénář je, pokud člověk věří, že to, co sdílí, je pravda, což mu dává jistotu o jeho činech. To se může stát pouze člověku, který se slepě podřídil informacím, aniž by o tom přemýšlel. Zabijákem duchů je také věřit v náboženství nebo uměle vytvořená přesvědčení více než ve filozofii a psychologii.
       
        Člověk, který neví, do kterého přístavu pluje, neshledává žádný přístav výhodný. Jinými slovy, život beze smyslu znamená vždy se ocitnout v místě nejisté budoucnosti, krátkodobého uspokojení, bez sebereflexe a bez jakékoli možnosti úniku. Čím dříve přestanete dávat lidem šanci zničit vaši představivost, tím dříve najdete svůj význam. V představách trpíme více než v reálném životě, protože skutečný život je výsledkem představivosti, pokud si dokážete správně nastavit své myšlení. Určete, co bude výsledkem vašich činů, než se vydáte na tuto cestu, jestli to přinese světu kolem vás nějakou skutečnou hodnotu a změní životy lidí, nebo jestli to jen pomůže roztočit nekonečná kola systému. Neztrácejte čas mluvením o tom, jaký je dobrý muž, měli byste jím být. Když najdete svůj význam, držte se ho a věnujte mu sto procent svého úsilí. Brzy pochopíte, že pokud chcete jít rychle, jděte sami, ale pokud chcete jít daleko, najděte si spolehlivý tým, který bude sdílet vaši vizi. Když pečujete o svůj cíl, je těžké svěřit někomu péči o něj, ale být všude znamená nebýt nikde a pomalým předáváním podřízených úkolů jiným lidem se můžete soustředit na širší obraz.
       
        Zabýváme se marketingem, i když víme, že všechny naše celebrity a idoly jsou padělky. Proč platíme někoho, kdo umí kopat do míče v milionech, a lékaři a vědci nedostanou prakticky nic. Náš úsudek nemůže být takový, dokud tyto hodnoty nebudou obnoveny`,
				startupGuide: `1. Vytvořte strategickou síť <br/>
        2. Najděte problém / Někdo za vámi přijde s problémem / Pokud přijdete s řešením nejprve ověřte, že existuje problém, zaměřte se na B2B <br/>
        3. Ověřte, že problém existuje s více lidmi <br/>
        4. Najděte řešení <br/>
        5. Určete cílové publikum, buďte konkrétní, je v pořádku vytvářet různé plány pro různé cílové skupiny <br/>
        6. Vytvořte štíhlé plátno a swot <br/>
        7. Validace problém a anyláza trhu formou obvolání potencionálních zákazníků / Formulářem /  Přimou konzultací s někým z cílové skupiny <br/>
        8. Vytvořte MVP <br/>
        9. Připojte se k soutěži / Akcelerátoru <br/>
        10. Najděte investora <br/>`,
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
  identification: {
    btn: "Identifikace",
    content: "Jakub Vantuch, IČO: 19462590, místo podnikání M. Chasáka 3142, 738 01, Frýdek-Místek, zapsaný v živnostenském rejstříku"
  }
};

export const en: ICommon = {
	menu: {
		services: "Services",
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
				services: "services",
				work: "work",
				skills: "skills",
				contact: "contact",
				meTxt: "me.txt",
				meditationsTxt: "my_meditations.txt",
        startupGuide: "startup_guide.txt",
			},
			cat: {
				meTxt:
					"It's me! I am a full-stack web developer from Czech Republic. My main focus are technologies built on top of the React.js framework, and Go or Node.js backend solutions to power my projects.",
				meditationsTxt: `We shouldn't be afraid of death, there is absolute nothingness that you won't have to expirience compared to any other fear that is proven by experience. It is not even the fear of the unknown that proceeds death it's the fear that the knowledge that you gained won't be preserved. On the evolution level, sharing knowledge by reproducing, was the key to today's life. On a molecular level all that cells do is share information or die. To share knowledge is to become immortal.

        It's important to establish that knowledge shouldn't be something that is forced to a person, it should be of a kind that makes a person more focused on sharing and improving his gained knowledge. Right now unique skill is what leads a person to the path of wealth, but it is only to a point when person cannot be easilly replaced or when he establishes enough wealth to reach independence. From a bigger point of view the only things that a person strives for are health, wealth and happiness, but what is wealth if person is always after what is another's and only counts what he has yet to get, and never what he already has. Only by living thus, and not setting too high value on things which can at any moment be taken away from him, can he discover that true, unshakable peace and contentment.
        
        Before acquiring knowledge the truthfulness of an argument should be established, but how can we tell the truth from deceptive lies? When person lies he is trying to convince people more about his argument, and that there is no possibilty that it isn't right, then if he was telling the truth. In heated arguments body language teaches us that person will use open body language more forcefully (banging his hands on the table with his palms open, using more gestures) when he tries his best to express his opinion. The worst scenario is if a person believes that what he shares is the truth, which gaves him assurance about his acts. This can only happen to a person who blindly subjugated to the information without contemplating about it. It is also a spirit killer to believe in religion or artificially created beliefs more than philosophy and psychology.
        
        A man who knows not to which port he sails doesn't find any port favorable. In other words, living without meaning is always finding yourself in a place of uncertain future, short lasting gratification, no self reflection and without any possibility of escape. The sooner you begin to stop giving people chances to destroy your imagination, the sooner you can find your meaning. We suffer more in imagination then in real life, because real life is the result of imagination, if you can set you mindset properly. Determine what will be the result of your doings before going on this path, if it will bring any real value to the world around you and change people's lives, or if it will just help to spin the neverending wheels of the system. Don't waste your time talking about what good man is like, you should be one. When you find your meaning stick to it and give it hundred percent of your effort. Soon you'll understand that if you wanna go fast then go alone, but if you wanna go far then go find a reliable team that will share your vision. When you nurture your goal it's hard to entrust someone with care of it, but to be everywhere is to be nowhere, and by slowly passing on subordinate tasks to other people you can focus on the bigger picture.
        
        We pursue marketing even though we know all of our celebrities and idols are counterfits. Why are we paying off someone who can kick ball in millions, and doctors and scientists get practically nothing. Our judgement cannot be thus until these values are restored`,
				startupGuide: `1. Create strategic network <br/>
        2. Find problem / Someone comes to you with a problem / If you come up with a solutions first validate that there is a problem, focus on B2B <br/>
        3. Validate that a problem exists with more people <br/>
        4. Find solutions <br/>
        5. Determine target audience, be specific it is okay to create different plans for different audiences <br/>
        6. Create lean canvas and swot <br/>
        7. Validate market direct approach / Call / Form / Consult with someone from target group <br/>
        8. Create MVP <br/>
        9. Join contest / Accelerator <br/>
        10. Find investor <br/>`
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
  identification: {
    btn: "Identification",
    content: "Jakub Vantuch, IČO: 19462590, místo podnikání M. Chasáka 3142, 738 01, Frýdek-Místek, zapsaný v živnostenském rejstříku"
  }
};
