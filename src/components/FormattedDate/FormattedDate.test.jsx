import React from 'react';
import { mount } from 'enzyme';
import FormattedDate from './FormattedDate';

describe('Formatted Date Component', () => {
  test('should return Date only value if format is set as dateOnly', () => {
    const wrapper = mount(
      <FormattedDate format={'dateOnly'}>2021-01-09T01:11:21Z</FormattedDate>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('time').text()).toBe('09/01/2021');
  });

  test('should return Date and Time value if format is set as dateOnly', () => {
    const wrapper = mount(
      <FormattedDate format={'fullDateTime'}>
        2021-02-25T01:11:21Z
      </FormattedDate>,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('time').text()).toBe('February 25th 2021, 6:41:21 am');
  });

  test('should return Date and Time value if format attribute is not passed', () => {
    const wrapper = mount(<FormattedDate>2021-02-25T01:11:21Z</FormattedDate>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('time').text()).toBe('February 25th 2021, 6:41:21 am');
  });

  test('should return Time passed from now if format is set as fromNow', () => {
    const dt = new Date();
    dt.setMinutes(dt.getMinutes() - 2);
    const wrapper = mount(
      <FormattedDate format={'fromNow'}>{dt}</FormattedDate>,
    );
    expect(wrapper.find('time').text()).toBe('2 minutes ago');
  });
});
