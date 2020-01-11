import Immutable from 'immutable';

export const Position = {
    BEFORE: -1,
    IN: 0,
    AFTER: 1
};

const defaults = {
    childrenKey: 'submenu',
    key: 'key'
};

const getConfig = config => ({
    ...defaults,
    ...config
});

const insert = (array, item, index) => {
    const list = Immutable.fromJS(array);

    if (index !== undefined && index != null && index !== -1) {
        return list.insert(index + 1, item).toJS();
    } else if (index === -1) {
        return list.unshift(item).toJS();
    } else {
        return list.push(item).toJS();
    }
};

const insertInTree = (tree, nodeId, item, pos = Position.IN, config) => {
    const { key, childrenKey } = getConfig(config);

    const list = Immutable.fromJS(tree);
    const path = findPath(list, node => node.get(key) === nodeId, childrenKey);

    if (path) {
        const snapshotPath = [...path];
        let index;

        if (Position.BEFORE === pos) {
            index = snapshotPath.pop() - 1;
        } else if (Position.AFTER === pos) {
            index = snapshotPath.pop();
        }

        if (index !== undefined) {
            path.pop();
            path.pop();

            return Immutable.updateIn(tree, path, v => {
                if (path.length === 0) {
                    return insert(v, item, index);
                }

                return {
                    ...v,
                    [childrenKey]: insert(v[childrenKey], item, index)
                };
            });
        }

        return Immutable.updateIn(tree, path, v => ({
            ...v,
            [childrenKey]: Immutable.List(v[childrenKey]).push(item).toJS()
        }));
    }

    return list.push(item).toJS();
};

const remove = (array, predicate) => {
    const index = array.findIndex(rec => rec[predicate[0]] === predicate[1]);
    return Immutable.remove(array, index);
};

const removeInTree = (tree, nodeId, config) => {
    const { key, childrenKey } = getConfig(config);
    const path = findPath(Immutable.fromJS(tree), node => node.get(key) === nodeId, childrenKey);
    return Immutable.removeIn(tree, path);
};

const update = (array, predicate, item) => {
    const index = array.findIndex(rec => rec[predicate[0]] === predicate[1]);
    return Immutable.update(array, index, () => item);
};

const updateInTree = (tree, nodeId, item, config) => {
    const { key, childrenKey } = getConfig(config);
    const path = findPath(Immutable.fromJS(tree), node => node.get(key) === nodeId, childrenKey);
    return Immutable.updateIn(tree, path, v => ({ ...v, ...item }));
};

const moveInTree = (tree, sourceNode, targetNode, pos, config) => {
    const { key, childrenKey } = getConfig(config);
    const list = Immutable.fromJS(tree);
    const path = findPath(list, node => node.get(key) === sourceNode, childrenKey);
    const record = Immutable.getIn(tree, path);
    const updatedTree = removeInTree(tree, sourceNode, config);
    return insertInTree(updatedTree, targetNode, record, pos, config);
};

const findPath = (tree, predicate, childrenKey) => {
    let path = null;
    if (Immutable.List.isList(tree)) {
        tree.some((child, i) => {
            path = findPath(child, predicate, childrenKey);
            if (path) return path.unshift(i); // always returns truthy
        });
        return path;
    }
    if (predicate(tree)) return [];

    if (tree.get(childrenKey)) {
        path = findPath(tree.get(childrenKey), predicate, childrenKey);
    }

    if (path) return [childrenKey].concat(path);
};

export const PureArray = {
    insert,
    insertInTree,
    remove,
    removeInTree,
    update,
    updateInTree,
    moveInTree,
    findPath
};
