/* =========================================================
   IRADUKUNDA JOSEE - PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const header = document.getElementById("header");
    const themeToggle = document.getElementById("themeToggle");

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    const languageBtn = document.getElementById("languageBtn");
    const languageMenu = document.getElementById("languageMenu");
    const currentLanguage = document.getElementById("currentLanguage");

    const scrollProgress = document.getElementById("scrollProgress");

    const backToTop = document.getElementById("backToTop");

    const currentYear = document.getElementById("currentYear");

    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    const submitButton = document.getElementById("submitButton");
    const submitText = document.getElementById("submitText");

    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       THEME
    ===================================================== */

    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );
    }

    updateThemeIcon();


    function updateThemeIcon() {

        if (!themeToggle) return;

        const isLight =
            document.documentElement.getAttribute(
                "data-theme"
            ) === "light";

        themeToggle.innerHTML = isLight
            ? '<i class="fa-solid fa-moon"></i>'
            : '<i class="fa-solid fa-sun"></i>';
    }


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            const isLight =
                document.documentElement.getAttribute(
                    "data-theme"
                ) === "light";

            if (isLight) {

                document.documentElement.removeAttribute(
                    "data-theme"
                );

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

            } else {

                document.documentElement.setAttribute(
                    "data-theme",
                    "light"
                );

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );
            }

            updateThemeIcon();

        });

    }


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("open");

            const isOpen =
                nav.classList.contains("open");

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });


        document.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

    }


    /* =====================================================
       LANGUAGE SYSTEM
    ===================================================== */

    const translations = {

        en: {

            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navEducation: "Education",
            navExperience: "Experience",
            navContact: "Contact",

            cv: "CV",

            available: "Available for opportunities",

            hello: "HELLO, I'M",

            heroTitle: "Software Engineering Student",

            heroDescription:
                "I build modern, responsive and user-focused digital experiences while developing practical software solutions.",

            viewWork: "Explore My Work",

            downloadCV: "Download CV",

            aboutLabel: "ABOUT ME",

            aboutTitle:
                "Turning ideas into digital experiences.",

            profileRole:
                "Software Engineering Student",

            yearsLearning:
                "Years Learning",

            projects:
                "Projects",

            languages:
                "Languages",

            aboutText1:
                "I am passionate about software development, problem solving and creating useful digital experiences.",

            aboutText2:
                "My interests include web development, databases, software engineering and building practical technology solutions.",

            aboutText3:
                "I continuously improve my technical skills through academic work, personal projects and hands-on experimentation.",

            cleanCode:
                "Clean & Structured Code",

            responsive:
                "Responsive Design",

            problemSolving:
                "Problem Solving",

            continuousLearning:
                "Continuous Learning",

            skillsLabel: "MY SKILLS",

            skillsTitle:
                "Technologies I work with.",

            webDevelopment:
                "Web Development",

            webDescription:
                "Building responsive and modern websites.",

            programming:
                "Programming",

            programmingDescription:
                "Developing software solutions using programming languages and structured problem solving.",

            databases:
                "Databases",

            databaseDescription:
                "Designing and working with relational databases.",

            softwareEngineering:
                "Software Engineering",

            softwareDescription:
                "Applying software development concepts, testing and structured development practices.",

            projectsLabel: "PROJECTS",

            projectsTitle:
                "Things I have been building.",

            project1Description:
                "A news platform concept focused on presenting trending stories from Rwanda and beyond.",

            project2Description:
                "A database-focused application concept for managing student information and records.",

            project3Description:
                "A responsive professional portfolio with multilingual support, theme switching and interactive features.",

            viewProject:
                "View Project",

            educationLabel:
                "EDUCATION",

            educationTitle:
                "Academic background.",

            current:
                "Current",

            previous:
                "Previous",

            educationDescription:
                "Software engineering studies focused on programming, databases, software development and information technology.",

            secondaryEducation:
                "Secondary Education",

            secondaryDescription:
                "Completed secondary-level education.",

            experienceLabel:
                "EXPERIENCE",

            experienceTitle:
                "Building through practice.",

            webExperience:
                "Web Application Development",

            webExperienceDescription:
                "Developing responsive interfaces, implementing interactive functionality, debugging and improving web applications.",

            databaseExperience:
                "Database & Information Systems",

            databaseExperienceDescription:
                "Working with relational databases, SQL queries, structured data and information-system concepts.",

            contactLabel:
                "CONTACT",

            contactTitle:
                "Let's build something useful.",

            contactIntro:
                "Have a project idea, opportunity or question? Send me a message and I'll get back to you.",

            location:
                "Location",

            formName:
                "Your Name",

            formEmail:
                "Email Address",

            formSubject:
                "Subject",

            formMessage:
                "Message",

            namePlaceholder:
                "Enter your name",

            emailPlaceholder:
                "you@example.com",

            subjectPlaceholder:
                "What would you like to discuss?",

            messagePlaceholder:
                "Write your message here...",

            sendMessage:
                "Send Message",

            sending:
                "Sending...",

            successMessage:
                "Thank you! Your message has been sent successfully.",

            errorMessage:
                "Something went wrong. Please try again.",

            cvTitle:
                "Want to know more about my background?",

            footerText:
                "Building skills, solving problems and creating useful digital experiences.",

            rights:
                "All rights reserved."

        },


        rw: {

            navHome: "Ahabanza",
            navAbout: "Abo Ndi Bo",
            navSkills: "Ubumenyi",
            navProjects: "Imishinga",
            navEducation: "Amashuri",
            navExperience: "Ubunararibonye",
            navContact: "Twandikire",

            cv: "CV",

            available:
                "Niteguye amahirwe y'akazi",

            hello:
                "MURAHO, NDI",

            heroTitle:
                "Umunyeshuri wiga Software Engineering",

            heroDescription:
                "Nkora imbuga za internet zigezweho, zikora neza kuri telefoni na mudasobwa kandi zifasha abakoresha.",

            viewWork:
                "Reba Imishinga Yanjye",

            downloadCV:
                "Kuramo CV",

            aboutLabel:
                "ABOUT ME",

            aboutTitle:
                "Guhindura ibitekerezo mo ibisubizo bya digital.",

            profileRole:
                "Umunyeshuri wa Software Engineering",

            yearsLearning:
                "Imyaka niga",

            projects:
                "Imishinga",

            languages:
                "Indimi",

            aboutText1:
                "Nkunda software development, gukemura ibibazo no gukora ibisubizo by'ikoranabuhanga bifite akamaro.",

            aboutText2:
                "Nshimishwa no gukora web development, databases, software engineering no kubaka ibisubizo bifatika.",

            aboutText3:
                "Nteza imbere ubumenyi bwanjye binyuze mu masomo, imishinga no kwitoza mu buryo bufatika.",

            cleanCode:
                "Code iteguye neza",

            responsive:
                "Design ikora kuri devices zitandukanye",

            problemSolving:
                "Gukemura ibibazo",

            continuousLearning:
                "Kwiga buri gihe",

            skillsLabel:
                "UBUMENYI BWANJYE",

            skillsTitle:
                "Technologies nkoresha.",

            webDevelopment:
                "Web Development",

            webDescription:
                "Gukora websites zigezweho kandi zikora kuri devices zitandukanye.",

            programming:
                "Programming",

            programmingDescription:
                "Gukora software solutions nkoresheje programming languages.",

            databases:
                "Databases",

            databaseDescription:
                "Gukora no gukoresha relational databases.",

            softwareEngineering:
                "Software Engineering",

            softwareDescription:
                "Gukoresha amahame ya software development, testing no gutegura software neza.",

            projectsLabel:
                "IMISHINGA",

            projectsTitle:
                "Imishinga nubatse.",

            project1Description:
                "Igitekerezo cya news platform itangaza amakuru ari trending mu Rwanda no hanze.",

            project2Description:
                "Application yibanda kuri database yo gucunga amakuru y'abanyeshuri.",

            project3Description:
                "Portfolio website ifite languages nyinshi, dark/light mode n'ibindi bikoresho.",

            viewProject:
                "Reba Umushinga",

            educationLabel:
                "AMASHURI",

            educationTitle:
                "Amashuri nize.",

            current:
                "Ubu",

            previous:
                "Mbere",

            educationDescription:
                "Amasomo ya software engineering yibanda kuri programming, databases, software development na IT.",

            secondaryEducation:
                "Amashuri yisumbuye",

            secondaryDescription:
                "Narangije amashuri yisumbuye.",

            experienceLabel:
                "UBUNARARIBONYE",

            experienceTitle:
                "Kwiga binyuze mu gukora.",

            webExperience:
                "Web Application Development",

            webExperienceDescription:
                "Gukora interfaces zikora kuri devices zitandukanye, JavaScript, debugging no kunoza applications.",

            databaseExperience:
                "Database & Information Systems",

            databaseExperienceDescription:
                "Gukoresha relational databases, SQL queries n'ibijyanye na information systems.",

            contactLabel:
                "TWANDIKIRE",

            contactTitle:
                "Reka dukore ikintu gifite akamaro.",

            contactIntro:
                "Ufite igitekerezo cy'umushinga, amahirwe cyangwa ikibazo? Nyandikira nzagusubiza.",

            location:
                "Aho ndi",

            formName:
                "Amazina",

            formEmail:
                "Email",

            formSubject:
                "Umutwe w'ubutumwa",

            formMessage:
                "Ubutumwa",

            namePlaceholder:
                "Andika amazina yawe",

            emailPlaceholder:
                "you@example.com",

            subjectPlaceholder:
                "Ni iki ushaka kuganiraho?",

            messagePlaceholder:
                "Andika ubutumwa bwawe hano...",

            sendMessage:
                "Ohereza Ubutumwa",

            sending:
                "Birimo koherezwa...",

            successMessage:
                "Murakoze! Ubutumwa bwanyu bwoherejwe neza.",

            errorMessage:
                "Hari ikibazo cyabaye. Ongera ugerageze.",

            cvTitle:
                "Ushaka kumenya byinshi ku bijyanye n'amashuri n'ubushobozi bwanjye?",

            footerText:
                "Kwiga, gukemura ibibazo no gukora ibisubizo bya digital bifite akamaro.",

            rights:
                "Uburenganzira bwose burabitswe."

        },


        fr: {

            navHome: "Accueil",
            navAbout: "À propos",
            navSkills: "Compétences",
            navProjects: "Projets",
            navEducation: "Formation",
            navExperience: "Expérience",
            navContact: "Contact",

            cv: "CV",

            available:
                "Disponible pour des opportunités",

            hello:
                "BONJOUR, JE SUIS",

            heroTitle:
                "Étudiant en génie logiciel",

            heroDescription:
                "Je crée des expériences numériques modernes, responsives et centrées sur l'utilisateur tout en développant des solutions logicielles pratiques.",

            viewWork:
                "Voir mes projets",

            downloadCV:
                "Télécharger le CV",

            aboutLabel:
                "À PROPOS DE MOI",

            aboutTitle:
                "Transformer les idées en expériences numériques.",

            profileRole:
                "Étudiant en génie logiciel",

            yearsLearning:
                "Années d'apprentissage",

            projects:
                "Projets",

            languages:
                "Langues",

            aboutText1:
                "Je suis passionné par le développement logiciel, la résolution de problèmes et la création d'expériences numériques utiles.",

            aboutText2:
                "Mes intérêts comprennent le développement web, les bases de données, le génie logiciel et les solutions technologiques pratiques.",

            aboutText3:
                "J'améliore continuellement mes compétences techniques grâce aux études, aux projets personnels et à la pratique.",

            cleanCode:
                "Code propre et structuré",

            responsive:
                "Design responsive",

            problemSolving:
                "Résolution de problèmes",

            continuousLearning:
                "Apprentissage continu",

            skillsLabel:
                "MES COMPÉTENCES",

            skillsTitle:
                "Technologies que j'utilise.",

            webDevelopment:
                "Développement Web",

            webDescription:
                "Création de sites web modernes et responsives.",

            programming:
                "Programmation",

            programmingDescription:
                "Développement de solutions logicielles avec différentes technologies.",

            databases:
                "Bases de données",

            databaseDescription:
                "Conception et utilisation de bases de données relationnelles.",

            softwareEngineering:
                "Génie logiciel",

            softwareDescription:
                "Application des concepts de développement logiciel, de tests et de bonnes pratiques.",

            projectsLabel:
                "PROJETS",

            projectsTitle:
                "Ce que j'ai construit.",

            project1Description:
                "Concept de plateforme d'information présentant les actualités tendances du Rwanda et d'ailleurs.",

            project2Description:
                "Application orientée base de données pour gérer les informations des étudiants.",

            project3Description:
                "Portfolio professionnel responsive avec plusieurs langues, thèmes et fonctionnalités interactives.",

            viewProject:
                "Voir le projet",

            educationLabel:
                "FORMATION",

            educationTitle:
                "Parcours académique.",

            current:
                "Actuel",

            previous:
                "Précédent",

            educationDescription:
                "Études en génie logiciel axées sur la programmation, les bases de données et le développement logiciel.",

            secondaryEducation:
                "Études secondaires",

            secondaryDescription:
                "Études secondaires terminées.",

            experienceLabel:
                "EXPÉRIENCE",

            experienceTitle:
                "Apprendre par la pratique.",

            webExperience:
                "Développement d'applications Web",

            webExperienceDescription:
                "Création d'interfaces responsives, développement JavaScript, débogage et amélioration d'applications.",

            databaseExperience:
                "Bases de données et systèmes d'information",

            databaseExperienceDescription:
                "Travail avec les bases relationnelles, les requêtes SQL et les systèmes d'information.",

            contactLabel:
                "CONTACT",

            contactTitle:
                "Construisons quelque chose d'utile.",

            contactIntro:
                "Vous avez une idée, une opportunité ou une question ? Envoyez-moi un message et je vous répondrai.",

            location:
                "Localisation",

            formName:
                "Votre nom",

            formEmail:
                "Adresse e-mail",

            formSubject:
                "Sujet",

            formMessage:
                "Message",

            namePlaceholder:
                "Entrez votre nom",

            emailPlaceholder:
                "you@example.com",

            subjectPlaceholder:
                "De quoi souhaitez-vous discuter ?",

            messagePlaceholder:
                "Écrivez votre message ici...",

            sendMessage:
                "Envoyer le message",

            sending:
                "Envoi...",

            successMessage:
                "Merci ! Votre message a été envoyé avec succès.",

            errorMessage:
                "Une erreur s'est produite. Veuillez réessayer.",

            cvTitle:
                "Vous voulez en savoir plus sur mon parcours ?",

            footerText:
                "Développer mes compétences, résoudre des problèmes et créer des expériences numériques utiles.",

            rights:
                "Tous droits réservés."

        }

    };


    function applyLanguage(language) {

        const dictionary =
            translations[language] || translations.en;

        document.documentElement.lang = language;

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (dictionary[key]) {
                element.textContent = dictionary[key];
            }

        });


        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                if (dictionary[key]) {
                    element.placeholder =
                        dictionary[key];
                }

            });


        if (currentLanguage) {
            currentLanguage.textContent =
                language.toUpperCase();
        }

        localStorage.setItem(
            "portfolio-language",
            language
        );

    }


    const savedLanguage =
        localStorage.getItem("portfolio-language") || "en";

    applyLanguage(savedLanguage);


    if (languageBtn && languageMenu) {

        languageBtn.addEventListener("click", event => {

            event.stopPropagation();

            languageMenu.classList.toggle("open");

        });


        languageMenu.querySelectorAll("button").forEach(button => {

            button.addEventListener("click", () => {

                const language =
                    button.getAttribute("data-lang");

                applyLanguage(language);

                languageMenu.classList.remove("open");

            });

        });


        document.addEventListener("click", event => {

            if (
                !languageMenu.contains(event.target) &&
                !languageBtn.contains(event.target)
            ) {
                languageMenu.classList.remove("open");
            }

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        scrollProgress.style.width =
            `${progress}%`;

    }

    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );

    updateScrollProgress();


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    function updateBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 600) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }

    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("main section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {
                currentSection =
                    section.getAttribute("id");
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav,
        { passive: true }
    );


    /* =====================================================
       REVEAL ANIMATIONS
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element, index) => {

            element.style.transitionDelay =
                `${Math.min(index * 0.05, 0.3)}s`;

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =====================================================
       NETLIFY CONTACT FORM
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async event => {

                event.preventDefault();

                /*
                    Get current language so the status
                    messages match the selected language.
                */

                const language =
                    localStorage.getItem(
                        "portfolio-language"
                    ) || "en";

                const dictionary =
                    translations[language] ||
                    translations.en;


                /*
                    Basic client-side validation.
                */

                const name =
                    document.getElementById("name");

                const email =
                    document.getElementById("email");

                const subject =
                    document.getElementById("subject");

                const message =
                    document.getElementById("message");


                if (
                    !name.value.trim() ||
                    !email.value.trim() ||
                    !subject.value.trim() ||
                    !message.value.trim()
                ) {

                    showFormStatus(
                        "error",
                        dictionary.errorMessage
                    );

                    return;
                }


                /*
                    Email validation.
                */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email.value.trim())) {

                    showFormStatus(
                        "error",
                        dictionary.errorMessage
                    );

                    email.focus();

                    return;
                }


                /*
                    Loading state.
                */

                submitButton.disabled = true;

                submitButton.classList.add(
                    "loading"
                );

                submitText.textContent =
                    dictionary.sending;


                try {

                    /*
                        Netlify requires URL-encoded
                        form data for AJAX submissions.
                    */

                    const formData =
                        new FormData(contactForm);

                    const encodedData =
                        new URLSearchParams(
                            formData
                        ).toString();


                    const response =
                        await fetch(
                            "/",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/x-www-form-urlencoded"
                                },

                                body: encodedData
                            }
                        );


                    if (!response.ok) {
                        throw new Error(
                            "Form submission failed."
                        );
                    }


                    /*
                        Success.
                    */

                    showFormStatus(
                        "success",
                        dictionary.successMessage
                    );

                    contactForm.reset();

                } catch (error) {

                    console.error(
                        "Netlify form error:",
                        error
                    );

                    showFormStatus(
                        "error",
                        dictionary.errorMessage
                    );

                } finally {

                    submitButton.disabled =
                        false;

                    submitButton.classList.remove(
                        "loading"
                    );

                    submitText.textContent =
                        dictionary.sendMessage;

                }

            }
        );

    }


    function showFormStatus(type, message) {

        if (!formStatus) return;

        formStatus.className =
            `form-status ${type}`;

        formStatus.textContent =
            message;

        formStatus.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }


    /* =====================================================
       DISABLE EMPTY PROJECT LINKS
    ===================================================== */

    document
        .querySelectorAll(".disabled-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {
                    event.preventDefault();
                }
            );

        });


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                if (nav) {
                    nav.classList.remove("open");
                }

                if (languageMenu) {
                    languageMenu.classList.remove(
                        "open"
                    );
                }

                if (menuToggle) {
                    menuToggle.innerHTML =
                        '<i class="fa-solid fa-bars"></i>';
                }

            }

        }
    );


    /* =====================================================
       WINDOW RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 850) {

                if (nav) {
                    nav.classList.remove("open");
                }

                if (menuToggle) {
                    menuToggle.innerHTML =
                        '<i class="fa-solid fa-bars"></i>';
                }

            }

        }
    );


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%cIradukunda Josee Portfolio",
        "font-size:20px;font-weight:bold;color:#7c5cff;"
    );

    console.log(
        "Portfolio loaded successfully."
    );

});
