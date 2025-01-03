import React from 'react';
import './Workhistory.css';

function Workhistory() {
  return (
    <section className='WH' id='WH'>
        <header>Work History</header>
        <div className='WH-content'>
            <div className='WH-details'>
                <div className='WH-text'>
                    <div className='WH-topic'>
                        Aptean
                    </div>

                    <h3>Associate Engineer</h3>

                    <p data-aos="fade-right">
                        Developed and implemented an automated acquisition workflow 
                        <br/> using Flowable to streamline post-acquisition processes, 
                        including <br/>welcome communications, task tracking, and timely notifications, 
                        <br/>ensuring seamless and efficient merger completions. Worked closely <br/> 
                        with project manager, and department managers in daily scrum <br/>
                        meetings to maintain project alignment and drive progress
                    </p>

                    <div className='WH-experience'>
                        {/* <div className='num'>1</div>
                        <div className='WH-exp'>
                            Years Of <br/>
                            Experience
                        </div> */}


                    </div>
                </div>

                <div className='WH-boxes'>
                    <img src='https://i.ibb.co/smTzRzx/Screenshot-2024-11-28-at-10-22-54-AM.jpg'/>

                </div>
            </div>
        </div>

        <div className='WH-content'>
            <div className='WH-details'>
                <div className='WH-text'>
                    <div className='WH-topic'>
                        Unholywar clothing
                    </div>

                    <h3>Front-End Developer</h3>
                    <p data-aos="fade-right">
                    Designed and developed a functional front-end user interface for <br/>
                    UnholyWarClothing's website using React.js, JavaScript, and CSS. <br/>
                    Created reusable components and implemented an API to fetch<br/>
                    and display clothing details, ensuring a seamless user experience.
                    </p>

                    <div className='WH-experience'>
                    {/* <div className='num'>11</div>
                        <div className='WH-exp'>
                            Years Of <br/>
                            Experience
                        </div> */}


                    </div>
                </div>

                <div className='WH-boxes'>
                    <img src='https://i.ibb.co/2vDrCh6/Screenshot-2025-01-01-at-10-25-39-PM.png'/>

                </div>
            </div>
        </div>

        <div className='WH-content'>
            <div className='WH-details'>
                <div className='WH-text'>
                    <div className='WH-topic'>
                        Juggified
                    </div>
                    
                    <h3>User Interface Developer</h3>
                        <p data-aos="fade-right">
                            Designed and developed a custom artist portfolio website for <br/> 
                            Juggified Steppa using React, JavaScript, and CSS. Built an intuitive <br/>
                            user interface tailored to the artist's vision and implemented an <br/>
                             MP3 player feature for streaming selected songs.
                        </p>

                    <div className='WH-experience'>
                    {/* <div className='num'>11</div>
                        <div className='WH-exp'>
                            Years Of <br/>
                            Experience
                        </div> */}


                    </div>
                </div>

                <div className='WH-boxes'>
                    <img src='https://i.ibb.co/CbgrYbf/IMG-1191.jpg'/>

                </div>
            </div>
        </div>

        <div className='WH-content'>
            <div className='WH-details'>
                <div className='WH-text'>
                    <div className='WH-topic'>
                        Sears
                    </div>

                    <h3>Front-End Developer - Intern</h3>

                    <p data-aos="fade-right">
                        Developed and designed user interfaces for the juniors and kids <br/>
                        departments at Sears using React.js, JavaScript, and CSS. Built <br/>reusable 
                        React components, integrated APIs to fetch product data, <br/> and collaborated with 
                        an Agile team through daily scrum meetings to <br/>ensure project alignment and progress.
                    </p>

                    <div className='WH-experience'>
                    {/* <div className='num'>1</div>
                        <div className='WH-exp'>
                            Year Of <br/>
                            Work
                        </div> */}


                    </div>
                </div>

                <div className='WH-boxes'>
                    <img src='https://i.ibb.co/f16W0Gq/Screenshot-2025-01-02-at-11-05-43-PM.png'/>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Workhistory