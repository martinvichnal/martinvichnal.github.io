import { useEffect, useState } from "react"

const Hero = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const toRotate = [
        "an Electrical Engineer",
        "a Software Engineer",
        "an IoT creator",
    ]
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setIndex((prevIndex) => prevIndex - 1)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setIndex(1)
            setDelta(500)
        } else {
            setIndex((prevIndex) => prevIndex + 1)
        }
    }

    return (
        <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container bg-bkg text-content">
            <div className="w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold md:py-3">
                    Hello, there.
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        I'm Martin Vichnál
                    </p>
                </div>
                <p className="font-bold py-4 text-xl md:text-4xl text-accent-1">
                    I'm {text}
                </p>
                <p className="font-bold p-2 text-accent-2">
                    Wellcome to my portfolio
                </p>
            </div>
        </div>
    )
}

export default Hero
