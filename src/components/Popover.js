import React from 'react';
import PropTypes from 'prop-types';
import {Popover as RSPopover} from 'reactstrap';

const Popover = props => {
  const {children, is_open, hide_arrow, ...otherProps} = props;
  return (
    <RSPopover isOpen={is_open} hideArrow={hide_arrow} {...otherProps}>
      {children}
    </RSPopover>
  );
};

Popover.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * The children of this component
   */
  children: PropTypes.node,
  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: PropTypes.string,

  /**
   * Specify popover placement.
   */
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end'
  ]),

  /**
   * ID of the component to attach the popover to.
   */
  target: PropTypes.string,

  /**
   * Where to inject the popper DOM node, default body
   */
  container: PropTypes.string,

  /**
   * Whether the Popover is open or not.
   */
  is_open: PropTypes.bool,

  /**
   * Hide popover arrow
   */
  hide_arrow: PropTypes.bool,

  /**
   * CSS class to apply to the popover
   */
  innerClassName: PropTypes.string,

  /**
   * Optionally override show/hide delays - defualt {show: 0, hide: 250}
   */
  delay: PropTypes.oneOfType([
    PropTypes.shape({show: PropTypes.number, hide: PropTypes.number}),
    PropTypes.number
  ]),

  /**
   * Popover offset
   */
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Popover;
