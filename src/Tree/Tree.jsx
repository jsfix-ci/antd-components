import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Tree as AntdTree } from 'antd';
import { emptyFn } from '@root/helper';
import { useL10n as l10n } from '@root/Locales';
import { AddButton, DeleteButton, EditButton } from '@root/Buttons';
import { findNode, getTreeAfterDrop, getSearchDataList, getParentKey } from './helper';
import * as nanoid from 'nanoid';
import { TreeFormModal } from '@root/Tree/Form';
import { PureArray } from '@root/array';

const TreeNode = AntdTree.TreeNode;
const Search = Input.Search;

export const Tree = (props) => {
    const {
        tree,
        expandedKeys,
        autoExpandParent,
        onDrop,
        onChange,
        onSelect,
        searchable,
        editable,
        formItems,
        defaultExpandAll,
        ...restProps
    } = props;

    const [visible, setVisible] = useState(false);
    const [treeData, setTreeData] = useState(tree);
    const [editing, setEditing] = useState(false);
    const [selectedNode, setSelectedNode] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [expandedKeysData, setExpandedKeysData] = useState(expandedKeys);
    const [isAutoExpandParent, setIsAutoExpandParent] = useState(autoExpandParent);

    const onDropEvent = (event, node, dragNode, dragNodesKeys) => {
        let tree = getTreeAfterDrop(treeData, event);
        setTreeData(tree);
        onDrop(event, node, dragNode, dragNodesKeys);
        onChange(tree);
    };

    const onSearchChange = e => {
        const { value } = e.target;
        const expanded = getSearchDataList(treeData).map(item => {
            if (item.label.indexOf(value) > -1) {
                return getParentKey(item.key, treeData);
            }
            return null;
        }).filter((item, i, self) => item && self.indexOf(item) === i);

        setExpandedKeysData(expanded);
        setSearchValue(value);
        setIsAutoExpandParent(true);
    };

    const onExpand = expandedKeys => {
        setExpandedKeysData(expandedKeys);
        setIsAutoExpandParent(false);
    };

    const getLabel = (item) => {
        const index = item.label.indexOf(searchValue);
        const beforeStr = item.label.substr(0, index);
        const afterStr = item.label.substr(index + searchValue.length);

        return index > -1 ? (
            <span>{beforeStr}
                <span style={{ color: '#f50' }}>{searchValue}</span>
                {afterStr}
                </span>
        ) : (
            <span>{item.label}</span>
        );
    };

    const getNodes = (data) => {
        return data.map(item => {
            let label = getLabel(item);
            if (item.submenu) {
                return (
                    <TreeNode key={item.key} title={label}>
                        {getNodes(item.submenu)}
                    </TreeNode>
                );
            }

            return <TreeNode key={item.key} title={label}/>;
        });
    };

    let expandConfig = {
        expandedKeys: expandedKeysData,
        autoExpandParent: isAutoExpandParent
    };

    if (defaultExpandAll) {
        expandConfig = {
            defaultExpandAll: defaultExpandAll
        };
    }

    const onAddBtnClick = () => {
        let newNode = {
            key: nanoid(),
            submenu: [],

        };

        setVisible(true);
        setEditing(false);
    };

    const onEditBtnClick = () => {
        setVisible(true);
        setEditing(true);
    };

    const onDeleteBtnClick = () => {
        setTreeData(
            PureArray.removeInTree(treeData, ['key', selectedNode.key])
        );

        setSelectedNode(null);
    };

    const onSelectNode = (key, e) => {
        let node = findNode(treeData, e.node.props);
        (key.length > 0) ? setSelectedNode(node) : setSelectedNode(null);
        onSelect(node, key, e);
    };

    const hideModal = () => {
        setVisible(false);
    };

    const onSaveNode = (data) => {
        if (data.key) {
            setTreeData(
                PureArray.updateInTree(treeData, ['key', selectedNode.key], data)
            );
            onChange(treeData);
        } else {
            let newNode = {
                key: nanoid(),
                submenu: [],
                ...data
            };

            setTreeData(
                PureArray.insertInTree(treeData, ['key', selectedNode.key], newNode)
            );
            setSelectedNode(newNode);
        }

        hideModal();
    };

    return (
        <Fragment>
            {(searchable) ? <Search style={{ marginBottom: 8 }} placeholder={l10n().Form.searchText}
                                    onChange={onSearchChange}/> : null}

            {(editable) ?
                <Fragment>
                    <AddButton onClick={onAddBtnClick} size={'small'}/>
                    <EditButton onClick={onEditBtnClick} disabled={!selectedNode} size={'small'}/>
                    <DeleteButton onClick={onDeleteBtnClick} disabled={!selectedNode} size={'small'}/>
                </Fragment> : null}

            <AntdTree
                onExpand={onExpand}
                onDrop={onDropEvent}
                onSelect={onSelectNode}
                {...expandConfig}
                {...restProps}
            >
                {getNodes(treeData)}
            </AntdTree>

            <TreeFormModal
                editing={editing}
                formItems={formItems}
                visible={visible}
                hideModal={hideModal}
                onSubmit={onSaveNode}
                selectedNode={(editing) ? selectedNode : {}}
            />

        </Fragment>
    );
};

Tree.defaultProps = {
    searchable: false,
    editable: false,
    defaultExpandAll: false,
    onDrop: emptyFn,
    onChange: emptyFn,
    onSelect: emptyFn,
    tree: [],
    autoExpandParent: false,
    expandedKeys: []
};

Tree.propTypes = {
    searchable: PropTypes.bool,
    onChange: PropTypes.func,
    tree: PropTypes.arrayOf(PropTypes.object),
};
