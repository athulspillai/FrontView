import React from 'react';
import './Aboutus.css';
import Banner1 from '../../assets/images/about.jpg';
import Mission from '../../assets/images/mission.jpg';
import Vision from '../../assets/images/vision.jpg';
import Certificate1 from '../../assets/images/fssai.png';
import Certificate2 from '../../assets/images/apeda.jpeg';
import Certificate3 from '../../assets/images/duns.png';
import Certificate4 from '../../assets/images/crisil.jpg';
import Certificate5 from '../../assets/images/iso.png';
import Certificate6 from '../../assets/images/agmark.png';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CountUp from 'react-countup';

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

const Statistics = () => (
    <Container className='statistics-container mt-5' data-aos='fade-up'>
        <Row>
            <Col xs={12} md={3} className='statistic'>
                <p>Employement Impact</p>
                <h2><CountUp end={100000} duration={5} separator="," /></h2>
                <p>People Across India</p>
            </Col>
            <Col xs={12} md={3} className='statistic'>
                <p>Farmer Connect</p>
                <h2><CountUp end={110000} duration={5} separator="," /></h2>
                <p>Across 7 State</p>
            </Col>
            <Col xs={12} md={3} className='statistic'>
                <p>Agriculture Market</p>
                <h2><CountUp end={85} duration={5} separator="," /></h2>
                <p>Across 18 State</p>
            </Col>
            <Col xs={12} md={3} className='statistic'>
                <p>Trade Partners</p>
                <h2><CountUp end={2400} duration={5} separator="," /></h2>
                <p>Across 8 State</p>
            </Col>
        </Row>
    </Container>
);

const MissionSection = () => (
    <Container className='mission-container my-5'>
        <Row className='align-items-center'>
            <Col xs={12} md={6} data-aos='fade-right'>
                <img src={Mission} alt='Mission' className='img-fluid' />
            </Col>
            <Col xs={12} md={6} data-aos='fade-left'>
                <h2 className='text-center mt-5'>Our Mission</h2>
                <p>
                    To be the leader in the chosen industry providing a perfect combination of quality products and excellent services at a competitive price to our customers through operational excellence. This means gaining a leadership position across FnV Supply Chain Service.
                </p>
            </Col>
        </Row>
    </Container>
);

const VisionSection = () => (
    <Container className='vision-container my-5'>
        <Row className='align-items-center'>
            <Col xs={12} md={6} data-aos='fade-right'>
                <img src={Vision} alt='Vision' className='img-fluid' />
            </Col>
            <Col xs={12} md={6} data-aos='fade-left'>
                <h2 className='text-center mt-5'>Our Vision</h2>
                <p>
                    To be the best in the eyes of our customers, employees and suppliers through superior customer service, innovation and commitment. This means building a sustainable & scalable F&V institution having robust ecosystem for equal growth of all stakeholders.
                </p>
            </Col>
        </Row>
    </Container>
);

const Certificates = () => (
    <div className='company-certificate'>
        <div className='container-fluid mb-5'>
            <div className='company-certificate-heading text-center mt-5'>
                <h1>COMPANY CERTIFICATE</h1>
            </div>
            <div className='company-certificate-img d-flex justify-content-center flex-wrap'>
                <img src={Certificate1} alt='certificate1' />
                <img src={Certificate2} alt='certificate2' />
                <img src={Certificate3} alt='certificate3' />
                <img src={Certificate4} alt='certificate4' />
                <img src={Certificate5} alt='certificate5' />
                <img src={Certificate6} alt='certificate6' />
            </div>
        </div>
    </div>
);

function Aboutus() {
    return (
        <div>
            <Header />
            <div className='aboutus'>
                <div className='aboutus-banner'>
                    <Carousel>
                        <Carousel.Item>
                            <BannerSlide
                                subtitle="PRIME FRESH LIMITED"
                                text="PRIME FRESH LIMITED, we are dedicated to bringing you the freshest and highest quality fruits and vegetables. Our commitment to sustainability and excellence ensures that you receive the best produce to nourish your health and well-being."
                                image={Banner1}
                                altText="About Us"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <Statistics />
            <div className='company-container'>
                <div className='Company-heading text-center mt-5'>
                    <h1>COMPANY PROFILE</h1>
                </div>
                <div className='Company-details container'>
                    <p>
                        Founded in the year 2007, Prime Fresh Limited is headquartered in Ahmedabad and Listed on Bombay Stock Exchange (India) is a leading Post harvest management company focused on Fresh Fruits and vegetables supply chain for several verticals across industries locally & globally.
                        PRIME FRESH™ has been a well-established player mastering the core activities from sourcing across different states of India to distribution of Fruits & Vegetables through multiple platforms (Domestic & Global markets).
                        Prime has successfully built a huge network of Farmers, aggregators, various cold storages, pack houses, transportation services and other supply chain partners for all kinds of fresh Fruits and Vegetables.
                        Prime is providing employment directly & indirectly to more than 100000+ people across India.
                        Prime Fresh Limited credits a huge experience since 2007 in sourcing, handling, sorting & grading, warehousing, ripening, storage, packing and delivery of Fresh Fruits and vegetables.
                        Prime deals with Modern trade, Exports sector, wholesale & APMC, Retail, Corporate supply, Supply to food processing companies and General trade.
                        Prime Fresh has built a wide network of over 1,10,000+ Farmers, 85+ Agriculture Markets & 2400+ Trade Partners, 30+ large corporate B2B buyers, 20+ Exporters, Network in 6 countries for Exports.
                        Prime Fresh™ has been a service provider, supplier & packer for India's largest retailer, India's largest exporters and manager of pack houses since the year of 2007.
                        We aspire to develop and scale up the business by building new relationships for Multi-platform Fresh Fruits & Vegetable distribution along with farmers and all other stakeholders Prime Fresh embraces a long-standing track record and experience of working with large corporate groups across Modern Trade, Exporters, HORECA, APMCs and Super markets in India and world over.
                        Our Core Leadership Team of 25+ Agri Experts have average experience of 24 years each across the entire value chain from Seed to Farming to Processing & Distribution of various Agricultural Produces. Prime Fresh Limited works with strong ethics and abides by government compliances.
                        Company is ISO certified, rated by CRISIL and DUNS certified. PRIME FRESH holds several licenses like FSSAI, APEDA and APMC Ahmedabad. Prime Fresh™ allies for a long term with potential farmers, buyers & sellers of Fruits and vegetables to ensure that they can execute reliable, consistent, ethical and smooth supply chain management services by providing a solid bridge between all the channel partners.
                        Prime Fresh™ always looks forward to associate with industry players and scale up the Fruits & Vegetables supply chain operations through mutually viable structures and models.
                    </p>
                </div>
            </div>
            <MissionSection />
            <VisionSection />
            <Certificates />
            <Footer />
        </div>
    );
}

export default Aboutus;


