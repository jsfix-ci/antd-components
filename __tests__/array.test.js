/* global jest, expect, describe, test, beforeAll, afterAll, beforeEach, afterEach */

import { Position, PureArray } from '@root/array';

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

    describe('moveInTree', () => {

        const tree = [
            {
                key: '1',
                submenu: [
                    {
                        key: '2'
                    },
                    {
                        key: '3'
                    },
                    {
                        key: '4'
                    }
                ]
            }
        ];

        test('move in node', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        {
                            key: '3',
                            submenu: [
                                {
                                    key: '2'
                                }
                            ]
                        },
                        {
                            key: '4'
                        }
                    ]
                }
            ];

            const record = {
                key: '2'
            };

            expect(PureArray.moveInTree(tree, '2', '3', Position.IN, record)).toEqual(expected);
        });

        test('move in after target', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        {
                            key: '3'
                        },
                        {
                            key: '2'
                        },
                        {
                            key: '4'
                        }
                    ]
                }
            ];

            const record = {
                key: '2'
            };

            expect(PureArray.moveInTree(tree, '2', '3', Position.AFTER, record)).toEqual(expected);
        });

        test('move in after target root', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        {
                            key: '3'
                        },
                        {
                            key: '4'
                        }
                    ]
                },
                {
                    key: '2'
                }
            ];

            const record = {
                key: '2'
            };

            expect(PureArray.moveInTree(tree, '2', '1', Position.AFTER, record)).toEqual(expected);
        });

        test('move in before target', () => {
            const expected = [
                {
                    key: '1',
                    submenu: [
                        {
                            key: '2'
                        },
                        {
                            key: '4'
                        },
                        {
                            key: '3'
                        }
                    ]
                }
            ];

            const record = {
                key: '4'
            };

            expect(PureArray.moveInTree(tree, '4', '3', Position.BEFORE, record)).toEqual(expected);
        });

        test('move in before target root', () => {
            const expected = [
                {
                    key: '2'
                },
                {
                    key: '1',
                    submenu: [
                        {
                            key: '3'
                        },
                        {
                            key: '4'
                        }
                    ]
                }
            ];

            const record = {
                key: '2'
            };

            expect(PureArray.moveInTree(tree, '2', '1', Position.BEFORE, record)).toEqual(expected);
        });

        test('move before flat tree', () => {

            const tree = [
                {
                    key: '1'
                },
                {
                    key: '2'
                },
                {
                    key: '3'
                },
                {
                    key: '4'
                }
            ];

            const expected = [
                {
                    key: '1'
                },
                {
                    key: '2'
                },
                {
                    key: '4'
                },
                {
                    key: '3'
                }
            ];

            const record = {
                key: '4'
            };

            expect(PureArray.moveInTree(tree, '4', '3', Position.BEFORE, record)).toEqual(expected);
        });

        test('move before flat tree 2', () => {

            const tree = [
                {
                    key: '1'
                },
                {
                    key: '2'
                },
                {
                    key: '3'
                },
                {
                    key: '4'
                }
            ];

            const expected = [
                {
                    key: '4'
                },
                {
                    key: '1'
                },
                {
                    key: '2'
                },
                {
                    key: '3'
                }
            ];

            const record = {
                key: '4'
            };

            expect(PureArray.moveInTree(tree, '4', '1', Position.BEFORE, record)).toEqual(expected);
        });

        test('move after flat tree', () => {

            const tree = [
                {
                    key: '1'
                },
                {
                    key: '2'
                },
                {
                    key: '3'
                },
                {
                    key: '4'
                }
            ];

            const expected = [
                {
                    key: '1'
                },
                {
                    key: '2'
                },
                {
                    key: '4'
                },
                {
                    key: '3'
                }
            ];

            const record = {
                key: '4'
            };

            expect(PureArray.moveInTree(tree, '4', '2', Position.AFTER, record)).toEqual(expected);
        });

        test('move after flat tree 2', () => {

            const tree = [
                {
                    key: '1'
                },
                {
                    key: '2'
                },
                {
                    key: '3'
                },
                {
                    key: '4'
                }
            ];

            const expected = [
                {
                    key: '1'
                },
                {
                    key: '4'
                },
                {
                    key: '2'
                },
                {
                    key: '3'
                }
            ];

            const record = {
                key: '4'
            };

            expect(PureArray.moveInTree(tree, '4', '1', Position.AFTER, record)).toEqual(expected);
        });

        test('move in flat tree', () => {

            const tree = [
                {
                    key: '1'
                },
                {
                    key: '2'
                },
                {
                    key: '3'
                },
                {
                    key: '4'
                }
            ];

            const expected = [
                {
                    key: '1'
                },
                {
                    key: '2',
                    submenu: [
                        {
                            key: '4'
                        }
                    ]
                },
                {
                    key: '3'
                }
            ];

            const record = {
                key: '4'
            };

            expect(PureArray.moveInTree(tree, '4', '2', Position.IN, record)).toEqual(expected);
        });

    });
});
