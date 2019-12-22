import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Tree as AntdTree } from 'antd';
import nanoid from 'nanoid';
import { emptyFn } from '@root/helper';
import { useL10n as l10n } from '@root/Locales';
import { AddButton, DeleteButton, EditButton } from '@root/Buttons';
import { getParentKey, getSearchDataList } from './helper';
import { TreeFormModal } from '@root/Tree/Form';
import { PureArray } from '@root/array';
import { isEmpty } from '@root/object';
import { Label } from '@root/Tree/Label';

const TreeNode = AntdTree.TreeNode;
const Search = Input.Search;

export const Tree = (props) => {
    const {
        tree,
        expandedKeys,
        autoExpandParent,
        onAdd,
        onDelete,
        onDrop,
        onSave,
        onSelect,
        searchable,
        editable,
        formItems,
        defaultExpandAll,
        ...restProps
    } = props;

    const [data, setData] = useState(tree);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedNode, setSelectedNode] = useState({});
    const [searchValue, setSearchValue] = useState('');
    const [expandedKeysData, setExpandedKeysData] = useState(expandedKeys);

    useEffect(() => {
        setData(tree);
    }, [tree]);

    const onDropEvent = (event) => {
        const { eventKey: sourceKey, data: record } = event.dragNode.props;
        const { eventKey: targetKey } = event.node.props;

        let updatedTree = PureArray.removeInTree(data, ['key', sourceKey]);
        updatedTree = PureArray.insertInTree(updatedTree, ['key', targetKey], record);

        onDrop(sourceKey, targetKey, updatedTree)
            .then(() => {
            })
            .catch(() => {
                setData(tree);
            });
    };

    const onSearchChange = e => {
        const { value } = e.target;
        const expanded = getSearchDataList(tree).map(item => {
            if (item.label.indexOf(value) > -1) {
                return getParentKey(item.key, tree);
            }
            return null;
        }).filter((item, i, self) => item && self.indexOf(item) === i);

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
            label: '',
            submenu: []
        };

        const paraentId = selectedNode.key;
        const record = { ...defaults, ...onAdd(defaults) };

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

        onDelete(nodeId, updatedTree)
            .then(() => {
                setSelectedNode({});
            })
            .catch(() => {
            });
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
        setData(tree);
        hideModal();
    };

    const onSaveNode = (node) => {
        const nodeId = node.key;
        const updatedTree = PureArray.updateInTree(data, ['key', nodeId], node);

        onSave(node, updatedTree)
            .then(() => {
                setSelectedNode(node);
                hideModal();
            })
            .catch(() => {
            });
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

            return <TreeNode key={item.key} title={title}/>;
        });
    };

    return (
        <Fragment>
            {
                (searchable)
                    ? <Search
                        style={{ marginBottom: 8 }}
                        placeholder={l10n().Form.searchText}
                        onChange={onSearchChange}
                    /> : null
            }

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
                onExpand={onExpand}
                onDrop={onDropEvent}
                onSelect={onSelectNode}
                autoExpandParent
                {...expandConfig}
                {...restProps}
            >
                {renderNodes(data)}
            </AntdTree>

            <TreeFormModal
                formItems={formItems}
                visible={modalVisible}
                onCancel={onCancel}
                hideModal={hideModal}
                onSubmit={onSaveNode}
                record={selectedNode}
            />

        </Fragment>
    );
};

Tree.defaultProps = {
    autoExpandParent: false,
    defaultExpandAll: false,
    editable: false,
    expandedKeys: [],
    searchable: false,
    tree: [],
    onAdd: emptyFn,
    onDelete: () => Promise.resolve(),
    onDrop: () => Promise.resolve(),
    onSave: () => Promise.resolve(),
    onSelect: emptyFn
};

Tree.propTypes = {
    searchable: PropTypes.bool,
    tree: PropTypes.arrayOf(PropTypes.object),
    onAdd: PropTypes.func,
    onDelete: PropTypes.func,
    onDrop: PropTypes.func,
    onSave: PropTypes.func,
};
