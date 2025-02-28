import express from "express"
import cookieParser from "cookie-parser"
import session from "express-session"
import passport from "passport"

import logger from "./utils/logger.js"
import routes from "./routes/index.js"
import "./strategies/LocalStrategy.js"

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

app.use(passport.initialize())
app.use(passport.session())

app.use(logger)
app.use(routes)

app.use((req, res) => {
    res.status(404).send("404 Resource not found");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);

})