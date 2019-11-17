import React, {Fragment, useState} from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import {MotionDrawer} from "../../../src/Drawer";
import { Button } from '../../../src';

// Example implementation
const Example = () => {

    const [open, setOpen] = useState(false);

    const onBtnClick = () => {
        setOpen(true);
    };

    const onChange = (e) => {
        setOpen(e);
    };

    return (
        <Fragment>
            <Button onClick={onBtnClick} >Open</Button>
            <MotionDrawer
                onChange={onChange}
                open={open}
            >
                Hangar Drawer
            </MotionDrawer>
        </Fragment>

    );
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { MotionDrawer, Button } from '@react-hangar/antd-components';
    
    const [open, setOpen] = useState(false);

    const onBtnClick = () => {
        setOpen(true);
    };
    
    const onChange = (e) => {
        setOpen(e);
    };
    
    const Example = () => {
        return (
            <Button onClick={onBtnClick} >Open</Button>
            <MotionDrawer
                onChange={onChange}
                open={open}
            >
                Hangar Drawer
            </MotionDrawer>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    { property: 'onChange', description: 'Function is called on drawer change', type: 'function' },
    { property: 'open', description: 'motion drawer open status', type: 'string' },
    { property: 'width', description: 'width of the motion drawer', type: 'string' },
];

export default () => (
    <Fragment>
        <ComponentDisplay title={'MotionDrawer'} code={code} properties={properties}>
            <Example/>
        </ComponentDisplay>
    </Fragment>
);
