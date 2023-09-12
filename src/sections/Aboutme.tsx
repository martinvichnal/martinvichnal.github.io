const Aboutme = () => {
    return (
        <div className="padding bg-bkg">
            <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
                <h1 className="basis-1/2 pb-10 text-3xl md:text-4xl lg:text-5xl text-content">
                    About me
                </h1>
                <p className="basis-1/2 text-justify">
                    I am an Electrical Engineer student at Óbudai University in
                    Budapest. My main interests are IoT and embedded systems and
                    web development, but I am also interested in other fields of
                    software development. I am currently working on a project
                    that combines IoT and web development. All my web
                    development projects are public on my GitHub profile, feel
                    free to check them out.
                </p>
            </div>
        </div>
    )
}

export default Aboutme

// <div className="pt-20 h-screen">
//     <div className="flex flex-col items-center justify-center">
//         <div className="flex flex-col items-center justify-center">
//             <h1 className="text-4xl font-bold text-center text-contentC dark:text-contentD">
//                 About me
//             </h1>
//             <p className="mt-2 text-lg text-center text-contentC dark:text-contentD">
//                 I am an Electrical Engineer student at Óbudai University
//                 in Budapest. My main interests are IoT and embedded
//                 systems and web development, but I am also interested in
//                 other fields of software development. I am currently
//                 working on a project that combines IoT and web
//                 development. All my web development projects are public
//                 on my GitHub profile, feel free to check them out.
//             </p>
//         </div>
//     </div>
// </div>
