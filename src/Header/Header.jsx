import React from 'react';
import PropTypes from 'prop-types';
import {Col, Icon, Layout} from "antd";
import {getGridTemplate} from "../helper";
const {Header: AntdHeader} = Layout;

const getOffcanvasButton = (offcanvas) => {
    if (offcanvas) {
        return (
            <div className="offcanvas show-mobile-hide-desktop">
                <Icon type='menu' className='offcanvas-icon' />
            </div>
        )
    }
};

const getLogo = (logo, pos) => {
    console.log(pos.left[0], ' pos <------------------------------');
    if (logo) {
        return (
            <Col {...pos.left[0]} style={{minWidth: '260px'}}>
                {logo}
            </Col>
        )
    }
};

const getNavigation = (navigation, pos) => {
    if (navigation) {
        return (
            <Col {...pos.middle[1]} className="show-desktop-hide-mobile">
                {navigation}
            </Col>
        )
    }
};

const getExtra = (extra, pos) => {
    if (extra) {
        return (
            <Col {...pos.right[2]} className="show-desktop-hide-mobile">
                {extra}
            </Col>
        )
    }
};

export const Header = (props) => {
    const { offcanvas, logo, navigation, extra, theme, ...restProps } = props;
    const template = {
        left: logo,
        middle: navigation,
        right: extra
    };

    let pos = getGridTemplate(template);

    return (
        <AntdHeader id={'hangar-header'} className={theme} {...restProps}>

            {getOffcanvasButton(offcanvas, pos)}
            {getLogo(logo, pos)}
            {getNavigation(navigation, pos)}
            {getExtra(extra, pos)}


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
