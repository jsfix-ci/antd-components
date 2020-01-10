/* global jest, expect, describe, test, beforeAll, afterAll, beforeEach, afterEach */

import { Position, PureArray } from '@root/array';

describe('array', () => {

    const tree = [
        {
            key: '1',
            submenu: [
                { key: '2' },
                { key: '3' }
            ]
        }
    ];

    describe('insertInTree', () => {
        test('insert root node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        { key: '2' },
                        { key: '3' }
                    ]
                },
                { key: '4' }
            ];

            expect(PureArray.insertInTree(tree, null, { key: '4' })).toEqual(expected);
        });

        test('insert level 2 node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        { key: '2' },
                        { key: '3' },
                        { key: '4' }
                    ]
                }
            ];

            expect(PureArray.insertInTree(tree, '1', { key: '4' })).toEqual(expected);
        });
    });

    describe('updateInTree', () => {
        test('update root node', () => {
            const expected = [
                {
                    key: '4',
                    submenu: [
                        { key: '2' },
                        { key: '3' }
                    ]
                }
            ];

            expect(PureArray.updateInTree(tree, '1', { key: '4' })).toEqual(expected);
        });

        test('remove level 2 node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        { key: '5' },
                        { key: '3' }
                    ]
                }
            ];

            expect(PureArray.updateInTree(tree, '2', { key: '5' })).toEqual(expected);
        });
    });

    describe('removeInTree', () => {
        test('remove root node', () => {
            const expected = [];

            expect(PureArray.removeInTree(tree, '1')).toEqual(expected);
        });

        test('remove level 2 node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        { key: '2' }
                    ]
                }
            ];

            expect(PureArray.removeInTree(tree, '3')).toEqual(expected);
        });
    });

    describe('moveInTree', () => {

        const tree = [
            {
                key: '1',
                submenu: [
                    { key: '2' },
                    { key: '3' },
                    { key: '4' }
                ]
            }
        ];

        test('move node in other node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        {
                            key: '3',
                            submenu: [
                                { key: '2' }
                            ]
                        },
                        { key: '4' }
                    ]
                }
            ];

            expect(PureArray.moveInTree(tree, '2', '3', Position.IN)).toEqual(expected);
        });

        test('move node in after/before other node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        { key: '3' },
                        { key: '2' },
                        { key: '4' }
                    ]
                }
            ];

            expect(PureArray.moveInTree(tree, '2', '3', Position.AFTER)).toEqual(expected);
            expect(PureArray.moveInTree(tree, '2', '4', Position.BEFORE)).toEqual(expected);
        });

        test('move node after a root node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        { key: '3' },
                        { key: '4' }
                    ]
                },
                { key: '2' }
            ];

            expect(PureArray.moveInTree(tree, '2', '1', Position.AFTER)).toEqual(expected);
        });

        test('move node before a root node', () => {
            const expected = [
                { key: '2' },
                {
                    key: '1',
                    submenu: [
                        { key: '3' },
                        { key: '4' }
                    ]
                }
            ];

            expect(PureArray.moveInTree(tree, '2', '1', Position.BEFORE)).toEqual(expected);
        });

        describe('when tree has no submenus', () => {

            const tree = [
                { key: '1' },
                { key: '2' },
                { key: '3' },
                { key: '4' }
            ];

            test('move node after/before other root node', () => {
                const expected = [
                    { key: '1' },
                    { key: '2' },
                    { key: '4' },
                    { key: '3' }
                ];

                expect(PureArray.moveInTree(tree, '4', '3', Position.BEFORE)).toEqual(expected);
                expect(PureArray.moveInTree(tree, '4', '2', Position.AFTER)).toEqual(expected);
            });

            test('move node before first position', () => {
                const expected = [
                    { key: '4' },
                    { key: '1' },
                    { key: '2' },
                    { key: '3' }
                ];

                expect(PureArray.moveInTree(tree, '4', '1', Position.BEFORE)).toEqual(expected);
            });

            test('move node after first position', () => {
                const expected = [
                    { key: '1' },
                    { key: '4' },
                    { key: '2' },
                    { key: '3' }
                ];

                expect(PureArray.moveInTree(tree, '4', '1', Position.AFTER)).toEqual(expected);
            });

            test('move node in other node', () => {
                const expected = [
                    { key: '1' },
                    {
                        key: '2',
                        submenu: [
                            { key: '4' }
                        ]
                    },
                    { key: '3' }
                ];

                expect(PureArray.moveInTree(tree, '4', '2', Position.IN)).toEqual(expected);
            });
        });
    });
});
