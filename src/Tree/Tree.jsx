import React, { forwardRef, Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tree as AntdTree } from 'antd';
import nanoid from 'nanoid';
import { emptyFn } from '@root/helper';
import { AddButton, DeleteButton, EditButton } from '@root/Buttons';
import { getParentKey, getSearchDataList } from './helper';
import { TreeFormModal } from '@root/Tree/Form';
import { PureArray } from '@root/array';
import { isEmpty } from '@root/object';
import { Label } from '@root/Tree/Label';
import {Search} from "@root/Tree/Search";

const TreeNode = AntdTree.TreeNode;

export const Tree = forwardRef((props, ref) => {
    const {
        tree = [],
        expandedKeys,
        onAdd,
        onDelete,
        onDrop,
        onSave,
        onSelect,
        onChange,
        searchable,
        editable,
        formItems,
        defaultExpandAll,
        ...restProps
    } = props;

    const [data, setData] = useState(tree);
    const [snapshot, setSnapshot] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedNode, setSelectedNode] = useState({});
    const [searchValue, setSearchValue] = useState('');
    const [expandedKeysData, setExpandedKeysData] = useState(expandedKeys);

    useEffect(() => {
        setData(tree);
    }, [tree]);

    useEffect(() => {
        onChange(data);
    }, [data]);

    const onDropEvent = (event) => {
        const { eventKey: sourceKey, data: record } = event.dragNode.props;
        const { eventKey: targetKey } = event.node.props;

        let updatedTree = PureArray.removeInTree(data, ['key', sourceKey]);
        updatedTree = PureArray.insertInTree(updatedTree, ['key', targetKey], record);

        if (onDrop) {
            onDrop(sourceKey, targetKey, updatedTree)
                .then(() => {
                })
                .catch(() => {
                    setData(tree);
                });
        } else {
            setData(tree);
        }
    };

    const onSearchChange = (expanded, value) => {
        setExpandedKeysData(expanded);
        setSearchValue(value);
    };

    const onExpand = expandedKeys => {
        setExpandedKeysData(expandedKeys);
    };

    let expandConfig = {
        expandedKeys: expandedKeysData
    };

    if (defaultExpandAll) {
        expandConfig = {
            defaultExpandAll: defaultExpandAll
        };
    }

    const onAddBtnClick = () => {
        const defaults = {
            key: nanoid(10),
            label: ''
        };

        const paraentId = selectedNode.key;
        const record = { ...defaults, ...onAdd(defaults) };

        setSnapshot(data);

        setData(
            PureArray.insertInTree(data, ['key', paraentId], record)
        );

        setSelectedNode(record);
        setModalVisible(true);
    };

    const onEditBtnClick = () => {
        setModalVisible(true);
    };

    const onDeleteBtnClick = () => {
        const nodeId = selectedNode.key;
        const updatedTree = PureArray.removeInTree(data, ['key', nodeId]);

        if (onDelete) {
            onDelete(nodeId, updatedTree)
                .then(() => {
                    setSelectedNode({});
                })
                .catch(() => {
                });
        } else {
            setData(updatedTree);
            setSelectedNode({});
        }
    };

    const onSelectNode = (key, e) => {
        let node = key.length > 0 ? e.node.props.data : {};
        setSelectedNode(node);
        onSelect(node, key, e);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const onCancel = () => {
        setData(snapshot);
        hideModal();
    };

    const onSaveNode = (node) => {
        const nodeId = node.key;
        const updatedTree = PureArray.updateInTree(data, ['key', nodeId], node);

        if (onSave) {
            onSave(node, updatedTree)
                .then(() => {
                    setSelectedNode(node);
                    hideModal();
                })
                .catch(() => {
                });
        } else {
            setData(updatedTree);
            setSelectedNode(node);
            hideModal();
        }
    };

    const renderNodes = (data) => {
        return data.map(item => {
            const title = <Label highlightedText={searchValue}>{item.label}</Label>;
            if (item.submenu) {
                return (
                    <TreeNode key={item.key} title={title} data={item}>
                        {renderNodes(item.submenu)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={title} data={item}/>;
        });
    };

    return (
        <Fragment>
            {(searchable) ? <Search tree={tree} onChange={onSearchChange}/> : null}

            {
                (editable)
                    ? <Fragment>
                        <AddButton onClick={onAddBtnClick} size={'small'}/>
                        <EditButton onClick={onEditBtnClick} disabled={isEmpty(selectedNode)} size={'small'}/>
                        <DeleteButton onClick={onDeleteBtnClick} disabled={isEmpty(selectedNode)} size={'small'}/>
                    </Fragment>
                    : null
            }

            <AntdTree
                ref={ref}
                onExpand={onExpand}
                onDrop={onDropEvent}
                onSelect={onSelectNode}
                {...expandConfig}
                {...restProps}
            >
                {renderNodes(data)}
            </AntdTree>

            <TreeFormModal
                formItems={formItems}
                visible={modalVisible}
                onCancel={onCancel}
                onSubmit={onSaveNode}
                record={selectedNode}
            />

        </Fragment>
    );
});

Tree.defaultProps = {
    autoExpandParent: false,
    defaultExpandAll: false,
    editable: false,
    expandedKeys: [],
    searchable: false,
    onAdd: emptyFn,
    onChange: emptyFn,
    onSelect: emptyFn
};

Tree.propTypes = {
    searchable: PropTypes.bool,
    tree: PropTypes.arrayOf(PropTypes.object),
    onAdd: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
    onDrop: PropTypes.func,
    onSave: PropTypes.func,
};
