const express = require('express')
const app = express()

app.get('/', (request, response) => {
        response.send('<center><h2>Just a Simple Application for Hillel Devops course</h2><br><a href=http://10.10.20.26:3000/status>Get version</a></center>')
})

app.get('/status', (request, response) => {
        response.send('<center><h3>Version: v1.0.1</h3></center>')
})


app.listen(3000, () => {
        console.log('Server is running (port 3000})...')
})
