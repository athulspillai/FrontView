import React, { useState } from 'react';
import './Products.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Carousel, Container, Row, Col, Button, Card, FormControl } from 'react-bootstrap';
import Banner1 from '../../assets/images/product1.jpg';
import Banner2 from '../../assets/images/product2.jpg';
import Product1 from '../../assets/images/apple.jpg';
import Product2 from '../../assets/images/orange.jpg';
import Product3 from '../../assets/images/mango.jpg';
import Product4 from '../../assets/images/onion.jpg';
import Product5 from '../../assets/images/potatoes.jpg';
import Product6 from '../../assets/images/pomegranate.jpg';


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

const ProductCard = ({ image, title, text }) => (
    <Card className="product-card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
        </Card.Body>
    </Card>
);

function Products() {
    const [searchQuery, setSearchQuery] = useState('');

    const products = [
        { image: Product1, title: 'APPLE', },
        { image: Product2, title: 'ORANGE', },
        { image: Product3, title: 'MANGO', },
        { image: Product4, title: 'ONION', },
        { image: Product5, title: 'POTATOES', },
        { image: Product6, title: 'POMEGRANATE', },
    ];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Header />
            <div className='product'>
                <div className='product-banner'>
                    <Carousel>
                        <Carousel.Item>
                            <BannerSlide
                                subtitle="PRIME FRESH LIMITED"
                                text="It's a high-quality, sustainable product that meets all your needs."
                                image={Banner1}
                                altText="About Us"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <BannerSlide
                                subtitle="PRIME FRESH LIMITED"
                                text="It's a premium product designed to provide the best results."
                                image={Banner2}
                                altText="About Us"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <Container className="mt-5">
                <Row className="mb-4">
                    <Col>
                        <FormControl
                            type="search"
                            placeholder="Search for products"
                            className="mr-2"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </Col>
                </Row>
                <Row>
                    {filteredProducts.map((product, index) => (
                        <Col xs={12} md={3} key={index}>
                            <ProductCard
                                image={product.image}
                                title={product.title}
                                text={product.text}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default Products;

