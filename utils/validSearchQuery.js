import { validationResult } from "express-validator"
const validSearchQuery = (req, res, next) => {
    if (req.query.search != undefined) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: result.array(), action: "Please enter only alphabets to search name of the users" });
        }
    }
    next()
}

export default validSearchQuery