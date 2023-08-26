import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/alien.jpg"


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Electrical Engineer", "IoT creator", "Software Engineer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        // <section className="banner" id="home">
        <section className="bg-gradient-to-l md:bg-gradient-to-r from-red-200 to-blue-200 dark:text-white dark:from-red-400 dark:to-blue-400">
            <Container>
                <Row className="align-items-center">
                    < Col xs={12} md={6} xl={7} >
                        <span>Welcome to my portfolio</span>
                        <h1>{`Hi I'm Martin Vichnal`} <span>{text}</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit pretium, dictum augue at, rhoncus ex. Morbi mattis at eros nec blandit. Aliquam blandit purus vel nibh condimentum tempor. Donec et malesuada metus, vel efficitur eros. Nunc in pellentesque quam. Cras mattis, enim in auctor aliquam, dolor nulla accumsan tortor, id blandit lectus nulla non justo. Duis consequat aliquet orci at fermentum. Sed massa augue, tristique sed ligula ut, pretium tristique enim. Fusce egestas orci et mollis finibus.
                        </p>
                    </Col >
                </Row >
            </Container >
        </section >
    )
}

export default Banner;