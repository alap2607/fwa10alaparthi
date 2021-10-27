var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        vl = search_params.get("x")
        if(vl === null)
        {
            vl=Math.round(Math.random()*1000);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.acosh() applied to ' + vl + ' is ' + Math.acosh(vl))
        res.write('<br/>Math.log1p() applied to ' + vl + ' is ' + Math.log1p(vl))
        res.write('<br/>Math.tan() applied to ' + vl + ' is ' + Math.tan(vl))
        res.write('<br/>Math.sqrt() applied to ' + vl + ' is ' + Math.sqrt(vl))
        res.end()
      }
});

module.exports = router;
