import Immutable from 'immutable';

const insert = (array, item, index) => {
    const list = Immutable.fromJS(array);
    return (index !== undefined && index != null && index !== -1)
        ? list.insert(index + 1, item).toJS()
        : list.push(item).toJS();
};

const insertInTree = (tree, predicate, item, childrenKey = 'submenu') => {
    const list = Immutable.fromJS(tree);
    const path = findPath(list, node => node.get(predicate[0]) === predicate[1], childrenKey);

    if (path) {
        return Immutable.updateIn(tree, path, v => {
            return {
                ...v,
                [childrenKey]: Immutable.List(v[childrenKey]).push(item).toJS()
            };
        });
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
    path = findPath(tree.get(childrenKey), predicate, childrenKey);
    if (path) return [childrenKey].concat(path);
};

export const PureArray = {
    insert,
    insertInTree,
    remove,
    removeInTree,
    update,
    updateInTree,
    findPath
};
