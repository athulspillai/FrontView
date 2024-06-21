import React from 'react'
import './Footer.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/facebook.png';
import logo2 from '../../assets/images/twitter.jpg';
import logo3 from '../../assets/images/instagram.png';
import logo4 from '../../assets/images/linkedin.png';

function Footer() {
    return (
        <div>
            <footer className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span style={{ fontFamily: 'Bebas Neue', fontSize: '20px', color: 'white' }}>
                            GET CONNECTED WITH US ON SOCIAL NETWORKS:
                        </span>
                    </div>

                    <div className='d-flex align-items-center' style={{ color: 'white' }}>
                        <a href='https://www.facebook.com/primefresh' className='me-4 text-reset' >
                            <div className='social-icon-container'>
                                <img className='facebook fa-xl' src={logo1} alt='' />
                            </div>
                        </a>
                        <a href='https://twitter.com/PrimeFresh_Ltd' className='me-4 text-reset' >
                            <div className='social-icon-container'>
                                <img className='twitter fa-xl' src={logo2} alt='' />
                            </div>
                        </a>
                        <a href='https://www.instagram.com/primefreshlimited/' className='me-4 text-reset'>
                            <div className='social-icon-container'>
                                <img className='instagram fa-xl' src={logo3} alt='' />
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A6463726&keywords=prime%20fresh%20limited&origin=RICH_QUERY_SUGGESTION&position=0&searchId=6f0635c9-f3bb-4517-9dc2-2ce674f63e5c&sid=I(v&spellCorrectionEnabled=false' className='me-4 text-reset'>
                            <div className='social-icon-container'>
                                <img className='linkedin fa-xl' src={logo4} alt='' />
                            </div>
                        </a>
                    </div>
                </section>


                <section className=''>
                    <Container className='text-center text-md-start mt-5'>
                        <Row className='mt-3'>

                            <Col md='2' lg='2' xl='3' className='mx-auto mb-4' style={{ fontSize: '15px', color: 'white' }}>
                                <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'green' }}>CATEGORIES</h6>
                                <p>Devgad Mango</p>
                                <p>Totapuri Mango</p>
                                <p>Banganapalli Mango</p>
                            </Col>

                            <Col md='3' lg='2' xl='3' className='mx-auto mb-4' style={{ fontSize: '15px', color: 'white' }}>
                                <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'green' }}>MUMBAI OFFICE</h6>
                                <p>Gala No. V1210 to V1221, Ground Floor, Opposite Akshar Business Park, Krushi Wholesale Mart, Plot No.,17-20, APMC, Sector 19 Vashi, Turbhe, Navi Mumbai-400703</p>
                                <p>9023728020</p>
                                <p>support@gmail.com</p>
                            </Col>

                            <Col md='3' lg='2' xl='3' className='mx-auto mb-4' style={{ fontSize: '14px', color: 'white' }}>
                                <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'green' }}>OUR LOCATION</h6>
                                <p>
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Ahmadabad
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Mumbai
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Delhi
                                </p>
                                <p>
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Pune
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Nashik
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Pimpalner
                                </p>
                                <p>
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Sangola
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Satana
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Sangli
                                </p>
                                <p>
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Kutchh
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Hyderabad
                                    <i className="mx-2 fa-solid fa-location-dot"></i> Rajasthan
                                </p>
                            </Col>

                            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4' style={{ fontSize: '15px', color: 'white' }}>
                                <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'green' }}>Company</h6>
                                <Link className='aboutus-footer' to={'/aboutus'}>
                                    <p>About Us</p>
                                </Link>
                                <Link className='aboutus-footer' to={'/homecontactus'}>
                                    <p>Contact Us</p>
                                </Link>
                                <p>Faq's</p>
                                <p>Terms & Conditions</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <div className='text-center p-5' style={{ color: 'white' }}>
                    © 2021 Copyright:
                    <a className='text-reset fw-bold' href='https://primefreshlimited.com/'>
                        primefreshlimited
                    </a>
                </div>
            </footer>

        </div>
    )
}

export default Footer