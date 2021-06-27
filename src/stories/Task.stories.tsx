import React from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../Task";

export default {
    title: 'TODOLIST/Task',
    component: Task,
} as Meta;

    const changeTaskStatusCallback = action("Change Task Status onClick")
    const changeTaskTitleCallback = action("Change Task Title onClick")
    const removeTaskCallback = action("Remove Task onClick")

const baseArg = {
    changeTaskStatus:changeTaskStatusCallback,
    changeTaskTitle: changeTaskTitleCallback,
    removeTask: removeTaskCallback,
}

const Template: Story<TaskPropsType> = (args) => <Task {...args} />;

export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
    ...baseArg,
    task: {id: "1", title: "JS", isDone: true},
    todolistId: "todolist1",
};

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
    ...baseArg,
    task: {id: "2", title: "CSS", isDone: false},
    todolistId: "todolist2",
};
