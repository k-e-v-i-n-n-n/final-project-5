const PORT = process.env.PORT ?? 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()



app.use(cors())


app.post(`/translate`, async (req, res) => {
    const {sourceLang, targetLang, sourceText} = req.query;
    const encodedParams = new URLSearchParams();
          encodedParams.set('q', sourceText);
          encodedParams.set('target', targetLang);
          encodedParams.set('source', sourceLang);
    const options = {
      method: 'GET',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      params: {
        encodedParams
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
      }
    };
  
    try {
      const response = await axios(options)
      res.status(200).json(response.data.data.translation);
      console.log("Response", response.data.data.translation);
    } catch (err) {
      
      res.status(500).json({ message: err });
    }
  });






app.listen(PORT, () => console.log('Listening to port ' + PORT))

