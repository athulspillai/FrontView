import React from 'react';
import './Services.css';
import icon1 from '../../assets/images/farmer.png';
import icon2 from '../../assets/images/export.png';
import icon3 from '../../assets/images/supply-chain-management.png';
import icon4 from '../../assets/images/supplier.png';
import icon5 from '../../assets/images/manufacture.png';
import icon6 from '../../assets/images/warehouse.png';
import icon7 from '../../assets/images/box.png';
import icon8 from '../../assets/images/conveyor-belt.png';
import client1 from '../../assets/images/Blinkit.png';
import client2 from '../../assets/images/Zepto.png';
import client3 from '../../assets/images/Amazonfresh.jpg';
import client4 from '../../assets/images/Itclimited.png';
import client5 from '../../assets/images/Countrydelight.jpg';
import client6 from '../../assets/images/Bigbasket.png';
import client7 from '../../assets/images/Swiggyinstamart.png';
import client8 from '../../assets/images/Jiomart.png';
import client9 from '../../assets/images/starbazaar.jpeg';
import client10 from '../../assets/images/Reliancefresh.png';
import client11 from '../../assets/images/Adanifresh.jpeg';
import client12 from '../../assets/images/Motherdiary.jpeg';

function ServiceBox({ icon, title, description }) {
    return (
        <div className="col-6 col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body text-center">
                    <div className="icon mb-3">
                        <img src={icon} alt={title} className="img-fluid" />
                    </div>
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

const servicesData = [
    { icon: icon1, title: 'Farming', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { icon: icon2, title: 'Exports', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { icon: icon3, title: 'Supply Chain', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { icon: icon4, title: 'Supplier', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { icon: icon5, title: 'Producer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { icon: icon6, title: 'Warehouse', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { icon: icon7, title: 'Packing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { icon: icon8, title: 'Food Processing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
];

function Services() {
    return (
        <div>
            <div className='our-services'>
                <div className="container-fluid mb-5">
                    <div className="text-center mt-5 our-services-title">
                        <h1>OUR SERVICES</h1>
                    </div>
                    <div className="row mt-5">
                        {servicesData.map((service, index) => (
                            <ServiceBox
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='our-client'>
                <div className='container-fluid mb-5'>
                    <div className="text-center mt-5 our-services-title">
                        <h1>OUR CLIENTS</h1>
                    </div>
                    <div className='client-logo d-flex justify-content-center flex-wrap'>
                        <img src={client1} alt='client1' />
                        <img src={client2} alt='client2' />
                        <img src={client3} alt='client3' />
                        <img src={client4} alt='client4' />
                        <img src={client5} alt='client5' />
                        <img src={client6} alt='client6' />
                        <img src={client7} alt='client7' />
                        <img src={client8} alt='client8' />
                        <img src={client9} alt='client9' />
                        <img src={client10} alt='client10' />
                        <img src={client11} alt='client11' />
                        <img src={client12} alt='client12' />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Services;

