/* =========================================================
   IRADUKUNDA JOSEE — PROFESSIONAL PORTFOLIO
   Main JavaScript
========================================================= */


/* =========================================================
   01. WAIT FOR PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;

    const header =
        document.getElementById("header");

    const themeToggle =
        document.getElementById("themeToggle");

    const menuToggle =
        document.getElementById("menuToggle");

    const nav =
        document.getElementById("nav");

    const languageSelector =
        document.querySelector(".language-selector");

    const languageButton =
        document.getElementById("languageButton");

    const languageMenu =
        document.getElementById("languageMenu");

    const currentLanguage =
        document.getElementById("currentLanguage");

    const scrollProgress =
        document.getElementById("scrollProgress");

    const backToTop =
        document.getElementById("backToTop");

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");

    const currentYear =
        document.getElementById("currentYear");


    /* =====================================================
       02. CURRENT YEAR
    ===================================================== */

    if (currentYear) {
        currentYear.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       03. THEME — DARK / LIGHT
    ===================================================== */

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {

        document.documentElement
            .setAttribute(
                "data-theme",
                "light"
            );

    } else {

        document.documentElement
            .removeAttribute("data-theme");
    }


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                const currentTheme =
                    document.documentElement
                        .getAttribute("data-theme");

                if (currentTheme === "light") {

                    document.documentElement
                        .removeAttribute(
                            "data-theme"
                        );

                    localStorage.setItem(
                        "portfolio-theme",
                        "dark"
                    );

                } else {

                    document.documentElement
                        .setAttribute(
                            "data-theme",
                            "light"
                        );

                    localStorage.setItem(
                        "portfolio-theme",
                        "light"
                    );
                }

            }
        );

    }


    /* =====================================================
       04. MOBILE NAVIGATION
    ===================================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener(
            "click",
            () => {

                nav.classList.toggle("open");

                const icon =
                    menuToggle.querySelector("i");

                if (nav.classList.contains("open")) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Close navigation menu"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );
                }

            }
        );


        /* Close menu when clicking a link */

        const navLinks =
            nav.querySelectorAll(
                ".nav-link"
            );

        navLinks.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "open"
                    );

                    const icon =
                        menuToggle.querySelector("i");

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        });

    }


    /* =====================================================
       05. LANGUAGE SYSTEM
    ===================================================== */

    const translations = {

        /* ================================================
           ENGLISH
        ================================================ */

        en: {

            "nav.home": "Home",
            "nav.about": "About",
            "nav.skills": "Skills",
            "nav.projects": "Projects",
            "nav.education": "Education",
            "nav.experience": "Experience",
            "nav.contact": "Contact",


            "hero.available":
                "Open to opportunities",

            "hero.greeting":
                "Hello, I'm",

            "hero.role":
                "Software Engineering Student",

            "hero.description":
                "I build modern, responsive and user-focused digital experiences while developing practical skills in software engineering, web development, programming and database systems.",

            "hero.viewProjects":
                "View My Projects",

            "hero.downloadCV":
                "Download CV",

            "hero.connect":
                "Connect with me",

            "hero.scroll":
                "Scroll to explore",


            /* ABOUT */

            "about.label":
                "ABOUT ME",

            "about.title":
                "Turning ideas into digital solutions.",

            "about.student":
                "Software Engineering Student",

            "about.lead":
                "I am passionate about technology and software development, with a strong interest in building useful and reliable digital solutions.",

            "about.text":
                "My learning journey focuses on software engineering, web development, programming, databases and problem-solving. I enjoy transforming ideas into functional applications and continuously improving my technical skills through practical projects.",

            "about.text2":
                "I believe good software should be simple to use, responsive, maintainable and designed around real user needs.",

            "about.statProjects":
                "Projects",

            "about.statLanguages":
                "Languages",

            "about.statLearning":
                "Learning Mindset",


            /* SKILLS */

            "skills.label":
                "MY SKILLS",

            "skills.title":
                "Technologies & capabilities.",

            "skills.web.title":
                "Web Development",

            "skills.web.text":
                "Building responsive and user-friendly websites using modern web technologies.",

            "skills.programming.title":
                "Programming",

            "skills.programming.text":
                "Developing logical solutions and applications using programming concepts.",

            "skills.database.title":
                "Databases",

            "skills.database.text":
                "Working with relational databases, queries and structured information.",

            "skills.software.title":
                "Software Engineering",

            "skills.software.text":
                "Applying software development principles to plan, build, test and improve applications.",


            /* PROJECTS */

            "projects.label":
                "SELECTED WORK",

            "projects.title":
                "Projects I'm building.",

            "projects.rwanda.title":
                "Rwanda 24",

            "projects.rwanda.text":
                "A news platform concept designed to publish trending stories from Rwanda and around the world through a modern digital experience.",

            "projects.student.title":
                "Student Management System",

            "projects.student.text":
                "A database-oriented application concept for managing student information, records and structured academic data.",

            "projects.portfolio.title":
                "Personal Portfolio",

            "projects.portfolio.text":
                "A responsive portfolio website created to showcase software engineering skills, projects, education and professional development.",


            /* EDUCATION */

            "education.label":
                "EDUCATION",

            "education.title":
                "My learning journey.",

            "education.degree":
                "Software Engineering",

            "education.faculty":
                "Faculty of Information Technology",

            "education.degreeText":
                "Developing knowledge in software development, programming, databases, systems analysis and modern information technology.",

            "education.secondary":
                "Secondary Education",

            "education.secondarySchool":
                "Secondary School",

            "education.secondaryText":
                "Completed secondary-level education and developed the foundation for further studies in technology and software engineering.",


            /* EXPERIENCE */

            "experience.label":
                "EXPERIENCE",

            "experience.title":
                "Learning through practical work.",

            "experience.web.title":
                "Web Application Development",

            "experience.web.text":
                "Building responsive web interfaces and application concepts while practicing front-end development, debugging, usability and responsive design.",

            "experience.web.point1":
                "Developed responsive interfaces using HTML, CSS and JavaScript.",

            "experience.web.point2":
                "Practiced debugging and improving application functionality.",

            "experience.web.point3":
                "Applied version-control concepts and organized project files professionally.",

            "experience.database.title":
                "Database & Information Systems",

            "experience.database.text":
                "Practicing relational database concepts and developing structured solutions for storing, retrieving and managing information.",

            "experience.database.point1":
                "Created database structures and tables.",

            "experience.database.point2":
                "Practiced SQL queries and data management.",

            "experience.database.point3":
                "Applied concepts such as relationships, normalization and data integrity.",


            /* CV */

            "cv.label":
                "MY CV",

            "cv.title":
                "Want to know more about my journey?",

            "cv.text":
                "Download my CV to explore my education, skills, projects and professional development.",

            "cv.button":
                "Download CV",


            /* CONTACT */

            "contact.label":
                "CONTACT",

            "contact.title":
                "Let's build something useful.",

            "contact.intro":
                "Whether you want to discuss a project, collaboration or opportunity, feel free to get in touch.",

            "contact.phone":
                "Phone",

            "contact.location":
                "Location",

            "contact.follow":
                "Follow me",

            "contact.form.name":
                "Your Name",

            "contact.form.email":
                "Your Email",

            "contact.form.subject":
                "Subject",

            "contact.form.message":
                "Message",

            "contact.form.namePlaceholder":
                "Enter your name",

            "contact.form.emailPlaceholder":
                "Enter your email",

            "contact.form.subjectPlaceholder":
                "What is this about?",

            "contact.form.messagePlaceholder":
                "Write your message...",

            "contact.form.send":
                "Send Message",


            /* FOOTER */

            "footer.text":
                "Building skills. Creating solutions. Growing through technology.",

            "footer.rights":
                "All rights reserved.",

            "footer.built":
                "Designed & built with",

            "footer.by":
                "by Iradukunda Josee"
        },


        /* ================================================
           KINYARWANDA
        ================================================ */

        rw: {

            "nav.home":
                "Ahabanza",

            "nav.about":
                "Abo Ndi We",

            "nav.skills":
                "Ubumenyi",

            "nav.projects":
                "Imishinga",

            "nav.education":
                "Amashuri",

            "nav.experience":
                "Uburambe",

            "nav.contact":
                "Twandikire",


            "hero.available":
                "Niteguye amahirwe mashya",

            "hero.greeting":
                "Muraho, ndi",

            "hero.role":
                "Umunyeshuri wa Software Engineering",

            "hero.description":
                "Nkora imbuga n'ibisubizo bya software bigezweho, byihuta kandi byoroshye gukoresha, mugihe nkomeza guteza imbere ubumenyi bwanjye muri software engineering, web development, programming na databases.",

            "hero.viewProjects":
                "Reba Imishinga Yanjye",

            "hero.downloadCV":
                "Kuramo CV",

            "hero.connect":
                "Twandikire",

            "hero.scroll":
                "Komeza urebe",


            "about.label":
                "ABO NDI WE",

            "about.title":
                "Guhindura ibitekerezo ibisubizo bya digital.",

            "about.student":
                "Umunyeshuri wa Software Engineering",

            "about.lead":
                "Nkunda ikoranabuhanga na software development, cyane cyane kubaka ibisubizo bya digital bifite akamaro kandi byizewe.",

            "about.text":
                "Urugendo rwanjye rwo kwiga rwibanda kuri software engineering, web development, programming, databases no gukemura ibibazo. Nkunda guhindura ibitekerezo bikavamo applications zikora kandi nkomeza guteza imbere ubumenyi bwanjye binyuze mu mishinga.",

            "about.text2":
                "Nizera ko software nziza igomba kuba yoroshye gukoresha, yihuta, yoroshye kuyitaho kandi yubakiye ku byo abayikoresha bakeneye.",

            "about.statProjects":
                "Imishinga",

            "about.statLanguages":
                "Indimi",

            "about.statLearning":
                "Gukomeza Kwiga",


            "skills.label":
                "UBUMENYI BWANJYE",

            "skills.title":
                "Technologies n'ubushobozi.",

            "skills.web.title":
                "Web Development",

            "skills.web.text":
                "Kubaka websites zikora neza kuri telefoni, mudasobwa n'ibindi bikoresho.",

            "skills.programming.title":
                "Programming",

            "skills.programming.text":
                "Gukoresha programming mu gukora ibisubizo no kubaka applications.",

            "skills.database.title":
                "Databases",

            "skills.database.text":
                "Gukoresha relational databases, SQL n'imicungire y'amakuru.",

            "skills.software.title":
                "Software Engineering",

            "skills.software.text":
                "Gukoresha amahame ya software development mu gutegura, kubaka, kugerageza no kunoza applications.",


            "projects.label":
                "IMISHINGA",

            "projects.title":
                "Imishinga ndimo gukora.",

            "projects.rwanda.title":
                "Rwanda 24",

            "projects.rwanda.text":
                "Umushinga w'urubuga rw'amakuru rugamije gutangaza inkuru zigezweho zo mu Rwanda no ku isi.",

            "projects.student.title":
                "Student Management System",

            "projects.student.text":
                "Application yibanda ku micungire y'amakuru y'abanyeshuri, records n'amakuru y'amashuri.",

            "projects.portfolio.title":
                "Personal Portfolio",

            "projects.portfolio.text":
                "Urubuga rwanjye bwite rwerekana ubumenyi, imishinga, amashuri n'urugendo rwanjye muri software engineering.",


            "education.label":
                "AMASHURI",

            "education.title":
                "Urugendo rwanjye rwo kwiga.",

            "education.degree":
                "Software Engineering",

            "education.faculty":
                "Faculty of Information Technology",

            "education.degreeText":
                "Kwiga software development, programming, databases, systems analysis n'ikoranabuhanga rya information technology.",

            "education.secondary":
                "Amashuri yisumbuye",

            "education.secondarySchool":
                "Secondary School",

            "education.secondaryText":
                "Narangije amashuri yisumbuye kandi nkomereza ku bumenyi bujyanye n'ikoranabuhanga na software engineering.",


            "experience.label":
                "UBURAMBE",

            "experience.title":
                "Kwiga binyuze mu gukora imishinga.",

            "experience.web.title":
                "Web Application Development",

            "experience.web.text":
                "Kubaka interfaces za websites zikora kuri devices zitandukanye no kwimenyereza front-end development, debugging na responsive design.",

            "experience.web.point1":
                "Nubatse interfaces zikora neza nkoresheje HTML, CSS na JavaScript.",

            "experience.web.point2":
                "Nimenyereje gukemura errors no kunoza imikorere ya applications.",

            "experience.web.point3":
                "Nimenyereje version control no gutunganya files z'imishinga mu buryo bwa professional.",

            "experience.database.title":
                "Database & Information Systems",

            "experience.database.text":
                "Kwimenyereza relational databases no kubaka ibisubizo byo kubika, gushakisha no gucunga amakuru.",

            "experience.database.point1":
                "Nakoze database structures na tables.",

            "experience.database.point2":
                "Nimenyereje SQL queries no gucunga amakuru.",

            "experience.database.point3":
                "Nize relationships, normalization na data integrity.",


            "cv.label":
                "CV YANJYE",

            "cv.title":
                "Urashaka kumenya byinshi ku rugendo rwanjye?",

            "cv.text":
                "Kuramo CV yanjye urebe amashuri, ubumenyi, imishinga n'urugendo rwanjye rwo kwiteza imbere.",

            "cv.button":
                "Kuramo CV",


            "contact.label":
                "TWANDIKIRE",

            "contact.title":
                "Reka dukore ikintu gifite akamaro.",

            "contact.intro":
                "Niba ushaka kuganira ku mushinga, ubufatanye cyangwa amahirwe, ushobora kunyoherereza ubutumwa.",

            "contact.phone":
                "Telefone",

            "contact.location":
                "Aho ndi",

            "contact.follow":
                "Nkurikira",

            "contact.form.name":
                "Amazina",

            "contact.form.email":
                "Email",

            "contact.form.subject":
                "Umutwe",

            "contact.form.message":
                "Ubutumwa",

            "contact.form.namePlaceholder":
                "Andika amazina yawe",

            "contact.form.emailPlaceholder":
                "Andika email yawe",

            "contact.form.subjectPlaceholder":
                "Ubutumwa bujyanye n'iki?",

            "contact.form.messagePlaceholder":
                "Andika ubutumwa bwawe...",

            "contact.form.send":
                "Ohereza Ubutumwa",


            "footer.text":
                "Kubaka ubumenyi. Gukora ibisubizo. Gutera imbere binyuze mu ikoranabuhanga.",

            "footer.rights":
                "Uburenganzira bwose burabitswe.",

            "footer.built":
                "Yakozwe kandi yubatswe na",

            "footer.by":
                "Iradukunda Josee"
        },


        /* ================================================
           FRENCH
        ================================================ */

        fr: {

            "nav.home":
                "Accueil",

            "nav.about":
                "À propos",

            "nav.skills":
                "Compétences",

            "nav.projects":
                "Projets",

            "nav.education":
                "Formation",

            "nav.experience":
                "Expérience",

            "nav.contact":
                "Contact",


            "hero.available":
                "Ouvert aux opportunités",

            "hero.greeting":
                "Bonjour, je suis",

            "hero.role":
                "Étudiant en Software Engineering",

            "hero.description":
                "Je crée des expériences numériques modernes, responsives et centrées sur l'utilisateur tout en développant mes compétences en ingénierie logicielle, développement web, programmation et bases de données.",

            "hero.viewProjects":
                "Voir mes projets",

            "hero.downloadCV":
                "Télécharger le CV",

            "hero.connect":
                "Me contacter",

            "hero.scroll":
                "Découvrir",


            "about.label":
                "À PROPOS DE MOI",

            "about.title":
                "Transformer les idées en solutions numériques.",

            "about.student":
                "Étudiant en Software Engineering",

            "about.lead":
                "Je suis passionné par la technologie et le développement logiciel, avec un intérêt particulier pour la création de solutions numériques utiles et fiables.",

            "about.text":
                "Mon parcours d'apprentissage se concentre sur l'ingénierie logicielle, le développement web, la programmation, les bases de données et la résolution de problèmes. J'aime transformer les idées en applications fonctionnelles et améliorer continuellement mes compétences grâce à des projets pratiques.",

            "about.text2":
                "Je pense qu'un bon logiciel doit être simple à utiliser, responsive, maintenable et conçu autour des besoins réels des utilisateurs.",

            "about.statProjects":
                "Projets",

            "about.statLanguages":
                "Langues",

            "about.statLearning":
                "Apprentissage",


            "skills.label":
                "MES COMPÉTENCES",

            "skills.title":
                "Technologies et capacités.",

            "skills.web.title":
                "Développement Web",

            "skills.web.text":
                "Création de sites web responsives et faciles à utiliser avec des technologies modernes.",

            "skills.programming.title":
                "Programmation",

            "skills.programming.text":
                "Développement de solutions logiques et d'applications à l'aide de concepts de programmation.",

            "skills.database.title":
                "Bases de données",

            "skills.database.text":
                "Travail avec les bases de données relationnelles, les requêtes et les informations structurées.",

            "skills.software.title":
                "Ingénierie Logicielle",

            "skills.software.text":
                "Application des principes de développement logiciel pour planifier, construire, tester et améliorer des applications.",


            "projects.label":
                "TRAVAUX SÉLECTIONNÉS",

            "projects.title":
                "Projets que je développe.",

            "projects.rwanda.title":
                "Rwanda 24",

            "projects.rwanda.text":
                "Concept d'une plateforme d'information destinée à publier les actualités du Rwanda et du monde à travers une expérience numérique moderne.",

            "projects.student.title":
                "Student Management System",

            "projects.student.text":
                "Concept d'application orienté base de données pour gérer les informations et les dossiers des étudiants.",

            "projects.portfolio.title":
                "Portfolio Personnel",

            "projects.portfolio.text":
                "Un portfolio responsive créé pour présenter mes compétences en ingénierie logicielle, mes projets, ma formation et mon développement professionnel.",


            "education.label":
                "FORMATION",

            "education.title":
                "Mon parcours d'apprentissage.",

            "education.degree":
                "Software Engineering",

            "education.faculty":
                "Faculté des Technologies de l'Information",

            "education.degreeText":
                "Développement de connaissances en développement logiciel, programmation, bases de données, analyse des systèmes et technologies de l'information.",

            "education.secondary":
                "Études secondaires",

            "education.secondarySchool":
                "École secondaire",

            "education.secondaryText":
                "Formation secondaire et développement des bases nécessaires pour poursuivre des études dans la technologie et l'ingénierie logicielle.",


            "experience.label":
                "EXPÉRIENCE",

            "experience.title":
                "Apprendre grâce aux projets pratiques.",

            "experience.web.title":
                "Développement d'applications Web",

            "experience.web.text":
                "Création d'interfaces web responsives et de concepts d'applications tout en pratiquant le développement front-end, le débogage et le responsive design.",

            "experience.web.point1":
                "Création d'interfaces responsives avec HTML, CSS et JavaScript.",

            "experience.web.point2":
                "Pratique du débogage et amélioration des fonctionnalités.",

            "experience.web.point3":
                "Application des concepts de contrôle de version et organisation professionnelle des fichiers.",

            "experience.database.title":
                "Bases de données et systèmes d'information",

            "experience.database.text":
                "Pratique des concepts de bases de données relationnelles et développement de solutions structurées pour gérer les informations.",

            "experience.database.point1":
                "Création de structures et de tables de bases de données.",

            "experience.database.point2":
                "Pratique des requêtes SQL et de la gestion des données.",

            "experience.database.point3":
                "Application des concepts de relations, normalisation et intégrité des données.",


            "cv.label":
                "MON CV",

            "cv.title":
                "Vous souhaitez en savoir plus sur mon parcours ?",

            "cv.text":
                "Téléchargez mon CV pour découvrir ma formation, mes compétences, mes projets et mon développement professionnel.",

            "cv.button":
                "Télécharger le CV",


            "contact.label":
                "CONTACT",

            "contact.title":
                "Construisons quelque chose d'utile.",

            "contact.intro":
                "Pour discuter d'un projet, d'une collaboration ou d'une opportunité, n'hésitez pas à me contacter.",

            "contact.phone":
                "Téléphone",

            "contact.location":
                "Localisation",

            "contact.follow":
                "Suivez-moi",

            "contact.form.name":
                "Votre nom",

            "contact.form.email":
                "Votre email",

            "contact.form.subject":
                "Sujet",

            "contact.form.message":
                "Message",

            "contact.form.namePlaceholder":
                "Entrez votre nom",

            "contact.form.emailPlaceholder":
                "Entrez votre email",

            "contact.form.subjectPlaceholder":
                "Quel est le sujet ?",

            "contact.form.messagePlaceholder":
                "Écrivez votre message...",

            "contact.form.send":
                "Envoyer le message",


            "footer.text":
                "Développer mes compétences. Créer des solutions. Grandir grâce à la technologie.",

            "footer.rights":
                "Tous droits réservés.",

            "footer.built":
                "Conçu et développé avec",

            "footer.by":
                "par Iradukunda Josee"
        }

    };


    /* =====================================================
       06. LANGUAGE APPLICATION
    ===================================================== */

    function applyLanguage(language) {

        if (!translations[language]) {
            language = "en";
        }


        /* Text */

        const elements =
            document.querySelectorAll(
                "[data-i18n]"
            );

        elements.forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );

            if (
                translations[language][key]
            ) {

                element.textContent =
                    translations[language][key];
            }

        });


        /* Placeholders */

        const placeholderElements =
            document.querySelectorAll(
                "[data-i18n-placeholder]"
            );

        placeholderElements.forEach(
            element => {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                if (
                    translations[language][key]
                ) {

                    element.placeholder =
                        translations[
                            language
                        ][key];

                }

            }
        );


        /* HTML language attribute */

        document.documentElement.lang =
            language === "rw"
                ? "rw"
                : language;


        /* Button */

        if (currentLanguage) {

            currentLanguage.textContent =
                language.toUpperCase();

        }


        /* Save */

        localStorage.setItem(
            "portfolio-language",
            language
        );


        /* Close menu */

        if (languageSelector) {

            languageSelector.classList
                .remove("open");

        }

    }


    /* =====================================================
       07. LOAD SAVED LANGUAGE
    ===================================================== */

    const savedLanguage =
        localStorage.getItem(
            "portfolio-language"
        ) || "en";

    applyLanguage(savedLanguage);


    /* =====================================================
       08. LANGUAGE MENU
    ===================================================== */

    if (
        languageButton &&
        languageSelector
    ) {

        languageButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                languageSelector.classList
                    .toggle("open");

            }
        );


        const languageButtons =
            languageMenu.querySelectorAll(
                "[data-language]"
            );

        languageButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const language =
                            button.getAttribute(
                                "data-language"
                            );

                        applyLanguage(
                            language
                        );

                    }
                );

            }
        );

    }


    /* Close language menu outside */

    document.addEventListener(
        "click",
        event => {

            if (
                languageSelector &&
                !languageSelector.contains(
                    event.target
                )
            ) {

                languageSelector.classList
                    .remove("open");

            }

        }
    );


    /* =====================================================
       09. HEADER SCROLL EFFECT
    ===================================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    /* =====================================================
       10. SCROLL PROGRESS
    ===================================================== */

    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement
                .scrollHeight;

        const windowHeight =
            window.innerHeight;

        const scrollable =
            documentHeight -
            windowHeight;

        if (scrollable <= 0) {

            scrollProgress.style.width =
                "0%";

            return;
        }

        const percentage =
            (scrollTop / scrollable) *
            100;

        scrollProgress.style.width =
            `${percentage}%`;
    }


    /* =====================================================
       11. BACK TO TOP
    ===================================================== */

    function updateBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       12. COMBINED SCROLL EVENT
    ===================================================== */

    window.addEventListener(
        "scroll",
        () => {

            updateHeader();

            updateScrollProgress();

            updateBackToTop();

            updateActiveNavigation();

        },
        {
            passive: true
        }
    );


    /* Initial state */

    updateHeader();

    updateScrollProgress();

    updateBackToTop();


    /* =====================================================
       13. ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop +
                    sectionHeight
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            const href =
                link.getAttribute("href");

            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    /* =====================================================
       14. SCROLL REVEAL ANIMATIONS
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            `
            .skill-card,
            .project-card,
            .timeline-item,
            .experience-card,
            .profile-card,
            .about-content,
            .contact-info,
            .contact-form
            `
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "visible"
                                    );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        animatedElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       15. STAGGER CARD ANIMATIONS
    ===================================================== */

    function addStaggerAnimation(
        selector
    ) {

        const elements =
            document.querySelectorAll(
                selector
            );

        elements.forEach(
            (element, index) => {

                element.style.transitionDelay =
                    `${index * 80}ms`;

            }
        );

    }


    addStaggerAnimation(
        ".skill-card"
    );

    addStaggerAnimation(
        ".project-card"
    );

    addStaggerAnimation(
        ".experience-card"
    );

    addStaggerAnimation(
        ".timeline-item"
    );


    /* =====================================================
       16. CONTACT FORM
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "name"
                    ).value.trim();

                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();

                const subject =
                    document.getElementById(
                        "subject"
                    ).value.trim();

                const message =
                    document.getElementById(
                        "message"
                    ).value.trim();


                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    showFormMessage(
                        "Please complete all fields.",
                        "error"
                    );

                    return;
                }


                if (
                    !isValidEmail(email)
                ) {

                    showFormMessage(
                        "Please enter a valid email address.",
                        "error"
                    );

                    return;
                }


                /*
                   This currently prepares the form locally.

                   It does NOT send email to a server.

                   Later we can connect it to:
                   - Formspree
                   - EmailJS
                   - Your own backend
                */


                const emailBody =
                    `Hello Iradukunda Josee,

Name: ${name}
Email: ${email}

${message}`;


                const mailto =
                    `mailto:your-email@example.com` +
                    `?subject=${encodeURIComponent(
                        subject
                    )}` +
                    `&body=${encodeURIComponent(
                        emailBody
                    )}`;


                showFormMessage(
                    "Opening your email application...",
                    "success"
                );


                setTimeout(
                    () => {

                        window.location.href =
                            mailto;

                    },
                    700
                );

            }
        );

    }


    /* =====================================================
       17. EMAIL VALIDATION
    ===================================================== */

    function isValidEmail(email) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(
            email
        );

    }


    /* =====================================================
       18. FORM MESSAGE
    ===================================================== */

    function showFormMessage(
        message,
        type
    ) {

        if (!formMessage) return;

        formMessage.textContent =
            message;

        if (type === "success") {

            formMessage.style.color =
                "#22c55e";

        } else {

            formMessage.style.color =
                "#f87171";
        }


        setTimeout(
            () => {

                formMessage.textContent =
                    "";

            },
            5000
        );

    }


    /* =====================================================
       19. ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                /* Close mobile menu */

                if (nav) {

                    nav.classList.remove(
                        "open"
                    );

                }


                /* Close language */

                if (
                    languageSelector
                ) {

                    languageSelector
                        .classList
                        .remove(
                            "open"
                        );

                }


                /* Reset mobile icon */

                if (menuToggle) {

                    const icon =
                        menuToggle
                            .querySelector(
                                "i"
                            );

                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }

        }
    );


    /* =====================================================
       20. CLOSE MOBILE MENU ON RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 800
            ) {

                if (nav) {

                    nav.classList.remove(
                        "open"
                    );

                }

                if (menuToggle) {

                    const icon =
                        menuToggle
                            .querySelector(
                                "i"
                            );

                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }

        }
    );


    /* =====================================================
       21. PROJECT LINK PROTECTION
    ===================================================== */

    const emptyProjectLinks =
        document.querySelectorAll(
            '.project-links a[href="#"]'
        );

    emptyProjectLinks.forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                }
            );

        }
    );


    /* =====================================================
       22. CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cIradukunda Josee",
        "font-size: 22px; font-weight: bold;"
    );

    console.log(
        "%cSoftware Engineering Portfolio",
        "font-size: 14px;"
    );

    console.log(
        "Portfolio initialized successfully."
    );

});