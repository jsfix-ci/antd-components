export const add = (tree, node, newNode) => {

    if (!node.label) {
        tree.push(newNode);
        return tree;
    }

    tree.filter((rec) => {
        if (rec.label === node.label) {
            if (typeof rec.submenu !== 'undefined') {
                rec.submenu.push(newNode);
            } else {
                rec.submenu = [newNode];
            }

        } else if (rec.submenu) {
            return add(rec.submenu, node, newNode);
        }
    });

    return tree;
};

export const edit = (tree, node, editNode) => {
    tree.forEach((rec, idx) => {
        if (rec.key === node.key) {
            tree[idx] = editNode
        } else if (rec.submenu) {
            return edit(rec.submenu, node, editNode);
        }
    });
    return tree;
};

export const remove = function (data, node) {
    return data.filter((e, idx) => {

        let nodeKey = node.key;

        if (node.length > 0) {
            nodeKey = node[0].key;
        }

        if (e.key === nodeKey) {
            data.splice(idx, 1);
            return data;
        }
        else if (e.submenu) return remove(e.submenu, node)
    })
};

export const findNodeInState = (data, node) => {
    let result = [];
    data.filter((parentNode) => {
        if (parentNode.key === node.eventKey) {
            result.push(parentNode);
        } else if (typeof parentNode.submenu !== 'undefined') {
            let childNode = findNodeInState(parentNode.submenu, node);
            if (typeof childNode !== 'undefined') {
                result.push(childNode);
            }
        }
    });
    return result[0];
};