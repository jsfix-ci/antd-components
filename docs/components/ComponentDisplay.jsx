import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Button, Descriptions, Icon} from 'antd';
import { Code, PropertyTable } from './utils';
import { Display3 } from '../../src';
import './ComponentDisplay.scss';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const ComponentDisplay = ({title, code, properties, info, children}) => {
    const [collapsed, setCollapsed] = useState(true);

    const renderCodeButton = () => {
        return (
            collapsed
                ? <Button icon='eye' size='small' onClick={() => setCollapsed(false)}>Show Code</Button>
                : <Button icon='eye-invisible' size='small' onClick={() => setCollapsed(true)}>Hide Code</Button>
        );
    };

    return (
        <div className='hangar-component-display'>

            <Display3>{title}</Display3>

            <div className='content'>
                {
                    info ?
                    <Descriptions size='small' style={{marginBottom: 10}} bordered>
                        <Descriptions.Item label={'Description'}>
                            {info}
                        </Descriptions.Item>
                    </Descriptions>
                    : null
                }
                {children}
            </div>

            {
                code ? <div className='footer'>{renderCodeButton()}</div> : null
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
