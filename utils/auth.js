const auth = (req, res, next) => {
    if (!req.user)
        return res.status(401).json({ msg: "You need to be Authenticated" })
    next()
}

export default auth