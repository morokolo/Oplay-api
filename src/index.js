const app = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Api is listening at http://localhost:${port}`)
})