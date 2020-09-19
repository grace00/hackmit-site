import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import Project from './project';

class About extends Component {
    state = {  }
    render() {
        return (<div>

       <h1 className='heading-background'>BEEYOND</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>


        <div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>{data.abouttext}</p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}


        </div>

        <div className="ui category search">
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search business category..." />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
        </div>
        <div className="ui animated button" tabIndex="0">
  <div className="visible content">View All Listings</div>
  <div className="hidden content">
    <i className="right arrow icon"></i>
  </div>
</div>
<div className="ui vertical animated button" tabIndex="0">
  <div className="hidden content">Donate</div>
  <div className="visible content">
    <i className="shop icon"></i>
  </div>
</div>
<div className="ui animated fade button" tabIndex="0">
  <div className="visible content">Advertise your business/service/product</div>
  <div className="hidden content">
    Free Advertising
  </div>
</div>



        <h1 className='heading'>
        <Fade bottom cascade>Explore Business Departments</Fade></h1>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
        </div>);
    }
}

export default About;