import React from 'react';
import PropTypes from 'prop-types';
import {Col, Icon, Layout} from "antd";
import {getGridTemplate} from "../helper";
const {Header: AntdHeader} = Layout;

export const Header = (props) => {
    const { offcanvas, logo, navigation, extra, theme, children, ...restProps } = props;

    const template = {
        left: logo,
        middle: navigation,
        right: extra
    };

    let grid = getGridTemplate(template);

    return (
        <AntdHeader id={'hangar-header'} className={theme} {...restProps}>

            {(offcanvas) ? <div className="offcanvas show-mobile-hide-desktop">
                <Icon type='menu' className='offcanvas-icon' />
            </div> : '' }

            <Col {...grid.left} className={'logo-container'} style={{minWidth: '260px'}}>
                {logo}
            </Col>
            <Col {...grid.middle} className="show-desktop-hide-mobile">
                {navigation}
            </Col>
            <Col {...grid.right} className="extra show-desktop-hide-mobile">
                {extra}
            </Col>

            {children}

        </AntdHeader>
    )

};

Header.defaultProps = {

};

Header.propTypes = {
    logo: PropTypes.object,
    navigation: PropTypes.object,
    offcanvas: PropTypes.object,
    extra: PropTypes.object
};
