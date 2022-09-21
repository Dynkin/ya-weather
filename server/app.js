const express = require("express");
const https = require('https');
require('dotenv').config();
    
const app = express();
  
app.use(express.static(__dirname + "/public"));
  
app.get("/api/weather", function(req, res){
  const options = {
    hostname: 'api.weather.yandex.ru',
    path: '/v2/forecast?lat=55.75396&lon=37.620393&extra=true',
    method: 'GET',
    headers: {
      'X-Yandex-API-Key': process.env.YANDEX_WEATHER_API_KEY
    }
  };
  const yandexReq = https.request(options, yandexRes => {
    yandexRes.setEncoding('utf8');
    res.writeHead(yandexRes.statusCode);
  
    yandexRes.on('data', chunk => {
      res.write(chunk);
    });

    yandexRes.on('close', () => {
      res.end();
    });

    yandexRes.on('end', () => {
      res.end();
    });
  });
  yandexReq.on('error', (e) => {
    console.error(e);
    try {
      res.writeHead(500);
      res.write(e.message);
    } catch (e) {
      // ignore
    }
    res.end();
  });
  yandexReq.end();
});
   
app.listen(3001, function(){
    console.log("Сервер ожидает подключения...");
});