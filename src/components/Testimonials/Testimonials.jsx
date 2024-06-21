import React from 'react'
import './Testimonials.css';
import Banner1 from '../../assets/images/leadsurvey.jpg';
import Banner2 from '../../assets/images/Farmers.png';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';

function Testimonials() {

    const testimonialsData = [
        {
            image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R119687457&ga=GA1.1.1174568064.1692857039&semt=sph',
            name: 'Williamson',
            position: 'MANAGER',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam',
        },
        {
            image: 'https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=1380&t=st=1701153819~exp=1701154419~hmac=603a63a5ccc8757d3b6330a58b4de3737fa7d1449807117c225746a9b8c4e9b1',
            name: 'Kristina',
            position: 'HR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam',
        },
        {
            image: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1701153932~exp=1701154532~hmac=e68486c48870d25c140dcf16b26408b4af227542044f7463f04b6d0f81816d28',
            name: 'Steve Thomson',
            position: 'HR',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad asperiores at atque culpa dolores eaque fugiat hic illo ipsam',
        },
    ];
    return (
        <div>
            <div className='leadsurvey'>
                <div className='leadsurvey-image'>
                    <img src={Banner1} alt='image1' />
                </div>
                <div className='leadsurvey-content'>
                    <div className='leadsurvey-heading'>
                        <h1>Lead Survey</h1>
                    </div>
                    <div className='leadsurvey-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt iste, totam error iure aspernatur recusandae pariatur id? Cumque quo assumenda nostrum! Excepturi optio, dicta eveniet quidem dolorem ipsa quis?</p>
                    </div>
                    <div className='leadsurvey-button'>
                        <Button variant="success">Login</Button>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5 testimonials-heading'>
                <h1>TESTIMONIALS</h1>
            </div>
            <Carousel>
                {testimonialsData.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                        <div className="demo">
                            <div className="containers-testimonials" data-aos='fade-down'>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div id="testimonial-slider">
                                            <div className="testimonial">
                                                <div className="pic">
                                                    <img src={testimonial.image} alt={testimonial.name} />
                                                </div>
                                                <h3 className="title">{testimonial.name}</h3>
                                                <span className="post">{testimonial.position}</span>
                                                <p className="description">
                                                    {testimonial.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className='farming'>
                <div className='farming-image'>
                    <img src={Banner2} alt='image1' />
                </div>
                <div className='farming-content'>
                    <div className='farming-heading'>
                        <h1>FARMER SURVEY</h1>
                    </div>
                    <div className='farming-text'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt iste, totam error iure aspernatur recusandae pariatur id? Cumque quo assumenda nostrum! Excepturi optio, dicta eveniet quidem dolorem ipsa quis?</p>
                    </div>
                    <div className='farming-button'>
                        <Button variant="success">Login</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials