import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './About.css'
import data from '../../yourdata';
import Project from '../project';
import SearchDropdown from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { Header, Grid, Container } from 'semantic-ui-react';

class About extends Component {
    state = {}

    updateCategories = (categories) => {
        this.props.updateCategories(categories);
    }
    updateLocations = (locations) => {
        this.props.updateLocations(locations);
    }
    render() {
        return (<div>
            {

             <h1 className='heading-background'>BEEYOND</h1> }
            <div className='splash-section'>
            <p className='bot'>
                <a target="_blank" href="https://covid-assistant-simple-mythili.mybluemix.net">Questions? Chat with our bot!</a>
            </p>
                <Container className="splash-content-container">
                    <Grid>
                        <Grid.Column width={9}>
                            <Fade bottom>
                                <p className="main-header">
                                    {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
                                    {data.headerTagline[2]}
                                </p>
                                <p className="sub-main-header">
                                    Find small businesses and local professionals who can help you with anything.
                        </p>
                            </Fade>
                            <SearchDropdown updateCategories={this.updateCategories} updateLocations={this.updateLocations} locations={this.props.locations} categories={this.props.categories}/>
                            <Link to={'/businesses'}>
                            <div className="ui animated button" tabIndex="0">
                                <div className="visible content">Search</div>
                                <div className="hidden content">
                                    <i className="right arrow icon"></i>
                                </div>
                            </div>
                            </Link>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">Donate</div>
                                <div className="visible content">
                                    <i className="shop icon"></i>
                                </div>
                            </div>
                            <Link to="/businesses"><div className="ui animated fade button" tabIndex="0">
                                <div className="visible content">View All Listings</div>
                                <div className="hidden content">
                                    Search All
</div>

                            </div>
                            </Link>
                        </Grid.Column>
                        <Grid.Column width={3}>

                        </Grid.Column>
                    </Grid>
                </Container>
            </div>

            <div className='work'>
            <h1 className='heading'>
                <Fade bottom cascade>Explore Business Departments</Fade></h1>
            <div className='work-content'>
                {data.projects.map((project) => (
                    <Project key={project.id}
                        title={project.title}
                        service={project.service}
                        imageSrc={project.imageSrc}
                        url={project.url}
                    ></Project>
                ))}
            </div>
        </div>

            <div className='about'>
                <div className='about-content'>
                    <h1><Fade bottom cascade>About.</Fade></h1>
                    <Fade bottom>
                        <p>{data.abouttext}</p>
                        <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                    </Fade>
                </div>
                {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}


            </div>



        </div>);
    }
}

export default About;