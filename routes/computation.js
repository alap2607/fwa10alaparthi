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
        res.write('Math.imul() applied to ' + vl + ' is ' + Math.imul(vl))
        res.write('<br/>Math.log() applied to ' + vl + ' is ' + Math.log(vl))
        res.write('<br/>Math.log10() applied to ' + vl + ' is ' + Math.log10(vl))
        res.end()
      }
});

module.exports = router;
