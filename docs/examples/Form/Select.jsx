import React, { Fragment, useState } from 'react';
import { Avatar } from 'antd';
import faker from 'faker';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { generateImageUrl } from '../../components/utils';
import { Select } from '../../../src';

const generateOption = () => {
    const label = faker.commerce.productName();
    const value = faker.random.number();
    const avatar = generateImageUrl();

    return ({ label, value, avatar });
};

const options = [
    generateOption(),
    generateOption(),
    generateOption(),
    {
        group: {
            label: 'Group1',
            options: [
                generateOption(),
                generateOption(),
                generateOption()
            ]
        }
    }
];

// Example implementation
const Example = () => {

    const [value1, setValue1] = useState(options[0].value);
    const [value2, setValue2] = useState(options[0].value);

    return (
        <Fragment>
            <div>
                <Select
                    style={{ marginBottom: '15px' }}
                    options={options}
                    value={value1}
                    onChange={v => setValue1(v)}
                />
            </div>
            <div>
                <Select
                    showSearch
                    style={{ marginBottom: '15px' }}
                    options={options}
                    value={value2}
                    onChange={v => setValue2(v)}
                    render={(label, { value, avatar }) =>
                        <Fragment>
                            <Avatar src={avatar} size="small"/>&nbsp;
                            <small>Label: </small>{label}<small> | Value: </small>{value}
                        </Fragment>
                    }
                />
            </div>
        </Fragment>
    );
};

// Code example
// language=JS
const code = `
    import React, { Fragment, useState } from 'react';
    import { Avatar } from 'antd';
    import { Select } from '@react-hangar/antd-components';

    const options = [
        [{
            "label": "Rustic Plastic Bacon",
            "value": 36808,
            "avatar": "http://picsum.photos/seed/aut/225/150"
        }, {
            "label": "Awesome Steel Chair",
            "value": 7748,
            "avatar": "http://picsum.photos/seed/adipisci/225/150"
        }, {
            "label": "Practical Frozen Gloves",
            "value": 31034,
            "avatar": "http://picsum.photos/seed/quod/225/150"
        }, {
            "group": {
                "label": "Group1",
                "options": [{
                    "label": "Intelligent Fresh Sausages",
                    "value": 99737,
                    "avatar": "http://picsum.photos/seed/nam/225/150"
                }, {
                    "label": "Handmade Rubber Pizza",
                    "value": 51141,
                    "avatar": "http://picsum.photos/seed/cumque/225/150"
                }, {
                    "label": "Generic Rubber Table",
                    "value": 43621,
                    "avatar": "http://picsum.photos/seed/ut/225/150"
                }]
            }
        }]
    ];

    const [value1, setValue1] = useState(options[0].value);
    const [value2, setValue2] = useState(options[0].value);

    return (
        <Fragment>
            <div>
                <Select
                    style={{ marginBottom: '15px' }}
                    options={options}
                    value={value1}
                    onChange={v => setValue1(v)}
                />
            </div>
            <div>
                <Select
                    showSearch
                    style={{ marginBottom: '15px' }}
                    value={options[1].value}
                    options={options}
                    value={value2}
                    onChange={v => setValue2(v)}
                    render={(label, { value, avatar }) =>
                        <Fragment>
                            <Avatar src={avatar} size="small"/>&nbsp;
                            <small>Label: </small>{label}<small> | Value: </small>{value}
                        </Fragment>
                    }
                />
            </div>
        </Fragment>
    );

    export default Example;

`;

// Component props
const properties = [
    { property: 'options', description: 'select options', type: 'array', default: '[]' },
    { property: 'render', description: 'optional render function for option label', type: 'function', default: '(label, record) => label' },
    { property: '(Inherited)', description: 'Ant design properties are inherited (see: https://ant.design/components/select/#Select-props)' }
];

export default () => (
    <ComponentDisplay title={'Select'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
