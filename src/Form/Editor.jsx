import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Editor as TinyMCE } from '@tinymce/tinymce-react';
import 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/code';
import 'tinymce/plugins/help';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const Editor = forwardRef((props, ref) => {
    const { id, value, 'data-__field': dataField, 'data-__meta': dataMeta, onChange, ...restProps } = props;

    const onEditorChange = (content) => {
        onChange(content);
    };

    return (
        <TinyMCE
            ref={ref}
            value={value}
            onEditorChange={onEditorChange}
            init={restProps}
        />
    );
});

Editor.defaultProps = {
    height: 500,
    menubar: false,
    plugins: ['autolink lists link code help'],
    toolbar:
        'undo redo | formatselect | bold italic backcolor | \
        link alignleft aligncenter alignright alignjustify | \
        bullist numlist outdent indent | removeformat | code help',
    onChange: () => {}
};

Editor.propTypes = {
    height: PropTypes.number,
    menubar: PropTypes.bool,
    plugins: PropTypes.arrayOf(PropTypes.string),
    toolbar: PropTypes.string,
    value: PropTypes.string
};
