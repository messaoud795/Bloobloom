import { isEmpty, isEqual } from 'lodash';

export const arePropsEqual = (previousProps, nextProps) =>
  isEqual(previousProps, nextProps);

export const formulateLinkParametersAndValue = (parameter, values) => {
  return isEmpty(values)
    ? ''
    : values.reduce((acc, value) => (acc += `&${parameter}=${value}`), '');
};

export const getScreenWidth = () => {
  return window.screen.width;
};
