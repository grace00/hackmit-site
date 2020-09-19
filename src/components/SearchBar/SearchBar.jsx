import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default function SearchBar() {
  return (
  <div className="search-bar">
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

    </div>
     )
}