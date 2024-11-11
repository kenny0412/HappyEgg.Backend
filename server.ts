import app from './src/app.js'

app.use((_, res, next) => {
  // Access domain allowed
  res.setHeader('Access-Control-Allow-Origin', '*')

  //  Request methods allowed
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')

  // Hedears allowed
  res.setHeader('Access-Control-Allow-Headers', '*')

  next()
})
/**
     ** Server Activation
     */
const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
