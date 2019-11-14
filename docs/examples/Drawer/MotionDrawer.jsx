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
    import { Offcanvas } from '@react-hangar/antd-components';

    const onClick = () => {
        console.log('do fancy stuff!');
    };

    const Example = () => {
        return (
              <MotionDrawer/>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    {
        property: '(Inherited)',
        description: 'Ant design properties are inherited (see: https://ant.design/components/button/)'
    },
];

export default () => (
    <Fragment>
        <ComponentDisplay title={'MotionDrawer'} code={code} properties={properties}>
            <Example/>
        </ComponentDisplay>
    </Fragment>
);
