import React, {Fragment} from 'react';
import {ComponentDisplay} from '../../components/ComponentDisplay';
import {Button, AddButton, DeleteButton, EditButton, ReloadButton, SearchButton} from '../../../src';
import {message} from "antd";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Text from "antd/es/typography/Text";

const onCopy = (e) => {
    message.info(<span><Text code>{e}</Text> copied!</span>);
};

// Example implementation
const Example = (props) => (
    <Fragment>
        <CopyToClipboard
            text={'<AddButton onClick={onClick}/>'}
            onCopy={() => onCopy('<AddButton onClick={onClick}/>')}>
            <AddButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<EditButton onClick={onClick} />'}
            onCopy={() => onCopy('<EditButton onClick={onClick} />')}>
            <EditButton  />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<DeleteButton onClick={onClick} />'}
            onCopy={() => onCopy('<DeleteButton onClick={onClick} />')}>
            <DeleteButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<AddButton onClick={onClick} size=\'default\' color=\'black\'>Hinzufügen</AddButton>'}
            onCopy={() => onCopy('<AddButton onClick={onClick} size=\'default\' color=\'black\'>Hinzufügen</AddButton>')}>
            <AddButton size='default' color='black'>Hinzufügen</AddButton>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<EditButton onClick={onClick} size=\'default\' color=\'orange\'>Bearbeiten</EditButton>'}
            onCopy={() => onCopy('<EditButton onClick={onClick} size=\'default\' color=\'orange\'>Bearbeiten</EditButton>')}>
            <EditButton size='default' color='orange'>Bearbeiten</EditButton>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<DeleteButton onClick={onClick} size=\'small\' color=\'purple\'>Löschen</DeleteButton>'}
            onCopy={() => onCopy('<DeleteButton onClick={onClick} size=\'small\' color=\'purple\'>Löschen</DeleteButton>')}>
            <DeleteButton size='small' color='purple'>Löschen</DeleteButton>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<ReloadButton onClick={onClick} size=\'large\' color=\'pink\'/>'}
            onCopy={() => onCopy('<ReloadButton onClick={onClick} size=\'large\' color=\'pink\'/>')}>
            <ReloadButton size='large' color='pink'/>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<SearchButton onClick={onClick}/>'}
            onCopy={() => onCopy('<SearchButton onClick={onClick}/>')}>
            <SearchButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button onClick={onClick} color=\'green\' text=\'custom\' icon=\'bulb\'>Custom</Button>'}
            onCopy={() => onCopy('<Button onClick={onClick} color=\'green\' text=\'custom\' icon=\'bulb\'>Custom</Button>')}>
            <Button color='green' text='custom' icon='bulb'>Custom</Button>
        </CopyToClipboard>

    </Fragment>
);

// Code example
// language=JS
const code = `
    import React from 'react';
    import { AddButton, DeleteButton, EditButton } from '@react-hangar/antd-components';

    const onClick = () => {
        console.log('do fancy stuff!');
    };
    
    const Example = () => {
        return (
            <Fragment>
                <AddButton onClick={onClick} />
                <EditButton onClick={onClick} />
                <DeleteButton onClick={onClick} />
                
                <AddButton onClick={onClick} size='default' color='black'>Hinzufügen</AddButton>
                <EditButton onClick={onClick} size='default' color='orange'>Bearbeiten</EditButton>
                <DeleteButton onClick={onClick} size='small' color='purple'>Löschen</DeleteButton>
                
                <ReloadButton onClick={onClick} size='large' color='pink' />
                
                <SearchButton onClick={onClick} />
                
                <Button onClick={onClick} color='green' text='custom' icon='bulb'>Custom</Button>
            </Fragment>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    {property: 'onClick', description: 'Function is called on button click', type: 'function'},
    {property: 'color', description: 'optional color of the button', type: 'string'},
    {property: 'size', description: 'optional size (small, default, large)', type: 'string', default: 'default'},
];

export default () => (
    <ComponentDisplay title={'Types'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
