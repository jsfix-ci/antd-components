import React from 'react';
import { Button, Form, FormItem, useL10n as l10n } from '..';
import PropTypes from 'prop-types';
import { emptyFn } from '../helper';
import { Link } from 'react-router-dom';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const Login = (props) => {
    const { onSubmit, showRememberMe, showForgotPassword, forgotPasswordUrl } = props;

    return (
        <Form onSubmit={onSubmit}>
            <FormItem fieldType={'string'} label={l10n().Login.username} dataIndex={'username'} required/>
            <FormItem fieldType={'password'} label={l10n().Login.password} dataIndex={'password'} required/>

            {(showRememberMe) ? <FormItem
                fieldType={'checkbox'}
                fieldProps={{title: l10n().Login.rememberMe}}
                dataIndex={'rememberMe'}
            /> : ''}

            {(showForgotPassword) ? <Link to={forgotPasswordUrl}>Forgot Password</Link> : ''}

            <div>
                <Button style={{clear: 'both', marginTop: 15}} htmlType="submit">{l10n().Login.loginText}</Button>
            </div>

        </Form>
    );
};

Login.defaultProps = {
    onSubmit: emptyFn,
    showRememberMe: true,
    showForgotPassword: true,
    forgotPasswordUrl: '/forgot-password'
};

Login.propTypes = {
    onSubmit: PropTypes.func,
    showRememberMe: PropTypes.bool,
    showForgotPassword: PropTypes.bool,
    forgotPasswordUrl: PropTypes.string
};
