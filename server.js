const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var Cloudant = require('@cloudant/cloudant');
var cloudant = new Cloudant({ url: 'https://0f817119-d50c-4b30-980c-d8554944e8b4-bluemix.cloudantnosqldb.appdomain.cloud', plugins: { iamauth: { iamApiKey: 'ZyTMh4LVcmqSzTnpe7rJ92E7TjDcv_yyQNOnSfOZ5l92' } } });

var mydb = cloudant.db.use("hackmit-database");

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// send form data
app.post('/formSubmission', (req, res) => {
  /*res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });*/
  mydb.insert(req.body, function (err, data) {
    console.log('Error:', err);
    console.log('Data:', data);
    if (err) {
      return res.status(400).send("fail");
    }
    return res.status(200).send("success");
  });
});

// add review for a business
app.post('/reviews/:id', (req, res) => {
  console.log("id", req.params.id)
  mydb.get(req.params.id, function (err, data) {
    // keep a copy of the doc so you know its revision token
    doc = data;
    console.log("reviews before push", doc["reviews"])
    doc["reviews"].push(req.body);
    mydb.insert(doc, function (err, data) {
      // keep the revision of the update so we can delete it
      doc._rev = data.rev;

      // re-send business info with new review
      mydb.get(req.params.id, function (err, data) {
        console.log('Error:', err);
        console.log('Data after finding it again:', data);
        if (!err) { res.end(JSON.stringify(data)) }
      });
    });
  });
})

// get all business listings
app.get('/businessData', (req, res) => {
  mydb.list({ include_docs: true }, function (err, data) {
    console.log(err, data);
    res.end(JSON.stringify(data.rows))
  });
})

// get a specific business's info
app.get('/businessData/:id', function (req, res) {
  mydb.get(req.params.id, function (err, data) {
    console.log('Error:', err);
    console.log('Data:', data);
    if (!err) { res.end(JSON.stringify(data)) }
  });
})



/*https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61*/