const Aboutme = () => {
    return (
        <div className="padding bg-bkg h-screen">
            <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
                <h1 className="basis-1/2 pb-10 text-3xl md:text-4xl lg:text-5xl text-content">
                    About me
                </h1>
                <p className="basis-1/2 text-justify text-content">
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
