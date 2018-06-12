const express = require('express')
const app = express()
const request = require('request');
const username = process.env.FINERACT_USERNAME;
const password = process.env.FINERACT_PASSWORD;
const port = process.env.FINERACT_HEALTH_CHECK_PORT || 8000
const host = `http://${username}:${password}@localhost:8443`
const path = '/fineract-provider/api/v1/savingsaccounts/3?tenantIdentifier=default'

app.get('/', (req, res) => {
  request.get(`${host}${path}`, (error, response) => {
    if (error) {
      res.status(500).send('Cannot reach fineract');
      return;
    }
    res.status(response.statusCode);
  })
});

app.listen(port, () => console.log('Fineract Health Check listening on port 8000!'))
