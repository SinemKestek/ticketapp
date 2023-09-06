import React from "react";
import { DatePicker } from "antd";
import moment from "moment/moment";
import locale from "antd/locale/tr_TR";
import { ConfigProvider } from "antd";

const { RangePicker } = DatePicker;

const DateFilter = ({ timing, setTiming }) => {
  return (
    <div>
      <ConfigProvider locale={locale}>
        <RangePicker
          style={{ maxWidth: 200 }}
          onChange={(values) => {
            setTiming(
              values.map((value) => {
                {
                  console.log(value);
                }
                return moment(value.$d).format("YYYY/MM/DD");
              })
            );
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default DateFilter;
