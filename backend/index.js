const express = require('express');
const cors=require('cors')
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.static('views'));
const PORT=3000;

app.get('/', (req, res) => {
  fs.readFile('quotes.db', function(err, buf) {
    var qarr = JSON.parse(buf);
    var random = Math.floor(Math.random() * (qarr.length - 1));
    res.send(qarr[random]);
  });
});

app.listen(PORT, function() {
  console.log(
    `Express server listening on port ${PORT}`,
 
  );
});
