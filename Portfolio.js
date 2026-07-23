const projects = [
    {
        title: "Funds Tracker",
        description:
            "A web application designed for a trading card business I am a part of to track transactions and manage funds. Utilizing Firebase for real-time updates on transactions and balances, for coordantion between multiple team members.",
        imageText: "Funds Tracker Preview",
        skills: ["JavaScript", "Database", "HTML", "CSS"],
        link: "https://github.com/tcop901aPortfolio/PoolTracker"
    },
    {
        title: "Roblox Game",
        description:
            "A multiplayer Roblox game developed with Lua scripting.",
        imageText: "Roblox Preview",
        skills: ["Lua", "Game Design", "Multiplayer"],
        link: "#"
    },
    {
        title: "Ionic App",
        description:
            "A mobile application built with Ionic React and TypeScript.",
        imageText: "Ionic Preview",
        skills: ["Ionic", "React", "TypeScript"],
        link: "#"
    }
];

const skills = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Ionic",
    "Lua",
    "Git"
];

function loadProjects() {
    const grid = document.getElementById("projectsGrid");

    projects.forEach(project => {

        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <div class="project-media">
                ${project.imageText}
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