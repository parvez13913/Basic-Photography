import React from 'react';
import developerPhoto from '../../images/about/developer.jpg'
import htmlPhoto from '../../images/about/skill/html.png';
import cssPhoto from '../../images/about/skill/css.jpeg';
import bootstrapPhoto from '../../images/about/skill/bootstrap..png';
import tailwindPhoto from '../../images/about/skill/tailwind.png';
import javascriptPhoto from '../../images/about/skill/javascript.png';
import reactPhoto from '../../images/about/skill/react.png';
import './About.css';

const About = () => {
    return (
        <div className='container my-5'>
          <div className='d-flex justify-content-center align-items-center about-pag'>
            <div className='developer-photo'>
                <img className='d-block rounded-pill m-5' width= '300px' src={developerPhoto} alt="" /> 
            </div>

            <div>
                <h1>Parvez Rahman</h1>
                <p>Hi I am Parvez Rahman. I am an honors first year student of Chemistry Department of Jhenaidah K.C. College. My weakness over programming since I was in school. I have decided to learn web development by thinking a lot and I am learning well. I want to be a good person and a good web developer.I want to develop my skills more in the next 5 months and get a good Jobs. I will do whatever it takes to develop my own skills.</p>
                <div>
                    <hr />
                    <h3>My Skill</h3>
                  <div>  
                    <p>
                        <span>HTML</span>
                        <img width="50px" src={htmlPhoto} alt="htmlPhoto" />
                    </p>
                    <p>
                        <span>CSS</span>
                        <img width="50px" src={cssPhoto} alt="cssPhoto" />
                    </p>
                    <p>
                        <span>Bootstrap</span>
                        <img width="50px" src={bootstrapPhoto} alt="bootstrapPhoto" />
                    </p>
                    <p>
                        <span>Tailwind</span>
                        <img width="50px" src={tailwindPhoto} alt="tailwindPhoto" />
                    </p>
                    <p>
                        <span>Javascript</span>
                        <img width="50px" src={javascriptPhoto} alt="javascriptPhoto" />
                    </p>
                    <p>
                        <span>React</span>
                        <img width="50px" src={reactPhoto} alt="reactPhoto" />
                    </p>
                </div>  
                </div>
            </div>
         </div>  
        </div>
    );
};

export default About;