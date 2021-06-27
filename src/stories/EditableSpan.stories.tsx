import React from 'react';
import {Story, Meta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "../Task";
import {EditableSpan, EditableSpanPropsType} from "../EditableSpan";

export default {
    title: 'TODOLIST/EditableSpan',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: "Value EditableSpan changed"
        },
        value: {
            defaultValue: "HTML",
            description: "Start value EditableSpan",
        },
    },
} as Meta;


const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args} />;

export const EditableSpanExample = Template.bind({});
/*EditableSpan.args = {
    changeTitle: action( "Value EditableSpan changed"),
};*/

