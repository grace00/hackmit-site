import React from 'react';
import { Link } from 'react-router-dom';
import {Card, Image, Icon} from 'semantic-ui-react'
import SearchBar from '../components/SearchBar/SearchBar';
import axios from 'axios';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [        
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
      ]
    };
  }

  /*------ run "node server.js" to get data from server! ------*/
  componentDidMount() {
    axios.get('/businessData')
    .then(result => {
      console.log("result", result.data)
      this.setState({
        Data: result.data
      })
    })
  }

  colorSwitch = (type) => {
    switch(type) {
      case('Arts & Crafts'):
        return "red"
      case('Babysitter'):
        return "blue"
      case('Beauty'):
        return "pink"
      case('Cleaner'):
        return "green"
      case('Carpenter'):
        return "brown"
      case('Dog walker'):
        return "olive"
      case('Exterminator'):
        return "violet"
      case('Grocery'):
        return "teal"
      case('Lawn care'):
        return "orange"
      case('Photography'):
        return "black"
      case('Piano lessons'):
        return "yellow"
      case('Singing lessons'):
        return "yellow"
      case('Sports & Outdoor'):
        return "teal"
      case('Technology'):
        return "blue"
      case('Video production'):
        return "black"
      case('Yard work'):
        return "yellow"
      default:
        return "black"
    }
  }

  render() {
    return (
      <div>
          <SearchBar />
          <h1>Listings</h1>
          <Card.Group>
          {
            this.state.Data.map((item, index) => (
              <Card
                as={ Link } to={"/businesses/" + item.doc._id}
                color={this.colorSwitch(item.doc.type)}
                group="true">
                <Card.Content
                  header={item.doc.businessName}
                  meta={item.doc.type}
                  description={item.doc.description}>
                </Card.Content>
                <Card.Content extra>
                    <a>
                      <Icon name='star' />
                      22 Reviews
                    </a>
                </Card.Content>
              </Card>
          ))
          }
          </Card.Group>
      </div>
    )
  }
}