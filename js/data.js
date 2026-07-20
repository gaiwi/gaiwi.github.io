// ============================================================
//  GAIWI SITE DATA
//  Edit this file to update all content across the site.
//  No HTML knowledge required for routine updates.
// ============================================================

const GAIWI_DATA = {

  // ── NAVIGATION ──────────────────────────────────────────
  nav: {
    logo: "GAIWI",
    links: [
      { label: "About",        href: "index.html#about" },
      { label: "Events",       href: "index.html#events" },
      { label: "People",       href: "people.html" },
      { label: "Projects",     href: "index.html#project" },
      { label: "Publications", href: "publications.html" },
    ]
  },

  // ── HERO ────────────────────────────────────────────────
  hero: {
    title: ["Global AI", "Wellbeing", "Initiative"],
    affiliations: [
      "University of Toronto",
        "University of Illinois Urbana-Champaign",
      "Ontario Tech University"
    ]
  },

  // ── ABOUT ───────────────────────────────────────────────
  about: {
    paragraphs: [
      "The Global AI Wellbeing Initiative (GAIWI) is a research and engagement hub dedicated to understanding how AI shapes human well-being within varied, situated contexts around the world, especially for the Global South." +
      "GAIWI brings together students, researchers, and practitioners to advance responsible AI through reading group discussion, guest lectures, interdisciplinary research, and collaborative actions. " +
      // "We explore how AI can foster well-being, justice, and human flourishing while addressing the socio-technical, ethical, and cultural challenges in an age of AI. " +
      "We work toward a future where AI is accessible, inclusive, justice-oriented, and effective across diverse communities across the world.",
    ],
    focusAreas: [
      {
        icon: "🤝",
        title: "AI & Well-Being",
        description: "Understanding how AI affects everyday flourishing, mental health, social relationships, health care, and quality of life."
      },
      {
        icon: "🌐",
        title: "AI & Culture",
        description: "Examining how AI shapes language, identity, knowledge, and cultural values in societies."
      },
      {
        icon: "🌍",
        title: "AI & Global Communities",
        description: "Exploring how AI transforms education, work, healthcare, and daily life in diverse cultural communities around the world."
      },
      {
        icon: "⚖️",
        title: "AI & Governance",
        description: "Advancing responsible AI through public participation, policy, and governance that promote societal well-being."
      }
    ]
  },

  // ── EVENTS ──────────────────────────────────────────────
  // Add new events at the TOP of this array.
  events: [
    {
          image: "./images/events/gaiwi_title.png",
          type: "Reading Group",
          date: "06.11.2026",
          title: "Global AI Wellbeing Initiative",
          description: "Discussion led by Nafis Chowdhury",
          // image: "assets/event1.jpg"  // optional
    },
    {
        image: "./images/events/ai4mh_reading_week.png",
      type: "Reading Group",
      date: "06.04.2026",
      title: "AI for Mental Health",
      description: "Discussion led by Md Arid Hasan",
    },
    {
        image: "./images/events/gaiwi_title.png",
      type: "Reading Group",
      date: "05.28.2026",
      title: "Co-create Supportive and Inclusive Technologies in Live Streaming",
      description: "Discussion led by Yang Hong",
    }
  ],

  // ── PEOPLE ──────────────────────────────────────────────
  // role: "faculty" | "phd" | "other"
  people: [
      {
          name: "Syed Ishtiaque Ahmed",
          role: "faculty",
          title: "Associate Professor, Department of Computer Science",
          institution: "University of Toronto",
          photo: "./images/people/ishtiaque_photo.jpg",
          links: { website: "https://www.ishtiaque.net/", email: "ishtiaque@cs.toronto.edu", linkedin: "https://www.linkedin.com/in/ishtiaqueahmed/" }
      },
    {
      name: "Sharifa Sultana",
      role: "faculty",
      title: "Assistant Professor, Siebel School of Computing and Data Science",
      institution: "University of Illinois Urbana-Champaign",
      photo: "./images/people/sharifa_photo.jpg", // path to photo, e.g. "assets/sultana.jpg"
      links: { website: "https://www.sharifasultana.com/", email: "sharifas@illinois.edu ", linkedin: "https://www.linkedin.com/in/sharifa-sultana-9977b32a7/" }
    },
    {
      name: "Annie En-Shiun Lee",
      role: "faculty",
      title: "Assistant Professor, Ontario Tech University; Status-only Assistant Professor, University of Toronto",
      institution: "Ontario Tech University",
      photo: "./images/people/annie_photo.jpeg",
      links: { website: "https://www.cs.toronto.edu/~ealee/", email: "ealee@cs.toronto.edu", linkedin: "https://www.linkedin.com/in/drannielee/" }
    },
      {
          name: "Nusrat  Jahan  Mim",
          role: "faculty",
          title: "Assistant Professor, John H. Daniels Faculty of Architecture, Landscape and Design",
          institution: "University of Toronto",
          photo: "./images/people/nusrat.avif",
          links: {
              website: "https://www.nusratmim.net/",
              email: "nusrat.mim@daniles.utoronto.ca",
              linkedin: "https://www.linkedin.com/in/nusrat-jahan-mim-014381115/"
          }
      },
    {
      name: "Md Arid Hasan",
      role: "phd",
      title: "Ph.D. Student, Department of Computer Science",
      institution: "University of Toronto",
      photo: "./images/people/arid_photo.png",
      links: {
          website: "https://aridhasan.github.io",
          email: "arid@cs.toronto.edu",
          linkedin: "https://www.linkedin.com/in/aridhasan"
      }
    },
    {
      name: "Yang Hong",
      role: "phd",
      title: "Ph.D. Student, Siebel School of Computing and Data Science",
      institution: "University of Illinois Urbana-Champaign",
      photo: "./images/people/yang.png",
      links: {
          website: "#",
          email: "#",
          linkedin: "#"
      }
    },
    {
      name: "ATM Mizanur Rahman",
      role: "phd",
      title: "Ph.D. Student, Siebel School of Computing and Data Science",
      institution: "University of Illinois Urbana-Champaign",
      photo: "./images/people/mizanur_photo.png",
      links: {
          website: "#",
          email: "amr12@illinois.edu",
          linkedin: "https://www.linkedin.com/in/a-t-m-mizanur-rahman-1634431a9/"
      }
    },
      {
          name: "Azhagu Meena",
          role: "phd",
          title: "PhD Candidate, Faculty of Information",
          institution: "University of Toronto",
          photo: "./images/people/meena.jpeg",
          links: {
              website: "https://azhagumeena.com/",
              email: "meena.paramanathan@mail.utoronto.ca",
              linkedin: "https://www.linkedin.com/in/azhagu-meena/"
          }
      },
    {
      name: "Nafis Chowdhury",
      role: "msc",
      title: "MSc Student, Department of Computer Science",
      institution: "Ontario Tech University",
      photo: "./images/people/Nafis_Chowdhury.jpeg",
      links: { website: "#", email: "nafis.chowdhury@ontariotechu.net", linkedin: "https://www.linkedin.com/in/nafis-chowdhury-84b07421a/" }
    }
  ],

  // ── RESEARCH ────────────────────────────────────────────
  research: [
    {
      title: "AI and Global Mental Health",
      description: "This project investigates how AI tools can support mental health care, counseling, and well-being, with a focus on culturally-grounded approaches in the Global South.",
      investigators: ["Md Arid Hasan", "Syed Ishtiaque Ahmed"],
      // image: "assets/research1.jpg"
    },
    {
      title: "Exploring Immigrant Women's Livestream Practices",
      description: "This project investigates how immigrant women engage in livestreaming practices. Through a scoping review, we propose the Situated Livestreaming Ecology (SiLiE) framework towards more safe, inclusive design within livestreaming ecologies.",
      investigators: ["Yang Hong", "Sharifa Sultana"],
      // image: "assets/research2.jpg"
    }
  ],

  // ── FOOTER ──────────────────────────────────────────────
  footer: {
    contact: "gaiwi@gmail.com",
    mailingList: "#",
    social: {
      linkedin: "https://www.linkedin.com/company/gaiwi",
      twitter: "https://x.com/GAIWIresearch",
      bluesky: "https://bsky.app/profile/gaiwi.bsky.social"
    }
  }
};
