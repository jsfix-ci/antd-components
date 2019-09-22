/* global jest, expect, describe, test, beforeAll, afterAll, beforeEach, afterEach */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Button } from '../src';

describe('Button', () => {
    test('it should have a label', () => {
        const sut = mount(
            <Button />
        );

        expect(sut.text()).toBe('Example');
    });
});
