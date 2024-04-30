import React, { useState } from 'react'
import CameraRearIcon from '@mui/icons-material/CameraRear';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import TungstenIcon from '@mui/icons-material/Tungsten';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import WcIcon from '@mui/icons-material/Wc';
import './OurServices.css'

const OurServices = () => {
    const [visibleCards, setVisibleCards] = useState(2)
    const cards = [
        {
            id: 1,
            title: "CCTV Installation",
            description: "Enhance security and peace of mind with our state-of-the-art CCTV installation services. From residential complexes to commercial properties, we provide customized surveillance solutions tailored to your specific needs. Our expert technicians ensure seamless installation and integration, utilizing the latest technology to safeguard your premises 24/7.",
            icon: <CameraRearIcon /> // Material-UI icon component
        },
        {
            id: 2,
            title: "Fire Extinguishers Installations",
            description: "Protecting your property and occupants is paramount. Our specialized team excels in the proper placement and installation of fire extinguishers, maximizing coverage and accessibility during emergencies. Through careful assessment and adherence to local regulations and industry standards, we provide peace of mind, knowing your fire protection needs are expertly addressed.",
            icon: <FireExtinguisherIcon /> // Material-UI icon component
        },
        {
            id: 3,
            title: "Plumbering",
            description: "Keep your plumbing systems running smoothly with our comprehensive plumbing services. Whether it's repairing leaks, installing fixtures, or upgrading water heaters, our licensed plumbers are equipped to handle a wide range of residential and commercial plumbing needs. With prompt service and quality workmanship, we're your trusted partner for all your plumbing requirements.",
            icon: <PlumbingIcon /> // Material-UI icon component
        },
        {
            id: 4,
            title: "Solar System Installation",
            description: "Harness the power of renewable energy with our solar panel installation and maintenance services. Whether you're looking to reduce energy costs or minimize your carbon footprint, our experts can design and install solar panel systems tailored to your property's unique specifications. From initial consultation to ongoing maintenance, we're committed to maximizing your solar investment for years to come.",
            icon: <SolarPowerIcon /> // Material-UI icon component
        },
        {
            id: 5,
            title: "Alarm Systems",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, numquam.",
            icon: <SolarPowerIcon /> // Material-UI icon component
        },
        {
            id: 6,
            title: "Electrical Work",
            description: "Offering comprehensive electrical services for residential, commercial, and industrial properties, our licensed electricians handle everything from wiring and lighting installations to panel upgrades and troubleshooting. With meticulous craftsmanship and attention to detail, we ensure that your electrical systems operate safely and efficiently, tailored to your specific needs and budget.",
            icon: <TungstenIcon /> // Material-UI icon component
        },
        {
            id: 7,
            title: "Water Proofing",
            description: "Protect your property from water damage with our expert waterproofing solutions. From basements to rooftops, we specialize in sealing and waterproofing structures to prevent moisture infiltration and mold growth. Our proven techniques and quality materials ensure long-lasting protection against water intrusion, preserving the integrity and value of your property.",
            icon: <InvertColorsOffIcon /> // Material-UI icon component
        },
        {
            id: 8,
            title: "Electric Polls Installation",
            description: "Specializing in the safe and efficient installation of electric poles, our experienced team ensures compliance with all safety standards and regulations. Whether for infrastructure expansion or replacement, our expert services prioritize reliability and longevity, delivering strategically placed and securely anchored poles for optimal power distribution networks.",
            icon: <SolarPowerIcon /> // Material-UI icon component
        },
        {
            id: 9,
            title: "Road Construction and Maintenance",
            description: "Ensure smooth and safe transportation routes with our road construction and maintenance services. From highways to residential streets, we specialize in all aspects of road infrastructure, including design, construction, and ongoing maintenance. Our team prioritizes quality, efficiency, and safety, delivering durable roads that withstand the test of time and traffic.",
            icon: <AddRoadIcon /> // Material-UI icon component
        },
        {
            id: 10,
            title: "CNG Pipeline Installations and Maintenance",
            description: "Reliable gas pipeline networks are essential for safe and efficient energy distribution. Our experienced team specializes in the design, installation, and maintenance of gas pipelines for residential, commercial, and industrial applications. With a focus on safety and compliance, we deliver reliable solutions that meet regulatory standards and exceed expectations.",
            icon: <HorizontalRuleIcon /> // Material-UI icon component
        },
        {
            id: 11,
            title: "Bio Toilet Installations and Maintenance",
            description: "Promote sanitation and environmental sustainability with our bio toilet installation and maintenance services. Ideal for remote areas, construction sites, and events, our bio toilets offer a hygienic and eco-friendly alternative to traditional sanitation solutions. We handle everything from installation to waste management, ensuring a clean and odor-free restroom experience.",
            icon: <WcIcon /> // Material-UI icon component
        },
        // Add more cards with icons here
    ];
    const handleShowMoreCards = () => {
        setVisibleCards(previousCards => previousCards + 2)
    }
    return (
        <div className='services-section'>
            <h2>services we provide</h2>
            <p>Discover our range of services designed to meet your needs. From electrical work to fire extinguisher installations, we prioritize safety and reliability. Our experienced team delivers top-quality solutions tailored to homeowners, businesses, and property managers. Explore our services below to learn more.</p>
            {visibleCards < cards?.length && <div ontouchstart="">
                <div class="button">
                    <button onClick={handleShowMoreCards}>view more services</button>
                </div>
            </div>}
            <div className="services-cards-section">
                {
                    cards?.slice(0, visibleCards)?.map((card, index) => (
                        <div className="service-card" key={index}>
                            <div className="card-icon">
                                {card?.icon}
                                <h3>{card?.title}</h3>
                            </div>
                            <div className="service-card-content">
                                <p>{card?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OurServices
