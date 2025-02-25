import { Router } from "express"

const router = Router()

import usersRouter from "./users.js"
import homeRouter from "./home.js"
import authRouter from "./auth.js"
import auth from "../utils/auth.js"


router.use("/auth", authRouter)
router.use("/home", auth, homeRouter)
router.use("/api", auth, usersRouter)

export default router