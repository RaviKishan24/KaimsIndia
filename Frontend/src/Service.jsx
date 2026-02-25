import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


import contentwriting from "./assets/contentwriting.avif"
import googlemy from "./assets/googlemy.avif"
import graphics from "./assets/graphics.avif"
import gst from "./assets/gst.avif"
import instaaccountmanage from "./assets/instaccount.avif"
import meta from "./assets/meta.avif"
import onlinestore from "./assets/onlinestore.avif"
import ppc from "./assets/ppc.avif"
import seo from "./assets/seo.avif"
import TM from "./assets/TM.avif"
import "./Service.css"
function Service() {
    const services = [
        { img: seo, text: "Professional SEO services to improve your website ranking, increase organic traffic, and boost online visibility" },
        { img: gst, text: "Quick and hassle-free GST registration with expert support. We handle documents, filing, and approval to get your business GST-ready fast and fully compliant." },
        { img: TM, text: "Secure your brand name and logo with fast trademark registration. We handle search, filing, and process support to protect your business legally." },
        { img: meta, text: "Run high-converting Meta ads on Facebook and Instagram to generate leads, sales, and brand awareness with targeted and optimized campaigns." },
        { img: ppc, text: "Drive instant traffic and leads with result-focused PPC campaigns. We create and optimize ads to maximize clicks, conversions, and ROI." },
        { img: onlinestore, text: "Grow your online store with expert e-commerce marketing. We optimize listings, run targeted ads, and boost traffic to increase sales and conversions." },
        { img: instaaccountmanage, text: "Professional Instagram account management including content creation, posting, growth strategy, and engagement to build your brand and audience." },
        { img: googlemy, text: "Optimize your Google My Business profile to improve local visibility, attract more customers, and increase calls, visits, and leads." },
        { img: contentwriting, text: "Create and promote high-quality content to attract, engage, and convert your target audience while building strong brand authority online." },
        { img: graphics, text: "Eye-catching creatives including graphics, ad designs, logos, and marketing visuals to make your brand stand out and attract more customers." },
    ];
    return (


        <div>
            <h1 className='service-heading'>Our Services</h1>



            <div className="our-services desktop">
                {services.map((service, index) => (
                    <div className="service" key={index}>
                        <img src={service.img} alt="service" />
                        <p>{service.text}</p>
                    </div>
                ))}
            </div>


            <div className="mobile-slider">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={15}
                    slidesPerView={2}

                    breakpoints={{
                        0: { slidesPerView: 2 },
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                    }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="service">
                                <img src={service.img} alt="service" />
                                <p>{service.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )
}

export default Service
