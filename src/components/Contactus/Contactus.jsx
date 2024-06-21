import React, { useState } from 'react';
import './Contactus.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Carousel, Container, Row, Col, Button, Form } from 'react-bootstrap';
import Banner1 from '../../assets/images/contactus.jpg';
import Banner2 from '../../assets/images/contactus2.jpg';
import Banner3 from '../../assets/images/contactus3.jpg';

const BannerSlide = ({ title, subtitle, text, image, altText }) => (
    <Container>
        <Row className="align-items-center banner-head">
            <Col xs={12} md={6} className="d-flex justify-content-center order-md-2">
                <img
                    className="d-block banner-img rotated-image-y"
                    src={image}
                    alt={altText}
                    style={{ width: '100%' }}
                />
            </Col>
            <Col xs={12} md={6} className="text-md-left order-md-1">
                <h1 className='banner-text-head'>{title}</h1>
                <h1 className='banner-sec-text'>{subtitle}</h1>
                <p>{text}</p>
                <Button className='banner--button'>Read More</Button>
            </Col>
        </Row>
    </Container>
);

function Contactus() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const handleWhatsAppButtonClick = () => {
        window.location.href = 'https://wa.me/7736435929';
    };

    return (
        <div>
            <Header />
            <div className='contactus'>
                <div className='contactus-banner'>
                    <Carousel>
                        <Carousel.Item>
                            <BannerSlide
                                subtitle="PRIME FRESH LIMITED"
                                text="If you have any questions or need further information, please feel free to contact us at"
                                image={Banner1}
                                altText="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <BannerSlide
                                subtitle="PRIME FRESH LIMITED"
                                text="If you have any questions or need further information, please feel free to contact us at"
                                image={Banner2}
                                altText="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <BannerSlide
                                subtitle="PRIME FRESH LIMITED"
                                text="If you have any questions or need further information, please feel free to contact us at"
                                image={Banner3}
                                altText="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='parent-container' data-aos='fade-down'>
                    <div className="centered-heading">
                        <h1 data-aos='fade-down'>FOR MORE ENQUIRY TO FRANCHISING WITH <b className="typewriter"></b></h1>
                    </div>
                    <Button onClick={handleWhatsAppButtonClick} data-aos='fade-down' className='whatsapp-button'>
                        <i className="fa-brands fa-whatsapp fa-xl"></i> WHAT'S UP
                    </Button>
                </div>
            </div>
            <div className='contactus-form'>
                <Container>
                    <div className='contactus-heading text-center mt-5'>
                        <h1>GET IN TOUCH</h1>
                    </div>
                    <Row className='mt-5'>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter your message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="map-container">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4770.165690829062!2d72.54621937102024!3d23.0262456791963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e8d6836e55%3A0xef5847e50ac7b54a!2sPrime%20Fresh%20Limited!5e0!3m2!1sen!2sin!4v1702384704437!5m2!1sen!2sin"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <Footer />
        </div>
    );
}

export default Contactus;
