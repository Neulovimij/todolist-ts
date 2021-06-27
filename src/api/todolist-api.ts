import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "api-key": "281c8ae9-01a4-4a38-b0e7-a6ad0aac3a5f"
    }
})

export type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type CommonResponseType<T = {}> = {
    resultCode: number
    fieldsErrors: string[]
    messages: string[]
    data: T
}

export type TaskType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTasksResponseType = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export type UpdateTaskType = {
    title:string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

export const todolistAPI = {
    getTodo() {
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodo(title: string) {
        return instance.post<CommonResponseType<{ item: TodoType }>>('todo-lists', {title})
    },
    deleteTodo(todoId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todoId}`)
    },

    updateTodoTitle(todoId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todoId}`, {title})
    },
    getTasks(todoId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todoId}/tasks`)
    },
    deleteTasks(todoId: string, taskId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todoId}/tasks${taskId}`)
    },
    createTask(todoId: string, taskTitle: string ) {
        return instance.post<CommonResponseType<TaskType>>(`todo-lists/${todoId}/tasks`, {title: taskTitle})
    },

    updateTask(todoId: string, taskId: string, model:UpdateTaskType ) {
        return instance.put<CommonResponseType>(`todo-lists/${todoId}/tasks${taskId}`, model)
    },

}
