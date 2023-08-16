require('dotenv').config()
require('./config/database')



const app = require('./app-server')

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
	console.log(`I'm listening ${PORT}. We inna building`)
})
