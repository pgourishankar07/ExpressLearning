import { Router } from "express"

const router = Router()

import usersRouter from "./users.js"
import homeRouter from "./home.js"
import loginRouter from "./login.js"
import logoutRouter from "./logout.js"
import auth from "../utils/auth.js"


router.use("/login", loginRouter)
router.use("/home", auth, homeRouter)
router.use("/api", auth, usersRouter)
router.use("/logout", logoutRouter)

export default router