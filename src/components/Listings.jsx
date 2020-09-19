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

  render() {
    return (
      <div>
          <SearchBar />
          <h1>listings</h1>
          <Card.Group>
          {
            this.state.Data.map((item, index) => (
              <Card
                as={ Link } to='/businesses/1'
                header={item.doc.businessName}
                meta={item.doc.type}
                description={item.doc.description}
                image={item.doc.image}
                group
              />
          ))
          }
          </Card.Group>
      </div>
    )
  }
}