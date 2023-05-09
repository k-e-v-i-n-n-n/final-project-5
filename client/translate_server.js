const PORT = process.env.PORT ?? 8000
const axios = require('axios').default
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(cors())

app.use('/translate', createProxyMiddleware({ target: 'https://the-french-things.onrender.com:8000/', changeOrigin: true }));



app.get("/translate", async (req, res) => {
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
      console.log("Translate Error", err.message)
      res.status(500).json({ message: err.message });
    }
  });






app.listen(PORT, () => console.log('Listening to port ' + PORT))

