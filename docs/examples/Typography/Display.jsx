import React, { Fragment } from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { Display1, Display2, Display3, Display4 } from '../../../src';

// Example implementation
const Example = () => (
    <Fragment>
        <Display1>Display 1</Display1>
        <Display2>Display 2</Display2>
        <Display3>Display 3</Display3>
        <Display4>Display 4</Display4>
    </Fragment>
);

// Code example
// language=JS
const code = `
    import React from 'react';
    import { Display1, Display2, Display3, Display4 } from '@react-hangar/antd-components';

    const Example = () => {
        return (
            <Fragment>
                <Display1>Display 1</Display1>
                <Display2>Display 2</Display2>
                <Display3>Display 3</Display3>
                <Display4>Display 4</Display4>
            </Fragment>
        );
    };

    export default Example;

`;

export default () => (
    <ComponentDisplay title={'Display'} code={code}>
        <Example/>
    </ComponentDisplay>
);
