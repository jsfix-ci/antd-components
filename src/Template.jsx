import React from "react";
import {Col, Row} from "antd";

export const Container = (props) => {
    const { children, type, ...restProps } = props;

    switch (type) {
        case '4x16x4':
            return (
                <Row {...restProps}>
                    <Col xl={4}>
                        {children[0]}
                    </Col>

                    <Col xl={16}>
                        {children[1]}
                    </Col>

                    <Col xl={4}>
                        {children[2]}
                    </Col>
                </Row>
            );
        case '20x4':
            return (
                <Row {...restProps}>
                    <Col xl={20}>
                        {children[0]}
                    </Col>

                    <Col xl={4}>
                        {children[1]}
                    </Col>
                </Row>
            );
        case '4x20':
            return (
                <Row test={'asdf'} {...restProps}>
                    <Col xl={4}>
                        {children[0]}
                    </Col>

                    <Col xl={20}>
                        {children[1]}
                    </Col>
                </Row>
            );
        case '12x12':
            return (
                <Row {...restProps}>
                    <Col xl={12}>
                        {children[0]}
                    </Col>

                    <Col xl={12}>
                        {children[1]}
                    </Col>
                </Row>
            );
        default:
            return (
                <Row {...restProps}>
                    <Col xl={24}>
                        {children}
                    </Col>
                </Row>
            )
    }
};