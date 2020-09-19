const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.post('/express_backend', (req, res) => {
  /*res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });*/
  return res.status(200).send("success");
});

/*https://medium.com/@maison.moa/setting-up-an-express-backend-server-for-create-react-app-bc7620b20a61*/