import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    res.cookie("user", "gouri", { maxAge: 120000, signed: true })  //signing a cookie

    console.log('Signed Cookies: ', req.signedCookies)

    res.send("Authenticaed successfully, now you can use our API service for about 2 mins.")
})

export default router