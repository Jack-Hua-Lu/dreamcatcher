import PropTypes from 'prop-types';

export const voterPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
});

export const votersPropTypes = PropTypes.arrayOf(voterPropTypes);

