// ========================================
// DATAFORGE CMS - EVENTS DATA
// ========================================
// To update events, simply edit the information below.
// The website will automatically reflect your changes.

const DATAFORGE_CMS = {
    
    // ====== CHAPTERS ======
    chapters: [
        {
            id: 1,
            number: "CHAPTER I",
            title: "Data Wrangling & AI",
            description: "The opening chapter sets the foundation. Learn how messy, real-world data is inspected, cleaned, and structured—the three pillars every data practitioner must master.",
            events: ["Data Blueprint", "Scrub Radius"]
        },
        {
            id: 2,
            number: "CHAPTER II",
            title: "Business Intelligence & AI",
            description: "Move beyond cleaning and start extracting meaning. Chapter II introduces exploratory data analysis, AI tools, and the visual language of data-driven decisions.",
            events: ["Signal Architect", "Pixel Strike"]
        },
        {
            id: 3,
            number: "CHAPTER III",
            title: "Predictive Learning & Big Data",
            description: "Chapter III enters the machine learning core. From feature engineering to model evaluation, participants build predictive systems powered by real datasets and big data principles.",
            events: ["The Synthesis", "Kinetic Overload"]
        },
        {
            id: 4,
            number: "CHAPTER IV",
            title: "Deployment & Hackathons",
            description: "The series culminates in deployment. Chapter IV transforms solutions into shareable, production-ready products—closing the loop from raw data to real-world impact.",
            events: ["Pareto Protocol", "Omni Pareto"]
        }
    ],

    // ====== EVENTS ======
    events: [
        {
            id: 1,
            chapter: 1,
            chapterLabel: "CHAPTER I",
            name: "Data Blueprint",
            tagline: "Master the art of taming raw data",
            description: "Before any model, before any code, the data must be shaped. Learn the fundamental techniques of data inspection, transformation, and preparation that form the foundation of every successful data project.",
            mode: "online",
            link: "#"
        },
        {
            id: 2,
            chapter: 1,
            chapterLabel: "CHAPTER I",
            name: "Scrub Radius",
            tagline: "A timed challenge in data precision",
            description: "Clean the chaos, structure the noise, and prove your data wrangling precision. A high-pressure timed challenge where accuracy and speed determine the victor.",
            mode: "offline",
            link: "#"
        },
        {
            id: 3,
            chapter: 2,
            chapterLabel: "CHAPTER II",
            name: "Signal Architect",
            tagline: "Decode hidden patterns in data",
            description: "Learn to decode patterns hidden in data through exploratory analysis and business intelligence frameworks. Transform raw numbers into actionable insights.",
            mode: "online",
            link: "#"
        },
        {
            id: 4,
            chapter: 2,
            chapterLabel: "CHAPTER II",
            name: "Pixel Strike",
            tagline: "Dashboards that reveal, not just display",
            description: "A data visualization and EDA sprint—build dashboards that reveal insights, not just display numbers. Master the art of visual storytelling with data.",
            mode: "offline",
            link: "#"
        },
        {
            id: 5,
            chapter: 3,
            chapterLabel: "CHAPTER III",
            name: "The Synthesis",
            tagline: "Bridge intuition with machine learning",
            description: "Build, train, and evaluate predictive models—bridging statistical intuition with machine learning practice. From feature engineering to model selection.",
            mode: "online",
            link: "#"
        },
        {
            id: 6,
            chapter: 3,
            chapterLabel: "CHAPTER III",
            name: "Kinetic Overload",
            tagline: "Test your skills under real constraints",
            description: "A large-scale prediction challenge designed to test your model-building skills under real constraints. Handle big data, optimize performance, and compete.",
            mode: "offline",
            link: "#"
        },
        {
            id: 7,
            chapter: 4,
            chapterLabel: "CHAPTER IV",
            name: "Pareto Protocol",
            tagline: "The final 20% that delivers 80% of impact",
            description: "Learn the final 20% that delivers 80% of impact—deploying, packaging, and presenting data solutions. Take your models from notebook to production.",
            mode: "online",
            link: "#"
        },
        {
            id: 8,
            chapter: 4,
            chapterLabel: "CHAPTER IV",
            name: "Omni Pareto",
            tagline: "The Foundry Series finale",
            description: "The Foundry Series finale—a full-stack data hackathon where every skill from Chapters I–III converges. Build end-to-end solutions that solve real problems.",
            mode: "offline",
            link: "#"
        }
    ]
};
