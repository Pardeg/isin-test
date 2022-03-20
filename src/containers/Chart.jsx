import React from "react";
import {ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid} from "recharts";
import styled from 'styled-components';

const StyledChartContainer = styled.div`
  height: 400px;
  width: 900px;
  position: relative;
`

export const IsinChart = ({data = [], yName = ''}) => {

    return (<StyledChartContainer>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart width={700}
                           height={300}
                           margin={{top: 10, right: 40, bottom: 10, left: 10}}
                           data={data}>
                    <XAxis dataKey='date'/>
                    <YAxis dataKey={yName}/>
                    <Line dataKey='pv' stroke='#D3D3D3'
                          label={<Label/>}
                          isAnimationActive={false}
                          dot={{strokeWidth: 2, fill: '#D3D3D3'}}
                          strokeWidth={2}/>
                    <CartesianGrid stroke="#ccc"/>
                </LineChart>
            </ResponsiveContainer>
        </StyledChartContainer>
    )
}

const Label = (props) => {
    const {x, y, stroke, value} = props;
    return (<>
        <text x={x} y={y} style={{stroke: 'white', 'strokeWidth': '0.1em'}}>
            {value}
        </text>
        <text x={x}
              fill={stroke}
              y={y}>
            {value}
        </text>
    </>)
}
