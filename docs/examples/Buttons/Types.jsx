import React, {Fragment, useState} from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import {
    Button,
    AddButton,
    DeleteButton,
    EditButton,
    ReloadButton,
    SearchButton,
    CancelButton,
    CloseButton,
    UndoButton,
    SettingsButton,
    BasketButton,
    SaveButton,
    UploadButton,
    BackButton,
    IconButton
} from '../../../src';
import {message, Row, Select} from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Text from 'antd/es/typography/Text';
import {Divider} from 'antd';

const onCopy = (e) => {
    message.info(<span><Text code>{e}</Text> copied!</span>);
};

// Example implementation
const Example = () => {

    const [locale, switchLocale] = useState('en-EN');

    const onLocaleChange = (value) => {
        switchLocale(value);
    };

    return (
        <Fragment>

            <Row style={{margin: 3}}>
                <Select defaultValue={locale} style={{ width: 140 }} onChange={onLocaleChange}>
                    <Select.Option value="en-EN">Locale: en-EN</Select.Option>
                    <Select.Option value="de-DE">Locale: de-DE</Select.Option>
                    <Select.Option value="sr-SP">Locale: sr-SP</Select.Option>
                </Select>
            </Row>

            <Divider />

            <CopyToClipboard
                text={`<AddButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<AddButton locale='${locale}' onClick={onClick}/>`)}>
                <AddButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<DeleteButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<DeleteButton locale='${locale}' onClick={onClick}/>`)}>
                <DeleteButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<EditButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<EditButton locale='${locale}' onClick={onClick}/>`)}>
                <EditButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<ReloadButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<ReloadButton locale='${locale}' onClick={onClick}/>`)}>
                <ReloadButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<BackButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<BackButton locale='${locale}' onClick={onClick}/>`)}>
                <BackButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<SearchButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<SearchButton locale='${locale}' onClick={onClick}/>`)}>
                <SearchButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<SaveButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<SaveButton locale='${locale}' onClick={onClick}/>`)}>
                <SaveButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<AddButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<AddButton locale='${locale}' onClick={onClick}/>`)}>
                <CancelButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<CloseButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<CloseButton locale='${locale}' onClick={onClick}/>`)}>
                <CloseButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<UndoButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<UndoButton locale='${locale}' onClick={onClick}/>`)}>
                <UndoButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<SettingsButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<SettingsButton locale='${locale}' onClick={onClick}/>`)}>
                <SettingsButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<BasketButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<BasketButton locale='${locale}' onClick={onClick}/>`)}>
                <BasketButton  locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={`<UploadButton locale='${locale}' onClick={onClick}/>`}
                onCopy={() => onCopy(`<UploadButton locale='${locale}' onClick={onClick}/>`)}>
                <UploadButton locale={locale}/>
            </CopyToClipboard>

            <CopyToClipboard
                text={'<Button onClick={onClick} icon=\'bulb\'>Custom</Button>'}
                onCopy={() => onCopy('<Button onClick={onClick} icon=\'bulb\'>Custom</Button>')}>
                <Button icon='bulb'>Custom</Button>
            </CopyToClipboard>

            <CopyToClipboard
                text={'<IconButton type="minus-circle-o"/>'}
                onCopy={() => onCopy('<IconButton type="minus-circle-o"/>')}>
                <IconButton type="minus-circle-o"/>
            </CopyToClipboard>
        </Fragment>
    );
};

// Code example
// language=JS
const code = `
    import React, { Fragment } from 'react';
    import {
        Button,
        AddButton,
        DeleteButton,
        EditButton,
        ReloadButton,
        SearchButton,
        CancelButton,
        CloseButton,
        UndoButton,
        SettingsButton,
        BasketButton,
        SaveButton,
        UploadButton,
        BackButton,
        IconButton
    } from '@react-hangar/antd-components';

    const onClick = () => {
        console.log('do fancy stuff!');
    };

    const Example = () => {
        return (
            <Fragment>
                <AddButton onClick={onClick}/>
                <DeleteButton onClick={onClick}/>
                <EditButton onClick={onClick}/>
                <ReloadButton onClick={onClick}/>
                <BackButton onClick={onClick}/>
                <SearchButton onClick={onClick}/>
                <SaveButton onClick={onClick}/>
                <CancelButton onClick={onClick}/>
                <CloseButton onClick={onClick}/>
                <UndoButton onClick={onClick}/>
                <SettingsButton onClick={onClick}/>
                <BasketButton onClick={onClick}/>
                <UploadButton onClick={onClick}/>
                <Button onClick={onClick} icon='bulb'>Custom</Button>
                <IconButton type="minus-circle-o"/>
            </Fragment>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    { property: 'onClick', description: 'Function is called on button click', type: 'function' },
    { property: 'color', description: 'optional color of the button', type: 'string' },
    {property: 'locale', description: 'available locales: "en-EN", "de-DE", "sr-SP"', type: 'string', default: 'en-EN'},
    {
        property: '(Inherited)',
        description: 'Ant design properties are inherited (see: https://ant.design/components/button/)'
    },
];

export default () => (
    <Fragment>
        <ComponentDisplay title={'Types'} code={code} properties={properties}>
            <Example/>
        </ComponentDisplay>
    </Fragment>
);
