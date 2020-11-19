const axios = require('axios')
var express = require('express')
var app = express()
var sqlQuery = require('./node')
app.get('/', (req, res) => {
    res.send('这是答题API服务器')
})
app.get('/api/rtimu', (req, res) => {
    //随机获取10个题目：
    console.log(req.query);
    let page = req.query.page ? req.query.page : 2;
    // let strSql = "select * from quizzes limit 0,10"
    let strSql = `select * from quizzes limit ${page*10},10`
    let result = await sqlQuery(strSql)
    console.log(result);
    res.json(Array.from(result)) //Array.from(result)可以将result转换成真正的数组
})
let port = 8080;
app.listen(port, () => {
        console.log("serve start...");
    })
    //在组件中
class App extends React.Component {
    async UNSAFE_componentWillMount() {
        let page = 2;
        let httpUrl = `http://localhost:8080/api/rtimu`
        let res = await axios.get(httpUrl);
    }
}