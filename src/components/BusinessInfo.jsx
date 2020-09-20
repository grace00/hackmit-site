import React from 'react';
import {Form as Form1, List, Image , Grid, Item, Header, Container, Icon, Segment, Checkbox, Rating, Visibility} from 'semantic-ui-react';
import Form from "@rjsf/semantic-ui";
import Fade from 'react-reveal/Fade';
import Project from './project';
import axios from 'axios';
import _ from 'lodash'

const overlayStyle = {
  position: 'absolute',
  right: '400px',
  // top: '200px',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  fontSize: 20,
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  float: 'right',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'absolute',
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
}

export default class BusinessInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessName: "Moo Moo Milk",
      description: "Fresh Organic Milk grown from a local Indiana farm! No GMO's with a delicious taste.",
      contactInfo: {"First Name": "Bob",
                    "Last Name": "Builder",
                    "Email": "moo@milk.com - ask us to collaborate with your business!",
                    "Website": "MooMooMilk.com",
                    "Facebook": "moo123",
                    "Location": "Indiana Farms"},
      products: [{"id": 76545678,
                  "Name": "Moo Moo Milk Teas",
                  "Description": "Made with fresh milk from grassfed cows and no GMO's. Comes in matcha or original flavors!",
                  "Price": "$3.99", 
                  "Ratings": 4.5,
                  "Photo": "https://petitesmiles.files.wordpress.com/2014/09/moomoopic1.jpg"},
                  {"Name": "Strawberry Milk",
                  "Description": "Fresh chilled milk from grassfed cows and no GMOs.",
                  "Price": "$4.99", 
                  "Ratings": 5.0,
                  "Photo": "https://i0.wp.com/yesmooretea.com/wp-content/uploads/2020/04/Strawberry-Milk-8226-scaled.jpg?fit=1877%2C2560&ssl=1"},
                  // {"Name": "Organic Milk Gallon",
                  // "Description": "Fresh Organic Milk with no GMOs",
                  // "Price": "$4.99", 
                  // "Ratings": 4.5,
                  // "Photo": []}
                ],
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
      business: [],
      complete: false,
      error: false,
      newReview: {},
      overlayFixed: false,
      overlayRect: false,
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
    return <div>
            <div style={{display: 'flex', flexDirection: "row", justifyContent: "flex-start"  }}>
              {business.image && <img src={business.image.file} alt={business.businessName} class="ui rounded image"></img>}
              <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 60}}>
                <p style={{fontSize: 40, fontWeight: 'bold'}}>
                  {business.businessName}
                </p>
                <div style={{display: 'flex', flexDirection: "row", justifyContent: 'flex-start'}}>
                  <Rating icon='star' maxRating={5} defaultRating={3} size='large' disabled style={{paddingRight: 10}}/>
                  {"3.0/5 (24 Reviews)"}
                </div>
              </div>
            </div>            
          </div>
  }

  renderAboutInfo() {
    let { business } = this.state;
    return <div>
      <h1>About</h1>
      <p>{business.description}</p>
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
    let time = new Date(review.time);
    return <Segment>
      <Fade bottom>
        <div style={{alignSelf: "center"}}>
          <i class="big user outline icon"></i>
          {/* <img src="https://react.semantic-ui.com/images/wireframe/square-image.png" class="ui small rounded image"/> */}
        </div>
        <List.Content>
          <List.Header as='a'>{review.firstName + review.lastName}</List.Header>
          <List.Description>
            {review.review}
          </List.Description>
          <List.Description>
            {/* <Ratings rating={review.Ratings}/> */}
            {time.toDateString()}
          </List.Description>
        </List.Content>
      </Fade>
    </Segment>
    
  }

  renderReviews(){
    // const reviews = this.state.reviews.map ((review) =>
    //   this.renderReview(review)
    // )
    let { business } = this.state;
    return <Container>
      <Grid>
        <Grid.Column width={6}>
          <h1><Fade bottom cascade>Reviews</Fade></h1>
          {business.reviews && business.reviews.map((review)=>(
                this.renderReview(review)
            ))}
        </Grid.Column>
      </Grid>
    </Container>

    // return <div>
    //   <h1>Reviews</h1>
    //   <List>{reviews}</List>
    // </div>
  }

  handleSubmit = (event) => {
    let data = event.formData;
    data["time"] = new Date();
    console.log("review with time added", data)
    let id = this.props.match.params.id;

    fetch('http://localhost:5000/reviews/' + id, {
      "method": "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      "body": JSON.stringify(data)
    })
    .then(blob => blob.json())
    .then((result) => {
      console.log("result", result)
      this.setState({ 
        complete: true,
        business: result
      });
    })
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  renderReviewForm(){
    if (this.state.complete) {
      return (
        <Container>
          <Header as='h2'>Thank you for reviewing!</Header>
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
        "review": {
          "type": "string",
          "title": "Review",
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
        "rating": {
          "title": "Rate out of 5",
          "type": "number",
        }
      }
    };

    let uiSchema = {
      "review": {
        "ui:widget": "textarea"
      }
    }

    return (
      <Container>
        <Grid>
          <Grid.Column width={8}>
            <Header as='h2'>Write a Review</Header>
            <Form schema={schema} uiSchema={uiSchema} onSubmit={this.handleSubmit} />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }


  stickOverlay = () => this.setState({ overlayFixed: true })
  unStickOverlay = () => this.setState({ overlayFixed: false })

  renderContactMenu() {
    let { business } = this.state;
    
    return <Container>
      <Visibility
        offset={80}
        once={false}
        onTopPassed={this.stickOverlay}
        onTopVisible={this.unStickOverlay}
        style={this.state.overlayFixed ? { ...overlayStyle, ...this.state.overlayRect } : {}}
      />
      <div ref={this.handleOverlayRef} style={this.state.overlayFixed ? fixedOverlayStyle : overlayStyle}>
          <div class="ui list" style={this.state.overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}>
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
    </Container>
  };

  render() {
    return (
      <Container>
        {this.renderContactMenu()}
        <br/>
        {this.renderMainInfo()}
        <hr color="#D3D3D3" style={{marginLeft: 0, marginTop: 30, marginBottom: 30, width: "70%"}}/>
        {this.renderAboutInfo()}
        <br/>
        {this.renderProducts()}
        <br/>
        {this.renderReviews()}
        <br/>
        {this.renderReviewForm()}
      </Container>
    )
  }
}