import React from 'react'
import LOGO from "../../assets/Images/Logo.png"
import HeroImg from "../../assets/Images/Hero-Calender.png"
import NetSales from "../../assets/Images/NetSales.png"
import UserCard from "../../assets/Images/UserCard.png"
import Appslogo from "../../assets/Images/Appslogo.png"
import VerticalImg from "../../assets/Images/VerticalIMG.png"
import "./landing.css"
import ButtonSections from '../../components/Buttons/ButtonsSection'
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { SiAirtable, SiAdobe, SiFramer } from "react-icons/si";
import { GiCheckMark } from "react-icons/gi";
import Footer from '../../components/Footer/Footer'

const Landing = () => {

  const pricingPlans = [
    {
      title: "STARTER",
      description:
        "Best for local businesses needing to improve their online reputation.",
      price: "$199",
      period: "/monthly",
      features: [
        "Unlimited Users",
        "GMB Messaging",
        "Reputation Management",
        "GMB Call Tracking",
        "24/7 Award Winning Support",
      ],
      buttonText: "SIGN UP FOR STARTER",
    },
    {
      title: "GROW",
      description:
        "Best for all businesses that want to take full control of their marketing automation and track their leads, click to close.",
      price: "$399",
      period: "/monthly",
      features: [
        "Pipeline Management",
        "Marketing Automation Campaigns",
        "Live Call Transfer",
        "GMB Messaging",
        "Embed-able Form Builder",
        "Reputation Management",
        "24/7 Award Winning Support",
      ],
      buttonText: "SIGN UP FOR STARTER",
    },
  ];


  return (
    <div className='landing-container' >
      <div className='landing-Header'>
        <div className='Left-Header'>
          <img className='landing-header-logo' src={LOGO} alt="AppLOGO" />
          <h1 className='Landing-AppName'>Hubly</h1>
        </div>

        <ButtonSections/>

      </div>
      
      <div className='HeroSection-wrapper'>

        <div className='Hero-wrapper-left'>

          <h1 className='hero-heading'>Grow Your Business Faster <br /> with Hubly CRM.</h1>

          <p className='hero-subheading'>Manage leads, automate workflows, and close deals effortlessly—all in one powerful platform.</p>

          <div className='hero-buttons-group'>
            <div className='GetStarted flex-center'>

              Get Started <FaArrowRight />


            </div>

            <div className='watch-Videos flex-center'>

            <FaPlayCircle size={40} /> <span>Watch Video</span> 

            </div>


          </div>

        </div>

        <div className='Hero-wrapper-right'>

        <div className='Hero-img-div'>
          <img className='Hero-main-img' src={HeroImg} alt="HeroSection" />

          
          <img className='Uercard-img' src={UserCard} alt="user card" />
          <img className='NetSales-img' src={NetSales} alt="sales" />

          

        </div>
          
        </div>

      </div>


      <section className='brands-wrapper'>

          <div className="companyName flex-center">
          <SiAdobe /> Adobe
          </div>

          <div className="companyName flex-center">
            elastic
          </div>

          <div className="companyName flex-center">
            opendoor
          </div>

          <div className="companyName flex-center">
          <SiAirtable/> Airtable
          </div>

          <div className="companyName flex-center">
          elastic
          </div>

          <div className="companyName flex-center">
          <SiFramer /> Framer
          </div>

      </section>

      <section className='help-Solution'>

        <div className='upperheadtext'>

        <h2 className='helps-heading'>
        At its core, Hubly is a robust CRM solution.
        </h2>

        <p className='helps-subheading'>Hubly helps businesses streamline customer interactions, track leads, and automate tasks—saving you time and maximizing revenue. Whether you’re a startup or an enterprise, Hubly adapts to your needs, giving you the tools to scale efficiently.</p>
        </div>


        <div className='Help-solution-banner'>
          <div className='sol-banner-left'>

            <h3 className='sol-banner-head'>
            MULTIPLE PLATFORMS TOGETHER!
            </h3>

            <p className='sol-banner-subhead'>
            Email communication is a breeze with our fully integrated, drag & drop email builder.
            </p>

            <h3 className='sol-banner-head'>
            CLOSE
            </h3>

            <p className='sol-banner-subhead'>
            Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!
            </p>

            <h3 className='sol-banner-head'>
            NURTURE
            </h3>

            <p className='sol-banner-subhead'>
            Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!
            </p>

          </div>

          <div className='sol-banner-right'>

            <img className='appsclass' src={Appslogo} alt="" />
            
            <img src={VerticalImg} alt="" />

          </div>

        </div>
      </section>


      <section className='plans-wrapper'>
        <div className='upper-plans-text upperheadtext'>
          <h2 className='plans-main-heading'>
          We have plans for everyone!
          </h2>

          <p className='plans-main-subheading'>
          We started with a strong foundation, then simply built all of the sales and marketing tools ALL businesses need under one platform.
          </p>

        </div>

        <div className='plans-container'>
        {pricingPlans.map((plan, index) => (
        <div className="pricing-card" key={index}>
          <h2 className="plan-title">{plan.title}</h2>
          <p className="plan-description">{plan.description}</p>
          <div className="plan-price">
            {plan.price}
            <span className="plan-period">{plan.period}</span>
          </div>
          <ul className="feature-list">
            {plan.features.map((feature, i) => (
              <li key={i} className="feature-item">
                <span><GiCheckMark /></span>
                {feature}
              </li>
            ))}
          </ul>
          <div className='plans-div-btn'>

            <button className="signup-button">{plan.buttonText}</button>
          </div>
        </div>
      ))}

        </div>
      </section>

    
      <Footer/>

    </div>
  )
}

export default Landing