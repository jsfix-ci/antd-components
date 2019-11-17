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
                position={'right'}
                width={400}
                drawerStyle={{backgroundColor: '#fbfbfb'}}
            >
                Hangar Drawer
            </MotionDrawer>
        </Fragment>

    );
};

// Code example
// language=JS
const code = `
    import React, {Fragment, useState} from 'react';
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
            <Fragment>
                <Button onClick={onBtnClick} >Open</Button>
                <MotionDrawer
                    onChange={onChange}
                    open={open}
                    position={'right'}
                    width={350}
                    drawerStyle={{backgroundColor: '#fbfbfb'}}
                >
                    Hangar Drawer
                </MotionDrawer>
            </Fragment>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    { property: 'onChange', description: 'Function is called on drawer change', type: 'function' },
    { property: 'open', description: 'motion drawer open status', type: 'string' },
    { property: 'width', description: 'width of the motion drawer', type: 'number || string' , default: 400},
    { property: 'height', description: 'height of the motion drawer', type: 'number || string' , default: '100%'},
    { property: 'position', description: 'position of the drawer. possible positions: right, left', type: 'string', default: 'left'},
    { property: 'drawerStyle', description: 'drawer style', type: 'string'},
    { property: 'overlayColor', description: 'overlay color of the drawer', type: 'string', default: 'rgba(0, 0, 0, 0.4)'},
    { property: 'config', description: 'stiffness and damping config', type: 'object', default: '{ stiffness: 350, damping: 40 }'},
    { property: 'peakingWidth', description: 'drawer peaking width', type: 'number', default: 50},



];

export default () => (
    <Fragment>
        <ComponentDisplay title={'MotionDrawer'} code={code} properties={properties}>
            <Example/>
        </ComponentDisplay>
    </Fragment>
);
