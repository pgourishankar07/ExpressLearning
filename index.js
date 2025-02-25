import express from "express"
import cookieParser from "cookie-parser"
import session from "express-session"

import logger from "./utils/logger.js"
import routes from "./routes/index.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser("secret"))
app.use(session({
    secret: 'secret-2',
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 120000 }
}))

app.use(logger)
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);

})