import React from "react";
import FormattedDate from "./FormattedDate";

export default {
  title: "FormattedDate",
  component: FormattedDate,
};

const Tpl = () => <FormattedDate>2021-01-09T01:11:21Z</FormattedDate>;

const tableStyle = {
  borderCollapse: "collapse",
  border: "1px solid",
};
const rowStyle = {
  border: "1px solid",
};
const CustomTpl = () => (
  <table cellPadding="2" border="1" style={tableStyle}>
    <thead>
      <tr>
        <th>Format</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr style={rowStyle}>
        <td>fullDateTime</td>
        <td>
          <FormattedDate format={"fullDateTime"}>
            2021-01-09T01:11:21Z
          </FormattedDate>
        </td>
      </tr>
      <tr style={rowStyle}>
        <td>dateOnly</td>
        <td>
          <FormattedDate format={"dateOnly"}>
            2021-01-09T01:11:21Z
          </FormattedDate>
        </td>
      </tr>
    </tbody>
  </table>
);

export const CustomTemplate = CustomTpl.bind({});

export const FormattedDateDefault = Tpl.bind({});
FormattedDateDefault.args = {
  format: "MMM DD YYYY HH MM SS",
};

CustomTemplate.storyName = "Custom Formats";
FormattedDateDefault.storyName = "Default";
