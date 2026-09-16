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

async function loadProjects() {
    const grid = document.getElementById("projectsGrid");

    if (!grid) {
        return;
    }

    try {
        const response = await fetch("./projects.json");

        if (!response.ok) {
            throw new Error(`Could not load projects.json: ${response.status}`);
        }

        const projects = await response.json();

        projects.forEach((project, index) => {
            const card = document.createElement("div");
            card.className = "project-card";
            card.setAttribute("data-project-number", String(index + 1).padStart(2, "0"));

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
            const projectLinkMarkup = project.link
                ? `
                    <a href="${project.link}"
                       class="project-link"
                       target="_blank">
                        View Project
                    </a>
                `
                : "";

            card.innerHTML = `
                <div class="project-media">
                    ${mediaMarkup}
                </div>

                <div class="project-content">
                    <p class="project-type">Web application / software</p>
                    <h3>${project.title}</h3>

                    <p>${project.description}</p>

                    <div class="project-skills-grid">
                        ${(project.skills || [])
                            .map(skill => `<div class="skill-card">${skill}</div>`)
                            .join("")}
                    </div>

                    ${projectLinkMarkup}
                </div>
            `;

            grid.appendChild(card);
        });
    } catch (error) {
        grid.innerHTML = `<p class="project-load-error">Projects could not be loaded right now.</p>`;
        console.error(error);
    }
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
