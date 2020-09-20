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
        this.updateCategories(this.props.categories);
      })
  }

  updateCategories = (categories) => {
    console.log("listings update categories called", categories)
    // save list of current categories
    this.props.updateCategories(categories);
    var filteredData = [];
    if (categories.length === 0) {
      filteredData = this.state.data;
    } else {
      // filter data based on category changes
      // go through items and add those that fit the user's selection
      filteredData = this.state.data.filter(function (item) {
        var categoryList = categories;
        console.log("item in? ", item.doc.type, categoryList.includes(item.doc.type))
        return categoryList.includes(item.doc.type);
      })
    }
    this.setState({
      filteredData
    })
  }

  updateItems = (values) => {
    console.log("updateItems called", values)
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
        <SearchBar updateCategories={this.updateCategories} categories={this.props.categories} />
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