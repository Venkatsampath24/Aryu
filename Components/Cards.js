import React from "react";
import greater from '../Pictures/Gsymbol.png';
import devops from '../Pictures/Devops.jpg';
import blockchain from '../Pictures/BlockChain.png';
import Cloud from '../Pictures/Cloud Service.jpeg';
import DataAnalytic from '../Pictures/DataAnalaltics.jpg';
import Design from '../Pictures/Designing Services.jpg';
import Devops from '../Pictures/Devops.jpg';
import Ecommerce from '../Pictures/Ecommerce-Website.png';
import Mobileapp from '../Pictures/Moible app Dev.png';
import QA from '../Pictures/QA.jpg';
import Robotic from '../Pictures/Robotic.png';
import WebDev from '../Pictures/Web Development.jpg';
import VRCR from '../Pictures/VRAR.jpeg';
import '../CSS/Cards.css'


function Cards() {
  return (
    <div className="cards">

    <div className="card-1">
        <img src={devops} alt="devops-img"/>
        <div className="details">
        <h1>Devops</h1>
        <span>Quickly gain devops Experience </span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>

    <div className="card-1">
        <img src={VRCR} alt="devops-img"/>
        <div className="details">
        <h1>VR & AR</h1>
        <span>Build Powerful Virtual Experience </span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>

    <div className="card-1">
        <img src={Robotic} alt="devops-img"/>
        <div className="details">
        <h1>Robotic Process Automation</h1>
        <span>Smart Automation Changes Business</span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>


    <div className="card-1">
        <img src={blockchain} alt="devops-img"/>
        <div className="details">
        <h1>Block Chain Development</h1>
        <span>Secure Transaction on Blockchain </span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>

    <div className="card-1">
        <img src={DataAnalytic} alt="devops-img"/>
        <div className="details">
        <h1>Data and Analytics</h1>
        <span>Planned,Informative,and Perceptive </span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>

    <div className="card-1">
        <img src={Cloud} alt="devops-img"/>
        <div className="details">
        <h1>Cloud Services</h1>
        <span> Simple,safe,and quick cloud transfer</span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>


    <div className="card-1">
        <img src={Mobileapp} alt="devops-img"/>
        <div className="details">
        <h1>Mobile Application</h1>
        <span>Increased Brand Engagement</span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>

    <div className="card-1">
        <img src={Ecommerce} alt="devops-img"/>
        <div className="details">
        <h1>E-Commerce</h1>
        <span>Grow Sales With Custom E-Commerce Ideas </span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>

    <div className="card-1">
        <img src={QA} alt="devops-img"/>
        <div className="details">
        <h1>QA and Testing</h1>
        <span>Increase Your Online Visibility</span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>

    <div className="card-1">
        <img src={WebDev} alt="devops-img"/>
        <div className="details">
        <h1>Web Application Development</h1>
        <span>Increase Your Online Visibility </span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>

    <div className="card-1">
        <img src={WebDev} alt="devops-img"/>
        <div className="details">
        <h1>Digital Marketing</h1>
        <span>Increase your Online Visibility</span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>

    <div className="card-1">
        <img src={Design} alt="devops-img"/>
        <div className="details">
        <h1>Designing Services</h1>
        <span>Increase Your Online Visibility </span>
        <img className='g-logo'src={greater} alt="greater"/>
        </div>
    </div>




      
        
    </div>
  );
}

export default Cards;
