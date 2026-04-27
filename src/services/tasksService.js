import Task from "../models/Task.js"

export async function createTask(title, description, userId) {
    return await Task.create({
        title,
        description,
        userId
    })
}

export async function getTasks(userId) {
    return await Task.find({userId});
}

export async function deleteTask(id, userId) {
    const task = await Task.findById(id);

    if (!task) {
        const err = Error("Task not found")
        err.statusCode = 404;
        throw err
    }

    if (task.userId.toString() !== userId) {
        const err = Error("Not authorized")
        err.statusCode = 403
        throw err
    }

    await task.deleteOne()

    return {
        message: 'Task deleted'
    }
}

export async function updateTask(id, userId, updates){
    const task = await Task.findById(id)

    if (!task) {
        const err = Error("Task not found")
        err.statusCode = 404
        throw err
    }

    if (task.userId.toString() !== userId) {
        const err = Error("Not authorized")
        err.statusCode = 403
        throw err
    }

    Object.assign(task, updates)

    await task.save()

    return task
}