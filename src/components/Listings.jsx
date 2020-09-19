import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'semantic-ui-react'
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
        break;
      case('Babysitter'):
        return "blue"
        break;
      case('Beauty'):
        return "pink"
        break;
      case('Cleaner'):
        return "green"
        break;
      case('Carpenter'):
        return "brown"
        break;
      case('Dog walker'):
        return "olive"
        break;
      case('Exterminator'):
        return "violet"
        break;
      case('Grocery'):
        return "teal"
        break;
      case('Lawn care'):
        return "orange"
        break;
      case('Photography'):
        return "black"
        break;
      case('Piano lessons'):
        return "yellow"
        break;
      case('Singing lessons'):
        return "yellow"
        break;
      case('Sports & Outdoor'):
        return "teal"
        break;
      case('Technology'):
        return "orange"
        break;
      case('Video production'):
        return "black"
        break;
      case('Yard work'):
        return "yellow"
        break;
    }
  }

  render() {
    return (
      <div>
          <SearchBar />
          <h1>listings</h1>
          <Card.Group>
          {
            this.state.Data.map((item, index) => (
              <Card
                as={ Link } to={"/businesses/" + item.doc._id}
                header={item.doc.businessName}
                meta={item.doc.type}
                description={item.doc.description}
                color={this.colorSwitch(item.doc.type)}
                group
              />
          ))
          }
          </Card.Group>
      </div>
    )
  }
}