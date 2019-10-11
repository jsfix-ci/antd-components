import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Code, normalizeWhitespace, PropertyTable } from './utils';
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

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const ComponentDisplay = ({title, code, properties, children}) => {
    return (
        <Fragment>
            <Display3>{title}</Display3>
            <ExampleContent>{children}</ExampleContent>
            {
                code ? <Code>{code}</Code> : null
            }
            {
                properties ? <PropertyTable dataSource={properties}/> : null
            }
        </Fragment>
    );
};

ComponentDisplay.propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    properties: PropTypes.arrayOf(PropTypes.object)
};
