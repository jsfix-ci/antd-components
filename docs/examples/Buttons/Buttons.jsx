import React, {Fragment} from 'react';
import {ComponentDisplay} from '../../components/ComponentDisplay';
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
    SaveButton
} from '../../../src';
import {message} from "antd";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Text from "antd/es/typography/Text";

const onCopy = (e) => {
    message.info(<span><Text code>{e}</Text> copied!</span>);
};

// Example implementation
const Example1 = () => (
    <Fragment>
        <CopyToClipboard
            text={'<AddButton onClick={onClick}/>'}
            onCopy={() => onCopy('<AddButton onClick={onClick}/>')}>
            <AddButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<DeleteButton onClick={onClick} />'}
            onCopy={() => onCopy('<DeleteButton onClick={onClick} />')}>
            <DeleteButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<EditButton onClick={onClick} />'}
            onCopy={() => onCopy('<EditButton onClick={onClick} />')}>
            <EditButton  />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<ReloadButton onClick={onClick}/>'}
            onCopy={() => onCopy('<ReloadButton onClick={onClick} />')}>
            <ReloadButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<SearchButton onClick={onClick}/>'}
            onCopy={() => onCopy('<SearchButton onClick={onClick}/>')}>
            <SearchButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<SaveButton onClick={onClick}/>'}
            onCopy={() => onCopy('<SaveButton onClick={onClick}/>')}>
            <SaveButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<CancelButton onClick={onClick}/>'}
            onCopy={() => onCopy('<CancelButton onClick={onClick}/>')}>
            <CancelButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<CloseButton onClick={onClick}/>'}
            onCopy={() => onCopy('<CloseButton onClick={onClick}/>')}>
            <CloseButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<UndoButton onClick={onClick}/>'}
            onCopy={() => onCopy('<UndoButton onClick={onClick}/>')}>
            <UndoButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<SettingsButton onClick={onClick}/>'}
            onCopy={() => onCopy('<SettingsButton onClick={onClick}/>')}>
            <SettingsButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<BasketButton onClick={onClick}/>'}
            onCopy={() => onCopy('<BasketButton onClick={onClick}/>')}>
            <BasketButton />
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button onClick={onClick} icon=\'bulb\'>Custom</Button>'}
            onCopy={() => onCopy('<Button onClick={onClick} icon=\'bulb\'>Custom</Button>')}>
            <Button icon='bulb'>Custom</Button>
        </CopyToClipboard>
    </Fragment>
);

// Code example
// language=JS
const code1 = `
    import React, {Fragment} from 'react';
    import { Button } from '@react-hangar/antd-components';

    const onClick = () => {
        console.log('do fancy stuff!');
    };
    
    const Example = () => {
        return (
            <Fragment>
                <AddButton onClick={onClick} />
                <DeleteButton onClick={onClick} />
                <EditButton onClick={onClick} />           
                <ReloadButton onClick={onClick} />
                <SearchButton onClick={onClick} />
                <SaveButton onClick={onClick} />
                <CancelButton onClick={onClick} />
                <CloseButton onClick={onClick} />
                <UndoButton onClick={onClick} />
                <SettingsButton onClick={onClick} />
                <BasketButton onClick={onClick} />
                <Button onClick={onClick} icon='bulb'>Custom</Button>
            </Fragment>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    {property: 'onClick', description: 'Function is called on button click', type: 'function'},
    {property: 'color', description: 'optional color of the button', type: 'string'},
    {property: '(Inherited)', description: 'Ant design properties are inherited (see: https://ant.design/components/button/)'},
];

// Example implementation
const Example2 = () => (
    <Fragment>
        <CopyToClipboard
            text={'<Button color=\'black\' onClick={onClick}>Red</Button>'}
            onCopy={() => onCopy('<Button color=\'black\' onClick={onClick} >Red</Button>')}>
            <Button color='black'>Black</Button>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button color=\'red\' onClick={onClick}>Red</Button>'}
            onCopy={() => onCopy('<Button color=\'red\' onClick={onClick} >Red</Button>')}>
            <Button color='red'>Red</Button>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button color=\'blue\' onClick={onClick} >Blue</Button>'}
            onCopy={() => onCopy('<Button color=\'blue\' onClick={onClick} >Blue</Button>')}>
            <Button color='blue'>Blue</Button>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button color=\'green\' onClick={onClick} >Green</Button>'}
            onCopy={() => onCopy('<Button color=\'green\' onClick={onClick} >Green</Button>')}>
            <Button color='green'>Green</Button>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button color=\'yellow\' onClick={onClick} >Yellow</Button>'}
            onCopy={() => onCopy('<Button color=\'yellow\' onClick={onClick} >Yellow</Button>')}>
            <Button color='yellow'>Yellow</Button>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button color=\'orange\' onClick={onClick} >Orange</Button>'}
            onCopy={() => onCopy('<Button color=\'orange\' onClick={onClick} >Orange</Button>')}>
            <Button color='orange'>Orange</Button>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button color=\'pink\' onClick={onClick} >Pink</Button>'}
            onCopy={() => onCopy('<Button color=\'pink\' onClick={onClick} >Pink</Button>')}>
            <Button color='pink'>Pink</Button>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button color=\'#00aded\' onClick={onClick} >Custom1</Button>'}
            onCopy={() => onCopy('<Button color=\'#00aded\' onClick={onClick} >Custom1</Button>')}>
            <Button color='#00aded'>Custom1</Button>
        </CopyToClipboard>

        <CopyToClipboard
            text={'<Button color=\'#671089\' onClick={onClick} >Custom2</Button>'}
            onCopy={() => onCopy('<Button color=\'#671089\' onClick={onClick} >Custom2</Button>')}>
            <Button color='#671089'>Custom2</Button>
        </CopyToClipboard>
    </Fragment>
);

// Code example
// language=JS
const code2 = `
    import React, {Fragment} from 'react';
    import { AddButton, DeleteButton, EditButton } from '@react-hangar/antd-components';

    const onClick = () => {
        console.log('do fancy stuff!');
    };
    
    const Example = () => {
        return (
            <Fragment>
                <Button color='black' onClick={onClick}>Red</Button>
                <Button color='red' onClick={onClick}>Red</Button>
                <Button color='blue' onClick={onClick} >Blue</Button>
                <Button color='green' onClick={onClick} >Green</Button>         
                <Button color='yellow' onClick={onClick} >Yellow</Button>
                <Button color='orange' onClick={onClick} >Orange</Button>
                <Button color='pink' onClick={onClick} >Pink</Button>           
                <Button color='#00aded' onClick={onClick} >Custom1</Button>           
                <Button color='#671089' onClick={onClick} >Custom2</Button>           
            </Fragment>
        );
    };

    export default Example;
`;

export default () => (
    <Fragment>
        <ComponentDisplay title={'Types'} code={code1} properties={properties}>
            <Example1/>
        </ComponentDisplay>

        <ComponentDisplay title={'Colors'} code={code2} properties={properties}>
            <Example2/>
        </ComponentDisplay>
    </Fragment>
);
