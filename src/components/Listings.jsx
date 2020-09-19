import React from 'react';
import { Link } from 'react-router-dom';

export default class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        listings
        <div>
          <Link to={"/businesses/1"}>Sample link to a business page (not dynamic currently)</Link>
        </div>
      </div>
    )
  }
}