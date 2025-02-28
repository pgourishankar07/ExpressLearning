import { Router } from "express"

const router = Router()

router.post("/", (req, res) => {
    req.logout((err) => {
        if (err) return res.status(400).send("Error")
        else res.status(200).send("Logged Out")
    })
})

export default router