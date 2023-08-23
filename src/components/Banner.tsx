import { Col, Container, Row } from "react-bootstrap"



export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm Martin Vichnal`} <span className="wrap">Electrical Engeneer</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet elit pretium, dictum augue at, rhoncus ex. Morbi mattis at eros nec blandit. Aliquam blandit purus vel nibh condimentum tempor. Donec et malesuada metus, vel efficitur eros. Nunc in pellentesque quam. Cras mattis, enim in auctor aliquam, dolor nulla accumsan tortor, id blandit lectus nulla non justo. Duis consequat aliquet orci at fermentum. Sed massa augue, tristique sed ligula ut, pretium tristique enim. Fusce egestas orci et mollis finibus.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}