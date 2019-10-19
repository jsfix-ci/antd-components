import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';
import { Code, PropertyTable } from './utils';
import { Display3 } from '../../src';

const ExampleContent = styled.div`
    position: relative;
    padding: 3em 1em 1em;
    border: 1px solid #d8d8d8;
    margin: 1.5rem 0 0;
    
    &:before {
        position: absolute;
        left: 0;
        top: 0;
        padding: 1em;
        color: #aaa;
        font-weight: 500;
        content: 'EXAMPLE';
    }
`;

const Footer = styled.div`
  border: 1px solid #d8d8d8;
  border-top: 0;
  padding: 10px;
  text-align: center;
`;

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const ComponentDisplay = ({ title, code, properties, children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const renderCodeButton = () => {
        return (
            collapsed
                ? <Button icon='eye' size='small' onClick={() => setCollapsed(false)}>Show Code</Button>
                : <Button icon='eye-invisible' size='small' onClick={() => setCollapsed(true)}>Hide Code</Button>
        );
    };

    return (
        <div style={{marginBottom: 80}}>
            <Display3>{title}</Display3>
            <ExampleContent>{children}</ExampleContent>
            {
                code ? <Footer>{renderCodeButton()}</Footer> : null
            }
            {
                code && !collapsed ? <Code>{code}</Code> : null
            }
            {
                properties ? <PropertyTable dataSource={properties}/> : null
            }
        </div>
    );
};

ComponentDisplay.propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    properties: PropTypes.arrayOf(PropTypes.object)
};
