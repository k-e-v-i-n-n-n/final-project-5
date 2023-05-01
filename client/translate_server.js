const PORT = process.env.PORT ?? 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(cors())


app.get(`/translate`, async (req, res) => {
    const {sourceLang, targetLang, sourceText} = req.query;
    const options = {
      method: 'GET',
      url: 'https://g-translate1.p.rapidapi.com/translate',
      params: {
        text: sourceText,
        tl: targetLang,
        sl: sourceLang
      },
      headers: {
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

