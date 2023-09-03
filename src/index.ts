import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())
const PORT = 'https://node-api-render-9p8l.onrender.com/'

app.get('/ying', (_, res) => {
  res.send('yang')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log('servidor andando')
})
