import React from 'react';
import Form from "@rjsf/semantic-ui";
import { Header, Grid, Container } from 'semantic-ui-react'

// const options = [
//   { key: 'ba', text: 'Babysitter', value: 'babysitter' },
//   { key: 'cl', text: 'Cleaner', value: 'cleaner' },
//   { key: 'ca', text: 'Carpenter', value: 'carpenter' },
//   { key: 'do', text: 'Dog walker', value: 'dog walker' },
//   { key: 'ex', text: 'Exterminator', value: 'exterminator' },
//   { key: 'la', text: 'Lawn care', value: 'lawn care' },
//   { key: 'ph', text: 'Photography', value: 'photography' },
//   { key: 'pi', text: 'Piano lessons', value: 'piano lessons' },
//   { key: 'si', text: 'Singing lessons', value: 'singing lessons' },
//   { key: 'si', text: 'Singing lessons', value: 'singing lessons' },
//   { key: 'vi', text: 'Video production', value: 'video production' },
//   { key: 'ya', text: 'Yard work', value: 'yard work' },
// ]
const options = [
  'Babysitter',
  'Cleaner',
  'Carpenter',
  'Dog walker',
  'Exterminator',
  'Lawn care',
  'Photography',
  'Piano lessons',
  'Singing lessons',
  'Video production',
  'Yard work'
]

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      error: false,
    };
  }

  handleSubmit = (event) => {
    let data = event.formData;
    fetch('', {
      "method": "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify(data)
    }).then((response) => {
      if (!response.ok) {
        this.setState({ error: true });
      } else {
        this.setState({ complete: true });
      }
    })
  }

  render() {
    if (this.state.complete) {
      return (
        <Container>
          <Header as='h2'>Thank you! We received your listing.</Header>
        </Container>
      )
    } else if (this.state.error) {
      return (
        <Container>
          <Header as='h2'>Sorry, there was an error.</Header>
        </Container>
      )
    }
    let schema = {
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string",
          "title": "First name",
        },
        "lastName": {
          "type": "string",
          "title": "Last name",
        },
        "businessName": {
          "type": "string",
          "title": "Business name",
        },
        "type": {
          "type": "string",
          "title": "Type of business",
          "enum": options,
        },
        "description": {
          "type": "string",
          "title": "Description",
        },
        "location": {
          "type": "string",
          "title": "Location",
        },
        "website": {
          "type": "string",
          "title": "Website",
        },
        "email": {
          "type": "string",
          "title": "Email",
        },
        "phoneNumber": {
          "type": "string",
          "title": "Phone number",
        },
        "image": {
          "title": "Add a photo to your listing", /* why aren't the titles showing up?? */
          "type": "string",
          "format": "data-url",
        },
      }
    };
    let uiSchema = {
      "description": {
        "ui:widget": "textarea"
      },
      "type": {
        "ui:placeholder": "Choose business type"
      },
    }

    return (
      <Container>
        <Grid>
          <Grid.Column width={6}>
            <Header as='h2'>Create your listing</Header>
            <Form schema={schema} uiSchema={uiSchema} onSubmit={this.handleSubmit} />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
