import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";


export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodo()
            .then((res) => {
                setState(res.data);
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "REDUX"
        todolistAPI.createTodo(title)
            .then((res) => {
                    setState(res.data);
                }
            )
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todoId = "eefdb823-1180-4e3f-8dea-bba0188c87ff"
        todolistAPI.deleteTodo(todoId)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const todoId = "542f547e-2ef9-4b30-bfec-7cdbd7fb804f"
        const title = "BlaBlaBla"
        todolistAPI.updateTodoTitle(todoId, title)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todoId, setTodoId] = useState<string>("")

    const getTasks = () => {
        todolistAPI.getTasks(todoId)
            .then((res) => {
                setState(res.data);
            })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todoId}
                   onChange={(e) => {
                       setTodoId(e.currentTarget.value)
                   }}/>
            <button onClick={getTasks}>Get Tasks</button>
        </div>


    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>()
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [todoId, setTodoId] = useState<string>("")

    const createTask = () => {
        todolistAPI.createTask(todoId, taskTitle)
            .then((res) => {
                setState(res.data);
            })
    }
    return (
        <div> {JSON.stringify(state)}
            <div>
                <input placeholder={"todolistId"} value={todoId}
                       onChange={(e) => {
                           setTodoId(e.currentTarget.value)
                       }}/>
                <input placeholder={"task Title"} value={taskTitle}
                       onChange={(e) => {
                           setTaskTitle(e.currentTarget.value)
                       }}/>
                <button onClick={createTask}>Create</button>
            </div>

        </div>
    )
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todoId, setTodoId] = useState<string>("")

    const deleteTask = () => {
        todolistAPI.createTask(todoId, taskId)
            .then((res) => {
                setState(res.data);
            })
    }
    return (
        <div> {JSON.stringify(state)}
            <div>
                <input placeholder={"todolistId"} value={todoId}
                       onChange={(e) => {
                           setTodoId(e.currentTarget.value)
                       }}/>
                <input placeholder={"taskId"} value={taskId}
                       onChange={(e) => {
                           setTaskId(e.currentTarget.value)
                       }}/>
                <button onClick={deleteTask}>Delete Task</button>
            </div>
        </div>
    )
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todoId, setTodoId] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")
    const [taskTitle, setTaskTitle] = useState<string>("title1")
    const [taskDescription, setTaskDescription] = useState<string>("discr1")
    const [taskStatus, setTaskStatus] = useState<number>(0)
    const [taskPriority, setTaskPriority] = useState<number>(0)
    const [taskStartDate, setTaskStartDate] = useState<string>("")
    const [taskDeadline, setTaskDeadline] = useState<string>("")


    const deleteTask = () => {
        todolistAPI.updateTask(todoId, taskId, {
            deadline: "",
            description: taskDescription,
            priority: taskPriority,
            startDate:"",
            status: taskStatus,
            title: taskTitle
        })
            .then((res) => {
                setState(res.data);
            })
    }
    return (
        <div> {JSON.stringify(state)}
            <div>
                <input placeholder={"todolistId"} value={todoId} onChange={(e) => {setTodoId(e.currentTarget.value)}}/>
                <input placeholder={"taskId"} value={taskId} onChange={(e) => {setTaskId(e.currentTarget.value)}}/>
                <input placeholder={"task title"} value={taskTitle} onChange={(e) => {setTaskTitle(e.currentTarget.value)}}/>
                <input placeholder={"Description"} value={taskDescription} onChange={(e) => {setTaskDescription(e.currentTarget.value)}}/>
                <input placeholder={"Status"} value={taskStatus} type = "number" onChange={(e) => {setTaskStatus(+e.currentTarget.value)}}/>
                <input placeholder={"Priority"} value={taskPriority} type = "number" onChange={(e) => {setTaskPriority(+e.currentTarget.value)}}/>

                <button onClick={deleteTask}>Update Task</button>
            </div>
        </div>
    )
}
