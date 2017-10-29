import _ from 'lodash'
import React, { Component } from 'react'
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines'

const average = (data) => {
  return _.round(_.sum(data) / data.length)
}

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} height={120} width={100}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}