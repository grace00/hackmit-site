import React from 'react';
import { List, Image , Grid, Item, Header, Container} from 'semantic-ui-react';
import Form from "@rjsf/semantic-ui";

export default class BusinessInfo extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   businessInfo: props.BusinessInfo
    // };
    this.state = {
      businessName: "Moo Moo Milk",
      description: "Fresh Organic Milk grown from a local Indiana farm! No GMO's with a delicious taste.",
      contactInfo: {"First Name": "Bob",
                    "Last Name": "Builder",
                    "Email": "moo@milk.com",
                    "Website": "MooMooMilk.com",
                    "Facebook": "moo123",
                    "Location": "Indiana Farms"},
      products: [{"Name": "Organic Milk Gallon",
                  "Description": "Fresh Organic Milk with no GMOs",
                  "Price": "$4.99", 
                  "Ratings": 4.5,
                  "Photo": []},
                  {"Name": "Organic Milk Gallon",
                  "Description": "Fresh Organic Milk with no GMOs",
                  "Price": "$4.99", 
                  "Ratings": 4.5,
                  "Photo": []},
                  {"Name": "Organic Milk Gallon",
                  "Description": "Fresh Organic Milk with no GMOs",
                  "Price": "$4.99", 
                  "Ratings": 4.5,
                  "Photo": []}],
      reviews: [{"UserID": 382048, 
                 "UserName": "Jane Moo",
                 "Description": "It was amazing! I could feel myself getting stronger wow!", 
                 "Time": Date("i'm too tired for this rn"),
                 "Rating": 5, 
                 "Photo": null},
                 {"UserID": 212342, 
                 "UserName": "John Moo",
                 "Description": "It tastes like over priced milk...", 
                 "Time": Date("lol"),
                 "Rating": 1, 
                 "Photos": []}],
    }
  }


  renderMainInfo() {
      const mailTo = "mailto:"+this.state.contactInfo.Email;
    return <div>
            <h2 class="ui center aligned icon header">
              <i class="circular users icon"></i>
              {this.state.businessName}
            </h2>
            <p>{this.state.description}</p>
            <div class="ui list">
              <div class="item">
                <i class="users icon"></i>
                <div class="content">
                  {this.state.businessName}
                </div>
              </div>
              <div class="item">
                <i class="marker icon"></i>
                <div class="content">
                  {this.state.contactInfo.Location}
                </div>
              </div>
              <div class="item">
                <i class="mail icon"></i>
                <div class="content">
                  <a href="mailto:jack@semantic-ui.com">{this.state.contactInfo.Email}</a>
                </div>
              </div>
              <div class="item">
                <i class="linkify icon"></i>
                <div class="content">
                  {/* <a href="http://www.semantic-ui.com">{this.state.contactInfo.Website}</a> */}
                  <a href="http://www.google.com/"> {this.state.contactInfo.Website}</a>
                </div>
              </div>
            </div>
          </div>
  }

  renderProduct(product) {
    return <Grid.Column>
            <List.Item>
              <div style={{alignSelf: "center"}}>
                <img src="https://react.semantic-ui.com/images/wireframe/square-image.png" class="ui small rounded image"/>
              </div>
              <List.Content>
                <List.Header as='a'>{product.Name}</List.Header>
                <List.Description>
                  {product.Description}
                </List.Description>
                <List.Description>
                  {/* <Ratings rating={product.Ratings}/> */}
                  {product.Price}
                </List.Description>
                
              </List.Content>
            </List.Item>
          </Grid.Column>
  }

  renderProducts() {
    const products = this.state.products.map ((product) =>  
      this.renderProduct(product)
    )
    return <div>
              <h4>Products</h4>
              <Grid columns={3} divided>{products}</Grid>
            </div>
  }

  renderReview(review){
    return <List.Item>
              <div style={{alignSelf: "center"}}>
                <img avatar src="https://react.semantic-ui.com/images/wireframe/square-image.png" class="ui small rounded image"/>
              </div>
              <List.Content>
                <List.Header as='a'>{review.UserName}</List.Header>
                <List.Description>
                  {review.Description}
                </List.Description>
                <List.Description>
                  {/* <Ratings rating={product.Ratings}/> */}
                  {review.Time}
                </List.Description>
                
              </List.Content>
            </List.Item>
  }

  renderReviews(){
    const reviews = this.state.reviews.map ((review) =>
      this.renderReview(review)
    )
    return <div>
      <h4>Reviews</h4>
      <List>{reviews}</List>
    </div>
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

  renderReviewForm(){
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
        "description": {
          "type": "string",
          "title": "Description",
        },
        "email": {
          "type": "string",
          "title": "Email",
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
      }
    }

    return (
      <Container>
        <Grid>
          <Grid.Column width={6}>
            <Header as='h2'>Write a Review</Header>
            <Form schema={schema} uiSchema={uiSchema} onSubmit={this.handleSubmit} />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }

  render() {
    return (
      <div>
        {this.renderMainInfo()}
        {this.renderProducts()}
        {this.renderReviews()}
        {this.renderReviewForm()}
      </div>
    )
  }
}

class Product extends React.Component {

}

class Review extends React.Component {

}

class ReviewForm extends React.Component {

}