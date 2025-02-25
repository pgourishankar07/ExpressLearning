const auth = (req, res, next) => {
    if (req.signedCookies.user == undefined) {
        return res.status(400).json({ msg: "You need to be Authenticated" })
    }
    next()
}

export default auth