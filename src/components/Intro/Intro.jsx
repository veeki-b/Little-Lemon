import React from 'react';
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import './Intro.css';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import Thumbup from '../../img/thumbup.png';
import Glassesimoji from '../../img/glassesimoji.png';


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span> Hey, I Am </span>
                    <span>Andrew Rhomas</span>
                    <span>Frontend Development with height Experience
                        in web Design and development, producting the quality work
                    </span>
                </div>
                <button className="button i-button"> Hire Me</button>
                <div className="i-icons">
                    <img src={linkedin} alt="linkedin" />
                    <img src={github} alt="github" />
                    <img src={instagram} alt="instagram" />
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt='vector' />
                <img src={Vector2} alt='vector' />
                <img src={boy} alt='boy' />
                <img src={Glassesimoji} alt='glassesimoji' />
                <div style={{ top: '4%', left: '68%' }}>
                    <Floatingdiv image={Crown} text1='Web' text2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '-7rem' }}>
                    <Floatingdiv image={Thumbup} text1='Best Design' text2='Award' />
                </div>

                <div className='blur' style={{ background: "rgb(238 210 255)",zIndex:'-9' }}></div>
                <div className='blur' style={{
                    background: '#c1f5ff', top: '17rem', width: '21rem',
                    height: '11rem', left: '-9rem',zIndex:'-9'
                }} ></div>
            </div>

        </div>
    )
}
export default Intro;