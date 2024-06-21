import React from 'react';
import './Banner.css';
import Banner1 from '../../assets/images/Banner1.jpg';
import Banner2 from '../../assets/images/Banner2.jpg';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

const BannerSlide = ({ title, subtitle, text, image, altText }) => (
    <Container>
        <Row className="align-items-center banner-head">
            <Col md={6} className="text-md-left">
                <h1 className='banner-text-head'>{title}</h1>
                <h1 className='banner-sec-text'>{subtitle}</h1>
                <p>{text}</p>
                <Button className='banner--button'>Register</Button>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
                <img
                    className="d-block banner-img"
                    src={image}
                    alt={altText}
                    style={{ width: '100%' }}
                />
            </Col>
        </Row>
    </Container>
);

function Banner() {
    const handleWhatsAppButtonClick = () => {
        window.location.href = 'https://wa.me/7736435929';
    };

    return (
        <div className='homepage'>
            <div className='homepage-banner'>
                <Carousel>
                    <Carousel.Item>
                        <BannerSlide
                            title="Fresh and Organic"
                            subtitle="PRIME FRESH LIMITED"
                            text="Discover the finest selection of fresh fruits and vegetables to nourish your health and well-being."
                            image={Banner1}
                            altText="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <BannerSlide
                            title="Nature's Best"
                            subtitle="PRIME FRESH LIMITED"
                            text="Experience the freshness of handpicked fruits and vegetables delivered straight to your door."
                            image={Banner2}
                            altText="Second slide"
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
    );
}

export default Banner;
