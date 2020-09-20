import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'artsandcrafts', text: 'Arts and Crafts', value: 'Arts & Crafts' },
  { key: 'babysitters', text: 'Babysitters', value: 'Babysitters' },
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
  { key: 'sac', text: 'Sacramento, CA', value: 'sac' },
  { key: 'sanjose', text: 'San Jose, CA', value: 'sanjose' },
  { key: 'cambridge', text: 'Cambridge, MA', value: 'cambridge' },
  { key: 'stanford', text: 'Stanford, CA', value: 'stanford' }
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
    console.log("categories in searchbar", value);
    // let categoryName = event.target.textContent;
    // console.log("categoryName",categoryName);
    this.props.updateCategories(value);
  }

  render() {
    return (
      <div>
        <Dropdown placeholder='Search for local businesses and self-employed' fluid multiple selection options={options}
          onChange={this.handleCategoryChange}
          defaultValue={this.props.categories} 
          search
        />
        <Dropdown placeholder='Select a City' fluid multiple selection options={cities} 
          search
        />
      </div>
    )
  }
}
