import React from "react";

import { ChartBarContainer } from "../styled";

function ChartBar(props){
  let barFillHeight = '0%';

  if(props.maxValue > 0) {
    barFillHeight = Math.round((props.value/props.maxValue) * 100) + '%';
  }

  return(
    <ChartBarContainer>
      <div className="chartbar-inner">
        <div className="chartbar-fill"
          style={{height: barFillHeight}}>
        </div>
      </div>

      <div className="chartbar-label">
        {props.label}
      </div>
    </ChartBarContainer>
  )
}

export default ChartBar;
