import React from 'react';
import AntdForm from 'antd/lib/form/Form';


/**
 * @return {React.Component}
 *
 * @constructor
 */

const Form = (props) => {
    return (
        <div>
            hallo
            {props.children}
        </div>
    )

};
Form.create = AntdForm.create;
Form.Item = AntdForm.Item;
export default AntdForm.create()(Form);