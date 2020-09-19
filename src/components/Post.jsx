import React from 'react';
import { Label, Button, Header, Form, Container, Grid } from 'semantic-ui-react'

const options = [
  { key: 'ba', text: 'Babysitter', value: 'babysitter' },
  { key: 'cl', text: 'Cleaner', value: 'cleaner' },
  { key: 'ca', text: 'Carpenter', value: 'carpenter' },
  { key: 'do', text: 'Dog walker', value: 'dog walker' },
  { key: 'ex', text: 'Exterminator', value: 'exterminator' },
  { key: 'la', text: 'Lawn care', value: 'lawn care' },
  { key: 'ph', text: 'Photography', value: 'photography' },
  { key: 'pi', text: 'Piano lessons', value: 'piano lessons' },
  { key: 'si', text: 'Singing lessons', value: 'singing lessons' },
  { key: 'si', text: 'Singing lessons', value: 'singing lessons' },
  { key: 'vi', text: 'Video production', value: 'video production' },
  { key: 'ya', text: 'Yard work', value: 'yard work' },
]

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  fileInputRef = React.createRef();

  handleFileUpload = (file) => {

  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={7}>
            <Header as='h2'>Create your listing</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input label='First name' />
                <Form.Input label='Last name' />
              </Form.Group>
              <Form.Input label='Business Name' />
              <Form.TextArea label='Description' placeholder='Tell us about your business' />
              <Form.Group widths='equal'>
                <Form.Input label='Location of business' />
                <Form.Select
                
                  label='Type of business'
                  placeholder='Choose one'
                  options={options}
                />
              </Form.Group>
              <Form.Input label='Website' placeholder='https://www.website.com/' />
              <Form.Field>
                <label>Add a photo to your listing</label>
              </Form.Field>
              
              <Button
                style={{ marginBottom: "16px" }}
                content="Choose Image"
                labelPosition="left"
                icon="file"
                onClick={() => this.fileInputRef.current.click()}
              />
              <input
                ref={this.fileInputRef}
                type="file"
                hidden
                onChange={this.handleFileUpload}
              />
              <Form.Group widths='equal'>
                <Form.Input label='Email' />
                <Form.Input label='Phone number' />
              </Form.Group>
              <Form.Button primary content='Submit' />
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}