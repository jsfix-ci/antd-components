import Immutable from 'immutable';

export const Position = {
    BEFORE: -1,
    IN: 0,
    AFTER: 1
};

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

const insertInTree = (tree, predicate, item, pos, childrenKey = 'submenu') => {
    const list = Immutable.fromJS(tree);
    const path = findPath(list, node => node.get(predicate[0]) === predicate[1], childrenKey);

    if (path) {
        const snapshotPath = [...path];

        if (Position.BEFORE === pos) {
            path.pop();
            path.pop();

            if (path.length === 0) {
                return Immutable.updateIn(tree, path, v => {
                    return (
                        insert(v, item, snapshotPath.pop() - 1)
                    );
                });
            }

            return Immutable.updateIn(tree, path, v => {
                return ({
                    ...v,
                    [childrenKey]: insert(v[childrenKey], item, snapshotPath.pop() - 1)
                });
            });
        } else if (Position.AFTER === pos) {
            path.pop();
            path.pop();

            if (path.length === 0) {
                return Immutable.updateIn(tree, path, v => {
                    return (
                        insert(v, item, snapshotPath.pop())
                    );
                });
            }

            return Immutable.updateIn(tree, path, v => {
                return ({
                    ...v,
                    [childrenKey]: insert(v[childrenKey], item, snapshotPath.pop())
                });
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

const removeInTree = (tree, predicate, childrenKey = 'submenu') => {
    const path = findPath(Immutable.fromJS(tree), node => node.get(predicate[0]) === predicate[1], childrenKey);
    return Immutable.removeIn(tree, path);
};

const update = (array, predicate, item) => {
    const index = array.findIndex(rec => rec[predicate[0]] === predicate[1]);
    return Immutable.update(array, index, () => item);
};

const updateInTree = (tree, predicate, item, childrenKey = 'submenu') => {
    const path = findPath(Immutable.fromJS(tree), node => node.get(predicate[0]) === predicate[1], childrenKey);
    return Immutable.updateIn(tree, path, v => ({ ...v, ...item }));
};

const moveInTree = (tree, sourceKey, targetKey, pos, record) => {
    let updatedTree = removeInTree(tree, ['key', sourceKey]);
    return insertInTree(updatedTree, ['key', targetKey], record, pos);
};

const findPath = (tree, predicate, childrenKey = 'submenu') => {
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
