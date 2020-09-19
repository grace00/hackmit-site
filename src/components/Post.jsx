import React from 'react';
import Form from "@rjsf/semantic-ui";
import { Header, Grid, Container } from 'semantic-ui-react';

const options = [
  'Arts & Crafts',
  'Babysitter',
  'Beauty',
  'Cleaner',
  'Carpenter',
  'Dog walker',
  'Exterminator',
  'Grocery',
  'Lawn care',
  'Photography',
  'Piano lessons',
  'Singing lessons',
  'Sports & Outdoor',
  'Technology',
  'Video production',
  'Yard work'
]

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      error: false,
      data: null
    };
  }

  handleSubmit = (event) => {
    let data = event.formData;
    fetch('http://localhost:5000/formSubmission', {
      "method": "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      "body": JSON.stringify(data)
    }).then((response) => {
      if (response.status !== 200) {
        this.setState({ error: true });
        console.log("failed call to backend", response.status)
      } else {
        this.setState({ complete: true });
        console.log("successful call to backend", response.status)
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
      /*"required": [
        "firstName",
        "lastName",
        "businessName",
        "type",
        "description",
        "location",
        "email",
        "image"
      ],*/
      "properties": {
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
        "socialMedia": {
          "type": "string",
          "title": "Link to social media or website",
        },
        "phoneNumber": {
          "type": "string",
          "title": "Phone number",
        },
        "image": {
          "title": "Add a preview photo for your listing", /* why aren't the titles showing up?? */
          "type": "object",
          "properties": {
            "file": {
              "type": "string",
              "format": "data-url",
            },
          }
        },
        "products": {
          "type": "array",
          "title": "Services or products you offer",
          "items": {
            "type": "object",
            "properties": {
              "itemName": {
                "type": "string",
                "title": "Title",
              },
              "itemDescription": {
                "type": "string",
                "title": "Description",
              },
              "itemCost": {
                "type": "string",
                "title": "Cost",
              },
              "itemImage": {
                "type": "string",
                "title": "Photo",
                "format": "data-url",
              }
            }
          }
        }
      }
    };
    let uiSchema = {
      "description": {
        "ui:widget": "textarea"
      },
      "type": {
        "ui:placeholder": "Choose business type" /* not showing up for some reason */
      },
    }

    return (
      <Container>
        <Grid>
          {this.state.data}
          <Grid.Column width={7}>
            <Header as='h2'>Create your listing</Header>
            <Form schema={schema} uiSchema={uiSchema} onSubmit={this.handleSubmit} />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
