import pomodoroImage from "../assets/PomodoroCover.png"
import portfolioImage from "../assets/feels.png"
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
        <div className="bg-bkg text-content h-screen">
            <div className="py-10 mx-10 pb-10">
                <h1 className="text-4xl font-bold mb-2 tracking-tight">
                    Projects
                </h1>
                <p className="text-lg mb-2 tracking-tight">
                    Here are some of my projects. You can filter them by tags.
                </p>
            </div>
            <div
                id="projectGrid"
                className="flex flex-wrap justify-center gap-14"
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

// Filtering section

// <div
//     id="tagFilter"
//     className="flex flex-col justify-start gap-5"
// >
//     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//         Select what type of projects do you want to filter
//     </label>
//     <select
//         id="tags"
//         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//     >
//         <option value="All" selected>
//             All
//         </option>
//         {allTags.map((tag) => (
//             <option value={tag}>{tag}</option>
//         ))}
//     </select>
// </div>
