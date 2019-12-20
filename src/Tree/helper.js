export const findNode = (tree, targetNode) => {
    let result = [];
    tree.forEach((node) => {
        if (node.key === targetNode.eventKey) {
            result.push(node);
        } else if (node.submenu) {
            let childNode = findNode(node.submenu, targetNode);
            if (childNode) {
                result.push(childNode);
            }
        }
    });

    return result[0];
};

export const getTreeAfterDrop = (treeData, event) => {

    const dropKey = event.node.props.eventKey;
    const dragKey = event.dragNode.props.eventKey;
    const dropPos = event.node.props.pos.split('-');
    const dropPosition = event.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
            if (item.key === key) {
                return callback(item, index, arr);
            }
            if (item.submenu) {
                return loop(item.submenu, key, callback);
            }
        });
    };

    const data = [...treeData];

    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
    });

    if (!event.dropToGap) {
        loop(data, dropKey, item => {
            item.submenu = item.submenu || [];
            item.submenu.push(dragObj);
        });
    } else if (
        (event.node.props.submenu || []).length > 0 &&
        event.node.props.expanded &&
        dropPosition === 1
    ) {
        loop(data, dropKey, item => {
            item.submenu = item.submenu || [];
            item.submenu.unshift(dragObj);
        });
    } else {
        let ar;
        let i;
        loop(data, dropKey, (item, index, arr) => {
            ar = arr;
            i = index;
        });
        if (dropPosition === -1) {
            ar.splice(i, 0, dragObj);
        } else {
            ar.splice(i + 1, 0, dragObj);
        }
    }

    return data;

};

export const getSearchDataList = (treeData) => {
    const dataList = [];
    const generateList = data => {
        for (let i = 0; i < data.length; i++) {
            const node = data[i];
            const {key, label} = node;
            dataList.push({key, label: label});
            if (node.submenu) {
                generateList(node.submenu);
            }
        }
    };

    generateList(treeData);
    return dataList;
};

export const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.submenu) {
            if (node.submenu.some(item => item.key === key)) {
                parentKey = node.key;
            } else if (getParentKey(key, node.submenu)) {
                parentKey = getParentKey(key, node.submenu);
            }
        }
    }
    return parentKey;
};
