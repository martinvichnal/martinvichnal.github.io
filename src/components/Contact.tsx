import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";

import contactImg from "../assets/img/contact-img.svg"

interface FormDetails {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string
}

export const Contact = () => {

    const onFormUpdate = (category: keyof FormDetails, value: string) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const [formDetails, setFormDetails] = useState<FormDetails>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    // const [buttonText, setButtonText] = useState('Send');
    // const [status, setStatus] = useState({});

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText('Sending...');

    // }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="asd" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Phone Number"
                                        onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea
                                        rows={6}
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>Send</span></button>
                                </Col>
                                {/* {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                } */}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}