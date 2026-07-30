const projects = [
    {
        title: "Funds Tracker",
        description:
            "A web application designed for a trading card business I am a part of to track transactions and manage funds. Utilizing Firebase for real-time updates on transactions and balances, for coordantion between multiple team members.",
        imageText: "Funds Tracker Preview",
        videoSrc: "./img/test.mp4",
        poster: "SEAL.png",
        skills: ["JavaScript", "Database", "HTML", "CSS"],
        link: "https://github.com/tcop901aPortfolio/PoolTracker"
    },
    {
        title: "AI note sheet",
        description:
            "A web application for typing out notes with a sympol styling system along with AI summarization.",
        imageText: "AI Note Sheet Preview",
        videoSrc: "./img/test.mp4",
        poster: "",
        skills: ["LLM Prompting", "JavaScript", "HTML", "CSS"],
        link: "https://github.com/tcop901aPortfolio/AINoteSheet"
    },
    {
        title: "Simple Unix Shell",
        description:
            "Developed a Unix shell in C++ to replicate key features of a modern command-line interface. Completed for my operating systems class in sophomore year at WPI, I implemented an interactive prompt, command parsing, process forking, background job management, and built-in shell commands while gaining experience with Linux process management and operating system concepts.",
        imageText: "Unix Shell Preview",
        videoSrc: "./img/test.mp4",
        poster: "",
        skills: ["C++", "Operating Systems", "Command Line"],
        link: "https://github.com/tcop901aPortfolio/ShellProgram"
    }
];

const skills = [
    "Python",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "Database",
    "Git",
    "LLM Prompting",
    "Operating Systems",
    "Command Line",
    "Web Development"
];

function loadProjects() {
    const grid = document.getElementById("projectsGrid");

    projects.forEach(project => {

        const card = document.createElement("div");
        card.className = "project-card";

        const previewText = project.imageText || "Project Preview";
        const mediaMarkup = project.videoSrc
            ? `
                <video
                    class="project-video"
                    autoplay
                    muted
                    loop
                    playsinline
                    poster="${project.poster || ""}"
                >
                    <source src="${project.videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `
            : `<div class="project-media-placeholder">${previewText}</div>`;

        card.innerHTML = `
            <div class="project-media">
                ${mediaMarkup}
            </div>

            <div class="project-content">
                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="project-skills-grid">
                    ${(project.skills || [])
                        .map(skill => `<div class="skill-card">${skill}</div>`)
                        .join("")}
                </div>

                <a href="${project.link}"
                   class="project-link"
                   target="_blank">
                    View Project
                </a>
            </div>
        `;

        grid.appendChild(card);
    });
}

function loadSkills() {
    const grid = document.getElementById("skillsGrid");

    if (!grid) {
        return;
    }

    skills.forEach(skill => {
        const skillCard = document.createElement("div");
        skillCard.className = "skill-card";
        skillCard.textContent = skill;

        grid.appendChild(skillCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
    loadSkills();
});
