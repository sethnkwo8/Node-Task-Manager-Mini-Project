import { createTask, deleteTask, getTasks, updateTask } from "../services/tasksService.js";

export async function create(req, res, next) {
    const {title, description} = req.body;

    try{
        const task = await createTask(title, description, req.user.userId)

        res.status(201).json({
            message: "Task Created",
            task
        })
    } catch (err) {
        next(err)
    }
}

export async function get(req, res, next) {
    try{
        const tasks = await getTasks(req.user.userId)

        res.status(200).json({
            tasks
        })
    } catch(err) {
        next(err)
    }
}

export async function remove(req, res, next) {
    const {id} = req.params
    try{
        const message = deleteTask(id, req.user.userId)

        res.status(200).json(message)
    } catch(err) {
        next(err)
    }

}

export async function edit(req, res, next) {
    const {id} = req.params
    const {title, description, completed} = req.body

    try{
        const task = await updateTask(id, req.user.userId, req.body)

        res.status(200).json({
            message: "Task updated",
            task
        })
    } catch(err) {
        next(err)
    }
}