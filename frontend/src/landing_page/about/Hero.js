import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className="row p-5 mt-5 mb-5">
                <h1 className='fs-2 text-center'>
                    We are Fincrest, your trusted partner in financial innovation.
                </h1>
            </div>
            <div className="row p-5 mt-5 border-top text-muted fs-7" style={{lineHeight: '2rem', fontSize: '1.2rem'}}>  
                <div className='col-6'>
                    <p className='fs-5'>
                        At Fincrest, we are dedicated to revolutionizing the financial landscape through cutting-edge technology and innovative solutions.</p>
                    <p className='fs-5'>
                        Our mission is to empower individuals and businesses alike by providing seamless access to financial services that are secure, efficient, and user-friendly. With a team of passionate experts, we strive to bridge the gap between traditional finance and the digital world, fostering growth and inclusivity in the global economy.
                    </p>
                </div>
                <div className='col-6'>
                    <p className='fs-5'>
                        Founded in 2020, Fincrest has quickly established itself as a leader in the fintech industry.
                    </p>
                    <p className='fs-5'>
                        Our journey began with a vision to create a platform that not only meets the evolving needs of our customers but also anticipates future trends in finance. Through relentless innovation and a customer-centric approach, we have developed a suite of products and services that cater to diverse financial needs, from personal banking to enterprise solutions.
                    </p>
                    <p className='fs-5'>As we continue to grow, our commitment to excellence and integrity remains unwavering, driving us to deliver unparalleled value to our clients worldwide.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;