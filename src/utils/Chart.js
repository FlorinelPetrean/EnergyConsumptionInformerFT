import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis} from "recharts";

function SimpleChart(props){
    return (
    <React.Fragment>
      <ResponsiveContainer width="100%" aspect={3} >
       <LineChart data= {props.data}>
         <XAxis dataKey ="timestamp" />
         <Line dataKey="energyConsumption" />
         <YAxis />
       </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
   
    );
};
export default SimpleChart