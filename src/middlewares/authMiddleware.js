import jwt from "jsonwebtoken"

export function protect(req, res, next) {
    const auth = req.headers.authorization

    if (!auth) {
        const err = Error("Not authorized")
        err.statusCode = 401
        throw err
    }
    const [schema, token] = auth.split(" ")

    if (schema !== "Bearer" || !token) {
        const err = Error("Not authorized")
        err.statusCode = 401
        throw err
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch(err) {
        err.statusCode = 401
        err.message = "Invalid token"
        next(err)
    }
}