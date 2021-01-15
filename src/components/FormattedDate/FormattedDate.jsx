import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const formats = {
  fullDateTime: 'MMMM Do YYYY, h:mm:ss a',
  dateOnly: 'DD/MM/YYYY',
  fromNow: 'fromNow',
};

function FormattedDate({ format, children }) {
  const isFromNow = format === formats['fromNow'];
  return (
    <Moment format={!isFromNow && formats[format]} fromNow={isFromNow}>
      {children}
    </Moment>
  );
}

FormattedDate.propTypes = {
  format: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.instanceOf(Date)])
    .isRequired,
};
FormattedDate.defaultProps = {
  format: 'fullDateTime',
};

export default FormattedDate;
