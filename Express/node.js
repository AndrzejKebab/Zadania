const express = require('express');
const app = express();
const port = 3000;

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

  s
  s