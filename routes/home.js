import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {

    res.send("Learning Express.....")
})

// router.all("*", (req, res) => {
//     res.status(404).send("404 Resource not found")
// })

export default router