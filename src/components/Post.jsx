import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Input fluid label='First name' />
          <Form.Input fluid label='Last name' />
          <Form.TextArea label='Description' placeholder='Tell us about your business' />
          <Form.Input fluid label='Location of business' />
          <Form.Input fluid label='Email' />
          <Form.Input fluid label='Phone number' />
          <Form.Select
            fluid
            label='Category'
            options={options}
          />
        </Form>
      </div>
    )
  }
}