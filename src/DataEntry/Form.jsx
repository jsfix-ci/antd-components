import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withForm, FormItem, useL10n as l10n, emptyFn } from '..';
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
    const {record, onSubmit, disableSaveButtonOnError, children, ...restProps} = props;
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

                onSubmit({
                    ...record,
                    ...data
                }, form);
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
        );
    }, {mapProps: true });

    return (<AntdFormWrapper record={record} {...restProps} />);
};

Form.defaultProps = {
    disableSaveButtonOnError: false,
    record: {},
    onSubmit: emptyFn
};

Form.propTypes = {
    disableSaveButtonOnError: PropTypes.bool,
    record: PropTypes.object,
    onSubmit: PropTypes.func
};
