import React from 'react';
import {UploadButton} from '../index';
import AntdUpload from 'antd/lib/upload/Upload';
import message from 'antd/lib/message';

import './Upload.scss';

const getListType = (type) => {
    if (typeof type === 'object') {
        if (type.image) {
            return 'picture';
        }

    } else if (typeof type === 'string') {
        if (type === 'image') {
            return 'picture';
        }
    }
};

const getFileTypes = (type) => {
    if (typeof type === 'object') {
        if (type.image) {
            return type.image;
        } else if (type.file) {
            return type.file;
        } else {
            message.error('invalid type. see property description in docs. ');
        }
    }
};

const validate = (type) => {
    let fileTypes = getFileTypes(type);

    if (fileTypes && fileTypes.length > 0) {
        return (file) => {
            let needle = file.type.replace('image/', '').replace('file/', '');
            if (!fileTypes.includes(needle)) {
                message.error('You can only upload "' + fileTypes + '" files!', 8);
                return false;
            }
        };
    }

    return true;
};

export const Upload = (props) => {
    let {
        onUploaded = () => {},
        onChange = () => {},
        defaultFileList = [],
        customRequestData,
        listType = '',
        action = '',
        type = '',
        children = 'Upload',
        ...restProps
    } = props;

    defaultFileList.map((rec, idx) => {
        return rec.uid = idx;
    });

    listType = getListType(type);

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
        <AntdUpload
            className='hangar-upload'
            defaultFileList={[...defaultFileList]}
            action={action}
            listType={listType}
            beforeUpload={validate(type)}
            onChange={onChangeData}
            data={customRequestData}
            {...restProps}
        >
            <UploadButton> {children} </UploadButton>
        </AntdUpload>
    );
};
