const logger = (req, res, next) => {
    console.log(req.method, " ", req.path, " ", req.query, " ", req.session.id, " ", req.user);
    next()
}

export default logger