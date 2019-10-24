import React from 'react';
import { Display2 } from '../../src';
import ListField from '../examples/Form/ListField';
import Editor from '../examples/Form/Editor';
import Upload from '../examples/Form/Upload';
import CodeMirror from '../examples/Form/CodeMirror';
import {Anchor, Col, Row} from "antd";
const { Link } = Anchor;

/**
 * @return {React.Component}
 */
export const Form = () => {
    return (
        <Row>
            <Col xs={24} md={20}>
                <Display2>Form</Display2>
                <div id={'listField'}><ListField /></div>
                <div id={'editor'}><Editor /></div>
                <div id={'codeMirror'}><CodeMirror /></div>
                <div id={'upload'}><Upload /></div>
            </Col>

            <Col xs={24} md={4} style={{paddingLeft: 20}}>
                <Anchor>
                    <Link href="#Form/#listField" title="List Field" />
                    <Link href="#Form/#editor" title="Editor" />
                    <Link href="#Form/#codeMirror" title="Code Mirror" />
                    <Link href="#Form/#upload" title="Upload" />
                </Anchor>
            </Col>

        </Row>
    );
};
