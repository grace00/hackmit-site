import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'artsandcrafts', text: 'Arts and Crafts', value: 'artsandcrafts' },
  { key: 'babysitters', text: 'Babysitters', value: 'Babysitters' },
  { key: 'beauty', text: 'Beauty', value: 'beauty' },
  { key: 'cleaners', text: 'Cleaners', value: 'cleaners' },
  { key: 'carpenters', text: 'Carpenters', value: 'carpenters' },
  { key: 'dogwalker', text: 'Dog Walkers', value: 'dogwalkers' },
  { key: 'exterminators', text: 'Exterminators', value: 'exterminators' },
  { key: 'grocery', text: 'Grocery', value: 'grocery' },
  { key: 'lawn care', text: 'Lawn Care', value: 'lawn care' },
  { key: 'photography', text: 'Photography', value: 'photography' },
  { key: 'piano', text: 'Piano Lessons', value: 'piano' },
  { key: 'singing', text: 'Singing Lessons', value: 'singing' },
  { key: 'outdoor', text: 'Sports and Outdoor', value: 'outdoor' },
  { key: 'tech', text: 'Technology', value: 'tech' },
  { key: 'video', text: 'Video Production', value: 'video' },
  { key: 'yard', text: 'Yard Work', value: 'yard' },
  { key: 'other', text: 'Other', value: 'other' }

]

const cities = [
  { key: 'sac', text: 'Sacramento, CA', value: 'sac' },
  { key: 'sanjose', text: 'San Jose, CA', value: 'sanjose' },
  { key: 'cambridge', text: 'Cambridge, MA', value: 'cambridge'},
  { key: 'stanford', text: 'Stanford, CA', value: 'stanford' }

]

const DropdownExampleMultipleSelection = () => (
<div>
  <Dropdown placeholder='Search for local businesses and self-employed' fluid multiple selection options={options} />
  <Dropdown placeholder='Select a City' fluid multiple selection options={cities} />
  </div>
)

export default DropdownExampleMultipleSelection