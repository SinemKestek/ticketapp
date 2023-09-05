import React from "react";
import { DatePicker } from "antd";
import moment from "moment/moment";
import locale from "antd/locale/tr_TR";
import { ConfigProvider } from "antd";
import { useGlobalContext } from "../Context/GlobalState";
const { RangePicker } = DatePicker;

const DateFilter = () => {
  const { timing, setTiming } = useGlobalContext();
  console.log(timing);
  return (
    <div>
      <ConfigProvider locale={locale}>
        <RangePicker
          style={{ maxWidth: 200 }}
          onChange={(values) => {
            console.log(values);
            setTiming(
              values.map((value) => {
                return moment(value).format("DD/MM/YYYY");
              })
            );
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default DateFilter;
