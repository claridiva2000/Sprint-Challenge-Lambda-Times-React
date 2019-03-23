import React from 'react';
import Tab from './Tab';

import "../../CSS/index.css"



const Tabs = (props) => {

 
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          
          {props.tabs.map(t =><Tab key={t} tab={t}/>)}
      
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
  {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}