import React, {Fragment} from 'react';
import {Display2, Display3} from '../../src';
import styled from 'styled-components';
import {Row, Typography} from 'antd';
const { Text } = Typography;
/**
 * @return {React.Component}
 */
export const Home = () => {

    const Icon = styled('span')`                              
        font-size: 20px;
        padding: 15px;
        font-weight: 500;
    `;

    return (
        <Fragment>

            <Display3>Hangar Library of Antd and React</Display3>
            <p>We developed a library of modified Antd and React Components</p>

            <img height={150} src={'https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg'} /> <Icon>+</Icon>
            <img height={150} src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} /> <Icon>=</Icon>
            <img height={150} src={'../hangar-logo-big.png'} />

            <br /><br />

            <Row>
                <Display3> Installation </Display3>
                <Text style={{fontSize: 18}} copyable code>
                    npm install @react-hangar/antd-components
                </Text>
            </Row>

            <br /><br />

            <Row>
                <Display3> Import in Browser </Display3>
                Add script and link tags in your browser and use the global variable antd.
            </Row>

        </Fragment>

    );
};
