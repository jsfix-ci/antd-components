import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withForm, FormItem, useL10n as l10n } from '..';
import { Form as AntdForm, message } from 'antd';

const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const Form = (props) => {
    const {onSubmit, disableSaveButtonOnError, children, ...restProps} = props;
    const formValidationError = l10n().Validation.form;

    const AntdFormWrapper = withForm((props) => {
        const {form} = props;
        const {getFieldsError} = form;

        useEffect(() => {
            form.validateFields();
        }, []);

        const onHandleSubmit = (e) => {
            e.preventDefault();

            form.validateFieldsAndScroll((error, data) => {
                if (error) {
                    return message.error(formValidationError);
                }

                onSubmit(data, form);
            });
        };

        const formItems = React.Children.map(children, child => {
            if (disableSaveButtonOnError && 'submit' === child.props.htmlType) {
                return React.cloneElement(child, {
                    disabled: hasErrors(getFieldsError())
                });
            }

            if ('FormItem' === child.type.displayName) {
                return (
                    <FormItem {...child.props} form={form}/>
                );
            } else {
                return child;
            }
        });

        return (
            <AntdForm onSubmit={onHandleSubmit}>
                {formItems}
            </AntdForm>
        )
    }, {mapProps: true });

    return (<AntdFormWrapper {...restProps} />);
};

Form.defaultProps = {
    disableSaveButtonOnError: false
};

Form.propTypes = {
    onSubmit: PropTypes.func,
    disableSaveButtonOnError: PropTypes.bool
};
