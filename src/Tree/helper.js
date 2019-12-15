export const addNode = (tree, node, targetNode) => {

    if (!node.label) {
        tree.push(targetNode);
        return tree;
    }

    tree.forEach((rec) => {
        if (rec.label === node.label) {
            if (rec.submenu) {
                rec.submenu.push(targetNode);
            } else {
                rec.submenu = [targetNode];
            }

        } else if (rec.submenu) {
            return addNode(rec.submenu, node, targetNode);
        }
    });
    return tree;
};

export const editNode = (tree, node, targetNode) => {
    tree.forEach((rec, idx) => {
        if (rec.key === node.key) {
            tree[idx] = targetNode
        } else if (rec.submenu) {
            return editNode(rec.submenu, node, targetNode);
        }
    });
    return tree;
};

export const removeNode = function (tree, targetNode) {
    tree.forEach((node, idx) => {
        if (node.key === targetNode.key) {
            tree.splice(idx, 1);
            return tree;
        }
        else if (node.submenu) return removeNode(node.submenu, targetNode)
    });
    return tree;
};

export const findNode = (data, node) => {
    let result = [];
    data.filter((parentNode) => {
        if (parentNode.key === node.eventKey) {
            result.push(parentNode);
        } else if (parentNode.submenu) {
            let childNode = findNode(parentNode.submenu, node);
            if (childNode) {
                result.push(childNode);
            }
        }
    });
    return result[0];
};