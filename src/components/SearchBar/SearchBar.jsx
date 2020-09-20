import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './SearchBar.css'

const options = [
  { key: 'artsandcrafts', text: 'Arts and Crafts', value: 'Arts & Crafts' }, // values need to exactly match the dropdown options in forms
  { key: 'babysitters', text: 'Babysitters', value: 'Babysitters' },
  { key: 'baked', text: 'Baked Goods', value: 'Baked Goods' },
  { key: 'beauty', text: 'Beauty', value: 'Beauty' },
  { key: 'cleaners', text: 'Cleaners', value: 'Cleaners' },
  { key: 'carpenters', text: 'Carpenters', value: 'Carpenters' },
  { key: 'dogwalker', text: 'Dog Walkers', value: 'Dogwalkers' },
  { key: 'exterminators', text: 'Exterminators', value: 'Exterminators' },
  { key: 'grocery', text: 'Grocery', value: 'Grocery' },
  { key: 'lawn care', text: 'Lawn Care', value: 'Lawn care' },
  { key: 'photography', text: 'Photography', value: 'Photography' },
  { key: 'piano', text: 'Piano Lessons', value: 'Piano Lessons' },
  { key: 'singing', text: 'Singing Lessons', value: 'Singing Lessons' },
  { key: 'outdoor', text: 'Sports and Outdoors', value: 'Sports & Outdoors' },
  { key: 'tech', text: 'Technology', value: 'Technology' },
  { key: 'video', text: 'Video Production', value: 'Video Production' },
  { key: 'yard', text: 'Yard Work', value: 'Yard Work' },
  { key: 'other', text: 'Other', value: 'Other' }

]

const cities = [
  { key: 'sac', text: 'Sacramento, CA', value: 'Sacramento, CA' },
  { key: 'sanjose', text: 'San Jose, CA', value: 'San Jose, CA' },
  { key: 'cambridge', text: 'Cambridge, MA', value: 'Cambridge, MA' },
  { key: 'stanford', text: 'Stanford, CA', value: 'Stanford, CA' }
]

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    console.log("default", this.props.categories)
  }

  handleCategoryChange = (event, {value}) => {
    // let categoryName = event.target.textContent;
    // console.log("categoryName",categoryName);
    this.props.updateCategories(value);
  }

  handleLocationChange = (event, {value}) => {
    // let categoryName = event.target.textContent;
    // console.log("categoryName",categoryName);
    this.props.updateLocations(value);
  }

  render() {
    return (
      <div className="input-container">
        <div style={{width: "300px"}}>
        <Dropdown placeholder='What are you looking for?' fluid multiple selection options={options}
          onChange={this.handleCategoryChange}
          defaultValue={this.props.categories} 
          search
        />
        </div>
        <div style={{width: "200px"}}>
        <Dropdown placeholder='City' fluid multiple selection options={cities}
          onChange={this.handleLocationChange}
          defaultValue={this.props.locations} 
          search
        />
        </div>
      </div>
    )
  }
}
