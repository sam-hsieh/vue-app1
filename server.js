const express = require('express')
const path = require('path')

const app = express()
const port = 5000
app.use(express.static('dist'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sam', (req, res) => {
    res.send('Hello Sam!')
  })
//指定所有路由都到dist下的index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})