import { Text, BlueHeader, GreyHeader, ImportantText } from './Typography';
import { shallow } from 'enzyme';
import React from 'react';

describe('Featured', () => {
it('renders correctly', () => {
        expect(shallow(<Text>text</Text>)).toMatchSnapshot();
        expect(shallow(<BlueHeader inline>blue header</BlueHeader>)).toMatchSnapshot();
        expect(shallow(<GreyHeader>grey header</GreyHeader>)).toMatchSnapshot();
        expect(shallow(<ImportantText>important text</ImportantText>)).toMatchSnapshot();
    })
})