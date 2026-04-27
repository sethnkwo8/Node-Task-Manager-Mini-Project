import { loginUser, signUpUser } from "../services/authService.js"

export async function signUp(req, res, next) {
    const {name, email, password} = req.body

    try{
        const user = await signUpUser(name, email, password)

        res.status(201).json({
            message: "User created",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
    } catch(err) {
        next(err)
    }
}

export async function login(req, res, next) {
    const {email, password} = req.body

    try{
        const token = await loginUser(email, password)

        res.status(200).json({
            token
        })
        
    } catch(err) {
        next(err)
    }
}