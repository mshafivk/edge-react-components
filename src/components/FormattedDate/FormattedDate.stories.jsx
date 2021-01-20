import React from 'react';
import FormattedDate from './FormattedDate';

export default {
  title: 'FormattedDate',
  component: FormattedDate,
};

const Tpl = (args) => (
  <div>
    {true}
    <FormattedDate {...args}>{args.children}</FormattedDate>
  </div>
);

export const FullDateTime = Tpl.bind({});
FullDateTime.args = {
  format: 'fullDateTime',
  children: '2021-01-09T01:11:21Z',
};

export const DateOnly = Tpl.bind({});

DateOnly.args = {
  format: 'dateOnly',
  children: '2021-01-09T01:11:21Z',
};

export const FromNow = Tpl.bind({});

FromNow.args = {
  format: 'fromNow',
  children: '2021-01-10T01:11:21Z',
};
