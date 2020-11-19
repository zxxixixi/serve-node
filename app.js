var express = require('express')
var app = express()
var axios = require("axios")


app.get('/', async function(req, res) {
    // res.send('hello')
    res.append("Access-Control-Allow-Origin", "*");
    res.append("Access-Control-Allow-content-type", "*")

    var rel = await axios.get('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,cityStatis,nowConfirmStatis,provinceCompare')
    data = rel.data;

    // res.send(JSON.stringify(data));
    res.send(data)
})
let port = 8080;
app.listen(port, () => {
    console.log("serve start...");
})