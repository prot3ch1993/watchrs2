import React from 'react'
import ServicesDetail from './ServicesDetail';

const ServiceLayout = () => {
    return (
        <section className="services">
            <div className="container">
                <ServicesDetail 
                img1 = {require('../images/video.png')}
                h21 = "Unlimited Movies and Series"
                p1 = "You can watch anytime you want with our new content everyday. If you’re tired from work, and inviting your friends and family to watch together, then this is perfect to you."
                img2 = {require('../images/devices.png')}
                h22 = "Supported Devices"
                p2 = "You can watch any devices on your comfort like Desktop, Mobile, Tablet, PS4, and PS5, and Smart Television."
                />
                <ServicesDetail 
                img1 = {require('../images/video-player.png')}
                h21 = "Offline Watch"
                p1 = "You can download and watch your favorite movies and series without internet, but you can’t download on live streaming."
                img2 = {require('../images/membership.png')}
                h22 = "1 Month Membership"
                p2 = "You can watch any devices on your comfort like Desktop, Mobile, Tablet, PS4, and PS5, and Smart Television."
                />
            </div>
        </section>
            
        
    )
}

export default ServiceLayout