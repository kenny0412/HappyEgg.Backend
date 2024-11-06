import app from './src/app'

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
const PORT = process.env.PORT ?? 0
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
