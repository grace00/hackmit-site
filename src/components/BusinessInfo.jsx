import React from 'react';
import { List, Image , Grid, Item, Header, Container, Icon, Segment} from 'semantic-ui-react';
import Form from "@rjsf/semantic-ui";
import Fade from 'react-reveal/Fade';
import Project from './project';
import axios from 'axios';


export default class BusinessInfo extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   businessInfo: props.BusinessInfo
    // };
    this.state = {
      business: [],
      reviews: [{"UserID": 382048, 
                 "UserName": "Jane Moo",
                 "Description": "It was amazing! I could feel myself getting stronger wow!", 
                 "Time": new Date(),
                 "Rating": 5, 
                 "Photo": null},
                 {"UserID": 212342, 
                 "UserName": "John Moo",
                 "Description": "It tastes like over priced milk...", 
                 "Time": new Date(),
                 "Rating": 1, 
                 "Photos": []}],
    }
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    axios.get('http://localhost:5000/businessData/' + id)
    .then(result => {
      console.log("result of getting business info", result.data)
      this.setState({
        business: result.data
      })
    })
  }


  renderMainInfo() {
    let { business } = this.state;
    const mailTo = "mailto:"+ business.email;
    return <div>
            <h1 class="ui center aligned icon header">
              <i class="circular users icon"></i>
              {business.businessName}
            </h1>
            <p>{business.description}</p>
            <div class="ui list">
              <div class="item">
                <i class="users icon"></i>
                <div class="content">
                  {business.businessName}
                </div>
              </div>
              <div class="item">
                <i class="marker icon"></i>
                <div class="content">
                  {business.location}
                </div>
              </div>
              <div class="item">
                <i class="mail icon"></i>
                <div class="content">
                  <a href="mailto:jack@semantic-ui.com">{business.email}</a>
                </div>
              </div>
              <div class="item">
                <i class="linkify icon"></i>
                <div class="content">
                  {/* <a href="http://www.semantic-ui.com">{this.state.contactInfo.Website}</a> */}
                  <a href="http://www.google.com/"> {business.socialMedia}</a>
                </div>
              </div>
            </div>
          </div>
  }

  renderProduct(product) {
    // return <Grid.Column>
    //         <List.Item>
    //           <div style={{alignSelf: "center"}}>
    //             <img src="https://react.semantic-ui.com/images/wireframe/square-image.png" class="ui small rounded image"/>
    //           </div>
    //           <List.Content>
    //             <List.Header as='a'>{product.Name}</List.Header>
    //             <List.Description>
    //               {product.Description}
    //             </List.Description>
    //             <List.Description>
    //               {/* <Ratings rating={product.Ratings}/> */}
    //               {product.Price}
    //             </List.Description>
                
    //           </List.Content>
    //         </List.Item>
    //       </Grid.Column>
    return <Grid.Column>
      <Fade bottom>
          <div>
          {/* <a href={product.url}> */}
          {product.itemImage && <img src={product.itemImage} alt={product.itemName} style={{width:250, height:300}}></img>}
          {/* </a> */}
          <h3>{product.itemName}</h3>
          <p>{product.itemDescription}</p>
          <p>{product.itemCost}</p>
          </div>
    </Fade>
  </Grid.Column>
  }

  renderProducts() {
    // const products = this.state.products.map ((product) =>  
    //   this.renderProduct(product)
    // )

    let { business } = this.state;
    return <div>
      <h1>
        <Fade bottom cascade>Products/Services</Fade>
      </h1>
      <Grid columns={3} divided>
        {business.products && business.products.map((product)=>(
            this.renderProduct(product)
        ))}
      </Grid>
    </div>

    // return <div>
    //           <h4>Products</h4>
    //           <Grid columns={3} divided>{products}</Grid>
    //         </div>
  }

  renderReview(review){
    console.log(review.Time.toDateString());
    return <Segment>
      <Fade bottom>
        <div style={{alignSelf: "center"}}>
          <i class="big user outline icon"></i>
          {/* <img src="https://react.semantic-ui.com/images/wireframe/square-image.png" class="ui small rounded image"/> */}
        </div>
        <List.Content>
          <List.Header as='a'>{review.UserName}</List.Header>
          <List.Description>
            {review.Description}
          </List.Description>
          <List.Description>
            {/* <Ratings rating={product.Ratings}/> */}
            {review.Time.toDateString()}
          </List.Description>
        </List.Content>
      </Fade>
    </Segment>
    
  }

  renderReviews(){
    // const reviews = this.state.reviews.map ((review) =>
    //   this.renderReview(review)
    // )
    
    return <div>
      <h1><Fade bottom cascade>Reviews</Fade></h1>
      {this.state.reviews.map((review)=>(
            this.renderReview(review)
        ))}
    </div>

    // return <div>
    //   <h1>Reviews</h1>
    //   <List>{reviews}</List>
    // </div>
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
        <br/>
        {this.renderProducts()}
        <br/>
        {this.renderReviews()}
        <br/>
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