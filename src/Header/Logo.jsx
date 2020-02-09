import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Logo = (props) => {
    const { children, to, image, version, ...restProps } = props;

    const lineHeight = (version) ? '50px' : '64px';

    const renderElements = () => (
        <div className={'logo'} {...restProps}>
            {
                image ? <div className={'image'}><img src={image}/></div> : null
            }
            <div>
                <span className={'text'} style={{ lineHeight }}>
                    {children}
                </span>
                {version ? <span className={'version'}> {version} </span> : null}
            </div>
        </div>
    );

    if (to) {
        return (
            <Link to={to}>
                {renderElements()}
            </Link>
        );
    }

    return (
        <Fragment>
            {renderElements()}
        </Fragment>
    );
};

Logo.defaultProps = {
};

Logo.propTypes = {
    children: PropTypes.string,
    to: PropTypes.string,
    image: PropTypes.string,
    version: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

Logo.displayName = 'Logo';
