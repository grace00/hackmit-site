import React from 'react';
export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        main page
        <div className="ui category search">
            <div className="ui-icon-input">
                <input className="prompt" type="text" placeholder="Search business category..." />
                <i className="search icon"></i>
            </div>
            <div className="results"></div>
        </div>
        <div className="ui animated button" tabIndex="0">
  <div className="visible content">Listings</div>
  <div className="hidden content">
    <i className="right arrow icon"></i>
  </div>
</div>
<div className="ui vertical animated button" tabIndex="0">
  <div className="hidden content">Shop</div>
  <div className="visible content">
    <i className="shop icon"></i>
  </div>
</div>
<div className="ui animated fade button" tabIndex="0">
  <div className="visible content">Sign-up for a Pro account</div>
  <div className="hidden content">
    $12.99 a month
  </div>
</div>
      </div>
    )
  }
}
