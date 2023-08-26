import React from 'react'

import { DatePicker } from 'antd';
const {RangePicker}=DatePicker


const DateFilter= () => {
  return (
    <div style={{margin:20}}>
   <RangePicker></RangePicker>

    </div>
  )
}

export default DateFilter;