import React, {Fragment} from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import {Button, AddButton, DeleteButton, EditButton} from '../../../src/Buttons/Buttons';
import {message} from "antd";

const onAddBtnClick = () => {
    message.info('add button clicked!');
};

const onEditBtnClick = () => {
    message.info('edit button clicked!');
};

const onDeleteBtnClick = () => {
    message.info('delete button clicked!');
};

const onCustomBtnClick = () => {
    message.info('custom button clicked!');
};

// Example implementation
const Example = (props) => (
    <Fragment>
        <AddButton onClick={onAddBtnClick} />
        <EditButton onClick={onEditBtnClick} />
        <DeleteButton onClick={onDeleteBtnClick} />

        <AddButton onClick={onAddBtnClick} size='large' color='pink' />
        <EditButton onClick={onEditBtnClick} size='default' color='orange'/>
        <DeleteButton onClick={onDeleteBtnClick} size='small' color='purple' />

        <AddButton onClick={onAddBtnClick} color='purple' />

        <Button onClick={onCustomBtnClick} color='green' text='custom' icon='bulb'>Custom</Button>
    </Fragment>
);

// Code example
// language=JS
const code = `
    import React from 'react';
    import { AddButton, DeleteButton, EditButton } from '@react-hangar/antd-components';

    const onAddBtnClick = () => {
        message.info('add button clicked!');
    };
    
    const onEditBtnClick = () => {
        message.info('edit button clicked!');
    };

    const onDeleteBtnClick = () => {
        message.info('delete button clicked!');
    }


    const onCustomBtnClick = () => {
        message.info('custom button clicked!');
    };
    
    const Example = () => {
        return (
            <Fragment>
                <AddButton onClick={onAddBtnClick} />
                <EditButton onClick={onEditBtnClick} />
                <DeleteButton onClick={onDeleteBtnClick} />
        
                <AddButton onClick={onAddBtnClick} size='large' color='pink' />
                <EditButton onClick={onEditBtnClick} size='default' color='orange'/>
                <DeleteButton onClick={onDeleteBtnClick} size='small' color='purple' />
        
                <AddButton onClick={onAddBtnClick} color='purple' />
        
                <Button onClick={onCustomBtnClick} color='green' text='custom' icon='bulb'>Custom</Button>
            </Fragment>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    {property: 'onClick', description: 'Function is called on button click', type: 'function'},
    {property: 'color', description: 'optional color of the button', type: 'string'},
    {property: 'size', description: 'optional size (small, default, large)', type: 'string', default: 'default'},
];

export default () => (
    <ComponentDisplay title={'Types'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
