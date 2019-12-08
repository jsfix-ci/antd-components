import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, FormItem } from '@root/DataEntry';
import { useL10n as l10n } from '@root/Locales';
import { emptyFn } from '@root/helper';
import { Button } from '@root/Buttons';

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

            {showRememberMe ? <FormItem
                fieldType={'checkbox'}
                fieldProps={{ title: l10n().Login.rememberMe }}
                dataIndex={'rememberMe'}
            /> : null}

            {showForgotPassword ? <Link to={forgotPasswordUrl}>Forgot Password</Link> : null}

            <div>
                <Button style={{ clear: 'both', marginTop: 15 }} htmlType="submit">{l10n().Login.loginText}</Button>
            </div>
        </Form>
    );
};

Login.defaultProps = {
    onSubmit: emptyFn,
    showRememberMe: false,
    showForgotPassword: false,
    forgotPasswordUrl: '/forgot-password'
};

Login.propTypes = {
    onSubmit: PropTypes.func,
    showRememberMe: PropTypes.bool,
    showForgotPassword: PropTypes.bool,
    forgotPasswordUrl: PropTypes.string
};
