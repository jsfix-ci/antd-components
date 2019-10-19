import React from 'react';
import {UploadButton} from '..';
import styled from 'styled-components';
import AntdUpload from 'antd/lib/upload/Upload';
import message from 'antd/lib/message';

const hasFileTypes = (type) => {
    return type.indexOf('[') !== -1;
};

const getFileTypes = (type) => {
    return type.substring(type.indexOf('[') + 1, type.length - 1).split(',');
};

const validate = (type) => {

    let fileTypes = '';

    if (hasFileTypes(type)) {
        fileTypes = getFileTypes(type);
    }

    if (fileTypes.length > 0) {
        return (file) => {
            if (!fileTypes.includes(file.type)) {
                message.error('You can only upload ' + fileTypes + ' file!', 8);
                return false;
            }
        };
    }
};

export const Upload = (props) => {
    let {
        onUploaded = () => {},
        onChange = () => {},
        data = [],
        customRequestData,
        listType = '',
        action = '',
        type = 'file',
        children = 'Upload',
        ...restProps
    } = props;

    let StyledUpload = AntdUpload;

    data.map((rec, idx) => {
        return rec.uid = idx;
    });

    if (type.indexOf('image') !== -1) {
        listType = 'picture';
        StyledUpload = styled(AntdUpload)`                     
            .ant-upload-list-item {
                float: left;
                width: 200px;
                margin-right: 8px;
            }
        `;
    }

    const onChangeData = info => {

        onChange(info);

        if (info.file.status === 'uploading') {
            return;
        }
        if (info.file.status === 'done') {
            onUploaded(info.file.response);
        }
    };

    return (
        <StyledUpload
            defaultFileList={[...data]}
            action={action}
            listType={listType}
            beforeUpload={validate(type)}
            onChange={onChangeData}
            data={customRequestData}
            {...restProps}
        >
            <UploadButton> {children} </UploadButton>
        </StyledUpload>
    );
};