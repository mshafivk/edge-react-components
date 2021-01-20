import React from 'react';
import { mount } from 'enzyme';
import useNetworkStatus from './useNetworkStatus';

const CustomComponent = () => {
  const isOnline = useNetworkStatus();
  return <div test-id="is-online">{isOnline.toString()}</div>;
};

describe('useNetworkStatus Hook', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('should return true if value of navigator.onLine is undefined', () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(undefined);
    const wrapper = mount(<CustomComponent />);
    expect(wrapper.find("[test-id='is-online']").text()).toBe('true');
  });

  test('should return true if value of navigator.online returns true', () => {
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);
    const wrapper = mount(<CustomComponent />);
    expect(wrapper.find("[test-id='is-online']").text()).toBe('true');
  });

  test('should return false if value of navigator.online returns false', () => {
    jest
      .spyOn(navigator, 'onLine', 'get')
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false);
    const wrapper = mount(<CustomComponent />);
    expect(wrapper.find("[test-id='is-online']").text()).toBe('false');
    wrapper.unmount();
  });

  test('should call window remove event listener on unmount', () => {
    const map = {};
    window.removeEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const wrapper = mount(<CustomComponent />);
    wrapper.unmount();
    expect(window.removeEventListener).toBeCalled();
  });
});
