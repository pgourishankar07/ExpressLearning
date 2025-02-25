import express from "express"
import cookieParser from "cookie-parser"

import logger from "./utils/logger.js"
import usersRouter from "./routes/users.js"
import homeRouter from "./routes/home.js"
import authRouter from "./routes/auth.js"
import auth from "./utils/auth.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser("secret")) // for signing cookies with this secret 

app.use(logger)
app.use("/auth", authRouter)
app.use("/home", auth, homeRouter)
app.use("/api", auth, usersRouter)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);

})