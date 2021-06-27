import {TasksStateType} from '../App';
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";


export type RemoveTaskAT = {
    type: 'REMOVE_TASK'
    taskId: string
    todolistId: string
}
export type AddTaskAT = {
    type: 'ADD_TASK'
    title: string
    todolistId: string
}
export type ChangeTaskStatusAT = {
    type: 'CHANGE_TASK_STATUS'
    taskId: string
    isDone: boolean
    todolistId: string
}

export type ChangeTaskTitleAT = {
    type: 'CHANGE_TASK_TITLE'
    taskId: string
    newTitle: string
    todolistId: string
}

const initialState:TasksStateType = {}

type ActionsType = RemoveTaskAT | AddTaskAT | ChangeTaskStatusAT | ChangeTaskTitleAT | AddTodolistActionType | RemoveTodolistActionType

export const tasksReducer = (state= initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE_TASK': {
            let todolistTasks = state[action.todolistId];
            // перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
            state[action.todolistId] = todolistTasks.filter(t => t.id !== action.taskId);
            return {...state}
        }
        case 'ADD_TASK': {
            let task = {id: v1(), title: action.title, isDone: false};
            //достанем нужный массив по todolistId:
            let todolistTasks = state[action.todolistId];
            // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
            state[action.todolistId] = [task, ...todolistTasks];
            return {...state}
        }
        case 'CHANGE_TASK_STATUS': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(task => {
                        if (task.id === action.taskId) {
                            return {...task, isDone: action.isDone}
                        } else
                            return task
                    })
            }
        }
        case 'CHANGE_TASK_TITLE': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(task => {
                        if (task.id === action.taskId) {
                            return {...task, title: action.newTitle}
                        } else
                            return task
                    })
            }
        }
        case 'ADD-TODOLIST': {
            return {
                ...state,
[action.todolistId]:[]
            }
        }
        case 'REMOVE-TODOLIST': {
            let copyState = {...state}
            delete copyState[action.id]
            return copyState

        }
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskAT => {
    return {type: 'REMOVE_TASK', taskId, todolistId}
}
export const addTaskAC = (title: string, todolistId: string): AddTaskAT => {
    return {type: 'ADD_TASK', title, todolistId}
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeTaskStatusAT => {
    return {type: 'CHANGE_TASK_STATUS', taskId, isDone, todolistId}
}

export const changeTaskTitleAC = (taskId: string, newTitle: string, todolistId: string): ChangeTaskTitleAT => {
    return {type: 'CHANGE_TASK_TITLE', taskId, newTitle, todolistId}
}