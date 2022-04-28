import React from 'react'
import ServicesDetail from './ServicesDetail';

const ServiceLayout = () => {
    return (
        <section className="services" id='scrollspyServices' >
            <div className="container">
                <ServicesDetail
                    img1={require('../images/video.png')}
                    h21="Unlimited Movies and Series"
                    p1="You can watch movies anytime you want with our new content every day. If you’re tired from work and love watching with your friends and family, then, watchr is perfect for you."
                    img2={require('../images/devices.png')}
                    h22="Supported Devices"
                    p2="You can watch comfortably from any of your devices -- Desktop, Mobile, Tablet, PS4, and PS5, and Smart Television."
                />
                <ServicesDetail
                    img1={require('../images/video-player.png')}
                    h21="Offline Watch"
                    p1="You can download and watch your favorite movies and series without internet! But you can’t download the live streams."
                    img2={require('../images/membership.png')}
                    h22="Monthly Membership"
                    p2="You can try out our services for a monthly basis. Enjoy watching without the full commitment. "
                />
            </div>
        </section>


    )
}

export default ServiceLayout