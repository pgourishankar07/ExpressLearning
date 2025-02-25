import { Router } from "express"
import { query, body } from "express-validator"
import usersData from "../constants/users.js"
import validSearchQuery from "../utils/validSearchQuery.js"
import validPostReq from "../utils/validPostReq.js"
import validPatchReq from "../utils/validPatchReq.js"

const router = Router()
let users = usersData

router.get("/users", query('search').isAlpha(), validSearchQuery, (req, res) => {

    let { search, sort } = req.query;
    let data = users

    if (search != undefined) {
        data = data.filter(i => i.name.startsWith(search))
    }

    if (sort === "true") {
        data.sort((a, b) => a.marks - b.marks)
    }

    res.send(data)
})

router.get("/user/:userId", (req, res) => {
    let id = parseInt(req.params.userId)
    let user = (users.filter(i => i.id === id))
    if (user.length == 0) {
        return res.status(404).send("User not found")
    }
    res.send(user)
})

router.post("/user", body('name').isAlpha(), body('marks').isNumeric(), validPostReq, (req, res) => {
    let { body } = req;
    let id = Math.max(...users.map(i => i.id)) + 1
    let data = { id, ...body }
    users.push(data)
    res.status(201).send("Created New User")
})

router.put("/user/:userId", body('name').isAlpha(), body('marks').isNumeric(), validPostReq, (req, res) => {
    let id = parseInt(req.params.userId);

    let user = (users.filter(i => i.id === id))
    if (user.length == 0) {
        return res.status(404).send("User not found")
    }

    let { body } = req;
    users = users.map(i => i.id === id ? { ...i, ...body } : i);
    res.send("Updated the User record successfully")
})

router.patch("/user/:userId", body('name').isAlpha().optional(), body('marks').isNumeric().optional(), validPatchReq, (req, res) => {
    let id = parseInt(req.params.userId);

    let user = (users.filter(i => i.id === id))
    if (user.length == 0) {
        return res.status(404).send("User not found")
    }

    let { body } = req;

    users = users.map(i => i.id === id ? { ...i, ...body } : i);

    res.send("Patched the User record successfully")
})

router.delete("/user/:userId", (req, res) => {
    let id = parseInt(req.params.userId)

    let user = (users.filter(i => i.id === id))
    if (user.length == 0) {
        return res.status(404).send("User not found")
    }

    users = users.filter((i) => i.id != id)

    res.send("Deleted successfully")

})

// router.all("*", (req, res) => {
//     res.status(404).send("404 Resource not found")
// })

export default router