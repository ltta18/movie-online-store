import React from "react";
import NumberFormat from "react-number-format";
import { Text } from "react-native";

const PriceItem = ({ price, cls }) => {
  return (
    <NumberFormat
      value={price}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      renderText={(value) => <Text style={cls}>{value}</Text>}
    />
  );
};

export default PriceItem;
