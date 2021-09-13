const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

module.exports = {
    area: function(width) {
      return width * width;
    },
  
    perimeter: function(width) {
      return 4 * width;
    }
  };

    console.log('First');
    console.log('Second');