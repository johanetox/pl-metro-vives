import React from 'react'
import PropTypes from 'prop-types';

const MenuItem = ({ iconUrl, label, notification, action }) =>

  <a className="menu__item" href={action} role={label}>
    <img src={iconUrl} alt={label} width="25" />
    <span>{label}</span>
    { notification &&
      <span className="notification">{notification}</span>
    }
    <hr/>
  </a>

MenuItem.propTypes = {
  action: PropTypes.string,
  iconUrl: PropTypes.string,
  label: PropTypes.string,
  iconUrl: PropTypes.string,
  notification: PropTypes.number,
}

export default MenuItem
