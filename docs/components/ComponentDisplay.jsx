import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Divider } from 'antd';
import { CodeSnippet, PropertyTable } from './utils';
import { Display3 } from '../../src';
import './ComponentDisplay.scss';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const ComponentDisplay = ({ title, code, properties, description, children }) => {
    const [collapsed, setCollapsed] = useState(true);

    const renderCodeButton = () => {
        if (!code) return null;

        return (
            <div className='footer'>
                {
                    collapsed
                        ? <Button icon='eye' size='small' onClick={() => setCollapsed(false)}>Show Code</Button>
                        : <Button icon='eye-invisible' size='small' onClick={() => setCollapsed(true)}>
                            Hide Code
                        </Button>
                }
            </div>
        );
    };

    const renderExample = () => {
        if (!children) return null;

        return (<div className='content'>{children}</div>);
    };

    const renderDescription = () => {
        if (!description) return null;

        if (!children) {
            return <p>{description}</p>;
        }

        return (
            <div className='description'>
                <Divider orientation="left">Description</Divider>
                {description}
            </div>
        );
    };

    const renderCode = () => {
        if (!code || collapsed) return null;

        return (<CodeSnippet>{code}</CodeSnippet>);
    };
    const renderProperties = () => {
        if (!properties) return null;

        return (<PropertyTable dataSource={properties}/>);
    };

    return (
        <div className='hangar-component-display'>
            <Display3>{title}</Display3>
            {renderExample()}
            {renderDescription()}
            {renderCodeButton()}
            {renderCode()}
            {renderProperties()}
        </div>
    );
};

ComponentDisplay.propTypes = {
    code: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    properties: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
};
