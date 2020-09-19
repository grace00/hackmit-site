const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var Cloudant = require('@cloudant/cloudant');
var cloudant = new Cloudant({ url: 'https://0f817119-d50c-4b30-980c-d8554944e8b4-bluemix.cloudantnosqldb.appdomain.cloud', plugins: { iamauth: { iamApiKey: 'ZyTMh4LVcmqSzTnpe7rJ92E7TjDcv_yyQNOnSfOZ5l92' } } });

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
  var mydb = cloudant.db.use("hackmit-database");
  mydb.insert(req.body, function (err, data) {
    console.log('Error:', err);
    console.log('Data:', data);
    if (err) {
      return res.status(400).send("fail");
    }
    return res.status(200).send("success");
  });
});

// get all business listings
app.get('/businessData', (req, res) => {
  var mydb = cloudant.db.use("hackmit-database");
  mydb.list({include_docs:true}, function (err, data) {
    console.log(err, data);
    res.end(JSON.stringify(data.rows))
  });
})



/*https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61*/