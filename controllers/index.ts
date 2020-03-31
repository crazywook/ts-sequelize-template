import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('GET home page')
  res.render('index.html', { title: 'Express' })
})

export default router
