import { validationResult } from "express-validator"
const validPostReq = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array(), action: "Invalid inputs... Enter alphabets for name and number for marks" });
    }
    next()
}

export default validPostReq