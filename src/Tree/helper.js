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
