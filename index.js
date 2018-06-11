const express = require('express')
const app = express()
const request = require('request');
const username = process.env.FINERACT_USERNAME;
const password = process.env.FINERACT_PASSWORD;
const host = `http://${username}:${password}@localhost:8443`
const path = '/fineract-provider/api/v1/savingsaccounts/3?tenantIdentifier=default'

app.get('/', (req, res) => {
  console.log(`${host}${path}`);
  request.get(`${host}${path}` , (error, response) => {
    if(error){
      res.status(500).send('Cannot reach fineract');
      return;
    }
  res.status(200).send('fineract is online')})
  });

app.listen(8000, () => console.log('Example app listening on port 8000!'))
