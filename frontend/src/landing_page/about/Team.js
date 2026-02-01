import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className="row p-5 mt-5 border-top">
                <h1 className='text-center '>
                    People
                </h1>
            </div>
            <div className="row p-5 text-muted align-items-center" style={{lineHeight: '2rem', fontSize: '1.2rem', display: 'flex', flexWrap: 'wrap'}}>
                <div className='col-12 col-md-6 d-flex justify-content-center'>
                    <div className="d-flex flex-column align-items-center w-100">
                        <div className="team-img-container">
                            <img src='media/images/tapan.jpeg' alt='Team Member' className="team-img" />
                        </div>
                        <div className="team-profile-text mt-3 text-center">
                            <div className="team-name">Tapan Rath</div>
                            <div className="team-designation">Founder & CEO</div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 d-flex flex-column justify-content-center'>
                    <p>
                        Tapan Rath is the visionary Founder and CEO of Fincrest, bringing over a decade of experience in the fintech industry.
                    </p>
                    <p>
                        Since founding Fincrest in 2020, Tapan has led the company with a focus on innovation, customer-centric solutions, and strategic growth.
                    </p>
                    <p> 
                        With a background in software engineering and a passion for financial innovation, Tapan has been instrumental in driving Fincrest's mission to revolutionize access to financial services.
                    </p>
                    <p>
                        Under his leadership, the company has developed cutting-edge solutions that empower individuals and businesses alike, fostering growth and inclusivity in the global economy.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;