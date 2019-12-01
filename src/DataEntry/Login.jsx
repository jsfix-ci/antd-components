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
    const { handleSubmit, rememberMe, forgotPassword, forgotPasswordUrl } = props;

    return (
        <Form onSubmit={handleSubmit}>
            <FormItem fieldType={'string'} label={l10n().Login.username} dataIndex={'username'} required/>
            <FormItem fieldType={'password'} label={l10n().Login.password} dataIndex={'password'} required/>
            <FormItem
                fieldType={'checkbox'}
                fieldProps={{title: l10n().Login.rememberMe}}
                dataIndex={'rememberMe'}
                show={rememberMe}
            />

            {(forgotPassword) ? <Link to={forgotPasswordUrl}>Forgot Password</Link> : ''}

            <div>
                <Button style={{clear: 'both', marginTop: 15}} htmlType="submit">{l10n().Login.loginText}</Button>
            </div>

        </Form>
    );
};

Login.defaultProps = {
    onSubmit: emptyFn,
    rememberMe: true,
    forgotPassword: true,
    forgotPasswordUrl: '/forgot-password'
};

Login.propTypes = {
    onSubmit: PropTypes.func,
    rememberMe: PropTypes.bool,
    forgotPassword: PropTypes.bool,
    forgotPasswordUrl: PropTypes.string
};
