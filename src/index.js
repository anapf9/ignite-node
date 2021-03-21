const express = require('express');

const app = express();

app.get("/ignite", (req, res) => { 
  return res.send(
    'Nhai'
  )
})

app.listen(3201);