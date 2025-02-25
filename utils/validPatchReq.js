import { validationResult } from "express-validator"

const myValidation = (req, res, next) => {
    let { body } = req
    if ((body.name != undefined && body.marks != undefined) || (body.name == undefined && body.marks == undefined)) {
        return res.status(400).send({ errors: "Invalid inputs...  Update any 1 of the attribute" });
    }
    next()

}

const validPatchReq = (req, res, next) => {

    myValidation(req, res, next)

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array(), action: "Invalid inputs...  Enter alphabets for name and number for marks" });
    }
    next()
}

export default validPatchReq