import React from 'react';
import PropTypes from 'prop-types';
import "../../CSS/index.css"

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

const Tab = props => {
  const selectedClass = props.tab===props.selectedTab? 'tab active-tab' : 'tab'
  return (
    <div
      className={selectedClass}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
};
// /* Replace this dummy click handler function with your selectTabHandler function from props 
//          you'll need to pass the `tab` in as an argument to this handler. */
// Make sure you include PropTypes on your props.

Tab.propTypes = PropTypes.string.isRequired;

export default Tab;
