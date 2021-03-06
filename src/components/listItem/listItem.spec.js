import React from "react";
import { shallow } from "enzyme";
import {findByTestAttr, checkProps} from "../../../Utils";
import ListItem from "./index";

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {

        it('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some text'
            };
            const propsErrors = checkProps(ListItem, expectedProps);
            expect(propsErrors).toBeUndefined()
        });

    });

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some Text'
            }
            wrapper = shallow(<ListItem {...props} />)
        });

        it('should renders without error', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1)
        });

        it('should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1)
        });

        it('should render a desc', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1)
        });

    });

    describe('Should NOT render', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some Text'
            }
            wrapper = shallow(<ListItem {...props} />)
        });

        it('Should Component is not rendered', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0)
        });

    });

});