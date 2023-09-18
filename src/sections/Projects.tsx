import pomodoroImage from "../assets/PomodoroCardCover.png"
import portfolioImage from "../assets/PortfolioCardCover.png"
import smartLampImage from "../assets/door.jpg"

import ProjectsCard from "../components/ProjectsCard"

// All tags for filtering
export const allTags = ["React", "WebDev", "ESP32", "C++", "IoT"]
let filterTags = allTags

// Projects object array with all the projects
export const projectObj = [
    {
        title: "Pomodoro tracker",
        description:
            "This is my first sort of complex React project. This page is based on the pomodoro technique which is an excellent way for time management. It was invented in the late 1980s by Francesco Cirillo.",
        image: pomodoroImage,
        tags: ["React", "WebDev"],
        webSource: "https://www.martinvichnal.com/pomodoro/",
        gitSource: "https://github.com/martinvichnal/pomodoro",
    },
    {
        title: "Portfolio",
        description: "This is my personal portfolio.",
        image: portfolioImage,
        tags: ["React", "WebDev"],
        webSource: "https://www.martinvichnal.com/",
        gitSource: "https://github.com/martinvichnal/",
    },
    {
        title: "IoT Smart Lamp",
        description:
            "Smart lamp built with ESP32 and WS2812B LEDs. It is controlled by a web interface.",
        image: smartLampImage,
        tags: ["ESP32", "C++", "WebDev", "IoT"],
        webSource: "https://github.com/martinvichnal/ESP-IoT-Lamp",
        gitSource: "https://github.com/martinvichnal/ESP-IoT-Lamp",
    },
]

const Projects = () => {
    return (
        <div className="padding bg-bkg w-screen h-full">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-content">
                    Projects
                </h1>
                <p className="mt-6 mb-24 sm:text-lg lg:text-xl text-accent-1">
                    Here are some of my projects. You can filter them by tags.
                </p>
            </div>
            <div
                id="projectGrid"
                className="flex flex-wrap justify-evenly gap-14"
            >
                {projectObj
                    .filter((project) =>
                        project.tags.some((tag) => filterTags.includes(tag))
                    )
                    .map((filteredProjects) => (
                        <ProjectsCard
                            key={filteredProjects.title}
                            title={filteredProjects.title}
                            description={filteredProjects.description}
                            image={filteredProjects.image}
                            tags={filteredProjects.tags}
                            webSource={filteredProjects.webSource}
                            gitSource={filteredProjects.gitSource}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Projects
