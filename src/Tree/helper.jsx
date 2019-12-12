import React from 'react';
import {Tree as AntdTree} from 'antd';

const TreeNode = AntdTree.TreeNode;

export const getNodes = (data, searchValue) => {

    console.log(searchValue, ' searchValue <------------------------------');

    return data.map(item => {
        const index = item.label.indexOf(searchValue);
        const beforeStr = item.label.substr(0, index);
        const afterStr = item.label.substr(index + searchValue.length);
        const label = index > -1 ? (
            <span>{beforeStr}

                <span style={{ color: '#f50' }}>{searchValue}</span>

                {afterStr}
                </span>
        ) : (
            <span>{item.label}</span>
        );

        if (item.submenu) {
            return (
                <TreeNode key={item.key} title={label}>
                    {getNodes(item.submenu)}
                </TreeNode>
            );
        }

        return <TreeNode key={item.key} title={label} />;
    });
};