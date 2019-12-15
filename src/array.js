const insert = (array, item, index) => {
    if (index !== undefined && index != null && index !== -1) {
        return [...array.slice(0, index + 1), item, ...array.slice(index + 1)];
    }

    return [...array, item];
};

const remove = (array, predicate) => [
    ...array.filter(rec => rec[predicate[0]] !== predicate[1])
];

const removeRecursice = (array, predicate, subElementName) => {
    return array.map(rec => ({ ...rec })).filter(rec => {
        const keepElement = rec[predicate[0]] !== predicate[1];

        if (!keepElement) return false;

        if (rec[subElementName]) {
            return rec[subElementName] = removeRecursice(rec[subElementName], predicate, subElementName);
        }

        return keepElement;
    });
};

const update = (array, predicate, item) => (
    array.map(rec => rec[predicate[0]] === predicate[1] ? item : rec)
);

const updateRecursive = (array, predicate, item, subElementName) => (
    array.map(rec => {
        const newRec = rec[predicate[0]] === predicate[1] ? item : { ...rec };

        if (newRec[subElementName]) {
            newRec[subElementName] = updateRecursive(newRec[subElementName], predicate, item, subElementName);
        }

        return newRec;
    })
);

export const PureArray = {
    insert,
    remove,
    removeRecursice,
    update,
    updateRecursive
};
