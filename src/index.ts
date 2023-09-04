import express from 'express'
import diaryRouter from './routes/diaries'
import 'dotenv/config'

const app = express()
app.use(express.json())
const PORT = process.env.PORT ?? 8080

app.get('/ying', (_, res) => {
  res.send('yang')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log('servidor andando')
})
