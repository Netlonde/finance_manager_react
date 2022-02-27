import React from "react";
import ChartBar from "./ChartBar";

import { ChartContainer } from "../styled";


function Chart(props){
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  let totalMaximum = (dataPointsValues.map((value) => value));
  totalMaximum = Math.max(...totalMaximum);

  return(
    <ChartContainer>
      {props.dataPoints.map(dataPoint => (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
      ))}
    </ChartContainer>
  )
}

export default Chart;
