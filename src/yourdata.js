export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'',
        headerTagline: [//Line 1 For Header
                        'Beeyond. You cannot buy happiness',
                        //Line 2 For Header
                        'But you can buy local.',
                        //Line 3 For Header
                        '- Anonymous'
    ],
        //Contact Email
        contactEmail:'beeyond@gmail.com',
        // Add Your About Text Here
        abouttext: "There are no centralized sites that focus on promoting small businesses or business people not associated with a company. Even when searched for on social media or on search engines, small businesspeople are often overlooked or neglected. They may not have the time, money or resources to create a website and advertise themselves. Our solution provides free marketing by focusing on connecting local businesses and self-employed people to consumers all with a simple search, even in the midst of COVID.",
        aboutImage:'https://i.pinimg.com/736x/22/0a/06/220a063d5ae7667480feb7e98399dfc9.jpg',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Baked Goods', //Project Title - Add Your Project Title Here
             service:'Homemade Baked Cookies', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://images.unsplash.com/photo-1491374812364-00028bbe7d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80",
             //Project URL - Add Your Project Url Here
             url: 'http://localhost:3000/#/businesses/1'
           //  <Link to="/businesses/1">Link</Link>
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Art',
                service: 'Landscape Painter',
                imageSrc: "https://images.unsplash.com/photo-1553173975-2b5eca89c41f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                url: 'http://localhost:3000/#/businesses/1'
            },
            {
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Jewelry',
                service: 'Origami Earrings',
                imageSrc: "https://ae01.alicdn.com/kf/Hee2079c0722b4fc5b0fecb1d94069c38O/Handmade-Multicolor-Origami-Crane-Drop-Earrings-Resin-Paper-Colorful-Crane-Dangle-Earrings-Glitter-Ethnic-Exquisite-Jewelry.jpg",
                url: 'http://localhost:3000/#/businesses/1'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Gardening',
                service: 'Lawn Mowing',
                imageSrc: "https://folsomlawnservice.com/wp-content/uploads/2011/05/smiley.jpg",
                url: 'http://localhost:3000/#/businesses/1'
           }

                    /*
                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/chetanverma16'},
            {
                name: 'Behance',
                url: 'https://www.behance.net/chetanverma'
            },
            {
                name: 'Dribbble',
                url: 'https://dribbble.com/chetanverma'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/cv.uidesign/'
            }

        ]
    }