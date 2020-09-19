import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'semantic-ui-react'
import SearchBar from '../components/SearchBar/SearchBar';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [        
        {
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
        }
      ]
    };
  }

  render() {
    return (
      <div>
           <SearchBar />
          <h1>listings</h1>
          {
            this.state.Data.map((item, index) => (
              <Card
                as={ Link } to='/businesses/1'
                header={item.businessName}
                meta={item.type}
                description={item.description}
              />
          ))
          }
      </div>
    )
  }
}