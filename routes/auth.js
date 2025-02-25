import { Router } from "express"
import regUsers from "../constants/regUsers.js"

const router = Router()

router.post("/", (req, res) => {

    let { body } = req

    let user = regUsers.find((i) => i.username == body.username)

    if (!user || user.password != body.password) {
        return res.status(401).json({ msg: "BAD CREDENTIALS" })
    }

    res.cookie("user", "gouri", { maxAge: 120000, signed: true })  //signing a cookie

    console.log(req.session.id);
    console.log(req.session);
    req.session.username = user

    console.log('Signed Cookies: ', req.signedCookies)

    res.send("Authenticaed successfully, now you can use our API service for about 2 mins.")
})

export default router