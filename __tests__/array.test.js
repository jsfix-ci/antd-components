/* global jest, expect, describe, test, beforeAll, afterAll, beforeEach, afterEach */

import { PureArray } from '@root/array';

describe('array', () => {

    const tree = [
        {
            key: '1',
            submenu: [
                {
                    key: '2',
                    submenu: []
                },
                {
                    key: '3',
                    submenu: []
                }
            ]
        }
    ];

    describe('insertInTree', () => {
        test('insert level 1 node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        {
                            key: '2',
                            submenu: []
                        },
                        {
                            key: '3',
                            submenu: []
                        }
                    ]
                },
                {
                    key: '4',
                    submenu: []
                }
            ];

            expect(PureArray.insertInTree(tree, ['key', null], { key: '4', submenu: [] })).toEqual(expected);
        });

        test('insert level 2 node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        {
                            key: '2',
                            submenu: []
                        },
                        {
                            key: '3',
                            submenu: []
                        },
                        {
                            key: '4',
                            submenu: []
                        }
                    ]
                }
            ];

            expect(PureArray.insertInTree(tree, ['key', '1'], { key: '4', submenu: [] })).toEqual(expected);
        });
    });

    describe('updateInTree', () => {
        test('update level 1 node', () => {
            const expected = [
                {
                    key: '4',
                    submenu: [
                        {
                            key: '2',
                            submenu: []
                        },
                        {
                            key: '3',
                            submenu: []
                        }
                    ]
                }
            ];

            expect(PureArray.updateInTree(tree, ['key', '1'], { key: '4' })).toEqual(expected);
        });

        test('remove level 2 node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        {
                            key: '5',
                            submenu: []
                        },
                        {
                            key: '3',
                            submenu: []
                        }
                    ]
                }
            ];

            expect(PureArray.updateInTree(tree, ['key', '2'], { key: '5' })).toEqual(expected);
        });
    });

    describe('removeInTree', () => {
        test('remove level 1 node', () => {
            const expected = [];

            expect(PureArray.removeInTree(tree, ['key', '1'])).toEqual(expected);
        });

        test('remove level 2 node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        {
                            key: '2',
                            submenu: []
                        }
                    ]
                }
            ];

            expect(PureArray.removeInTree(tree, ['key', '3'])).toEqual(expected);
        });
    });
});
