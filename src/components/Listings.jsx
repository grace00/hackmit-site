import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Icon, Container } from 'semantic-ui-react'
import SearchBar from '../components/SearchBar/SearchBar';
import axios from 'axios';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        /*{
          "businessName": "A",
          "type": "Babysitter",
          "description": "Blah blah blah",
        },
        {
          "businessName": "B",
          "type": "Photography",
          "description": "Blah blah blah",
        },
        {
          "businessName": "C",
          "type": "Photography",
          "description": "Blah blah blah",
        }*/
      ],
      filteredData: []
    };
  }

  /*------ run "node server.js" to get data from server! ------*/
  componentDidMount() {
    axios.get('/businessData')
      .then(result => {
        console.log("result", result.data)
        this.setState({
          data: result.data
        })
        this.updateItems(this.props.categories, this.props.locations);
      })
  }

  updateCategories = (categories) => {
    this.props.updateCategories(categories);   // save list of current categories
    this.updateItems(categories, this.props.locations)
  }

  updateLocations = (locations) => {
    this.props.updateLocations(locations);
    this.updateItems(this.props.categories, locations)
  }

  // filter listings
  updateItems = (categories, locations) => {
    console.log("update items", categories, locations)
    var filteredData = [];
    if (categories.length === 0 && locations.length === 0) { // no filtering
      filteredData = this.state.data;
    } else if (categories.length >= 0 && locations.length === 0) { // category, no location
      filteredData = this.state.data.filter(function (item) {
        return categories.includes(item.doc.type);
      })
    } else if (categories.length === 0 && locations.length >= 0) { // location, no category
      filteredData = this.state.data.filter(function (item) {
        return locations.includes(item.doc.location);
      })
    } else {
      filteredData = this.state.data.filter(function (item) { // category and location -> listing must be in some combinatin of selected cat and loc
        return locations.includes(item.doc.location) && categories.includes(item.doc.type);
      })
    }
    this.setState({
      filteredData
    })
  }

  colorSwitch = (type) => {
    switch (type) {
      case ('Arts & Crafts'):
        return "red"
      case ('Babysitter'):
        return "blue"
      case ('Beauty'):
        return "pink"
      case ('Cleaner'):
        return "green"
      case ('Carpenter'):
        return "brown"
      case ('Dog walker'):
        return "olive"
      case ('Exterminator'):
        return "violet"
      case ('Grocery'):
        return "teal"
      case ('Lawn care'):
        return "orange"
      case ('Photography'):
        return "black"
      case ('Piano lessons'):
        return "yellow"
      case ('Singing lessons'):
        return "yellow"
      case ('Sports & Outdoor'):
        return "teal"
      case ('Technology'):
        return "blue"
      case ('Video production'):
        return "black"
      case ('Yard work'):
        return "yellow"
      default:
        return "black"
    }
  }

  render() {
    return (
      <Container>
        <SearchBar updateCategories={this.updateCategories} updateLocations={this.updateLocations} locations={this.props.locations} categories={this.props.categories} />
        <h1>Listings</h1>
        <Card.Group>
          {
            this.state.filteredData.map((item, index) => (
              <Card
                as={Link} to={"/businesses/" + item.doc._id}
                color={this.colorSwitch(item.doc.type)}
                group="true">
                <Image src={item.doc.image.file}></Image>
                <Card.Content
                  header={item.doc.businessName}
                  meta={item.doc.type}
                  description={item.doc.description}>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='star' />
                    {Array(item.doc.reviews).length}  Reviews
                    </a>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
      </Container>
    )
  }
}