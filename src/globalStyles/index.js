import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // display styles
  dpCt: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dpSa: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  dpSb: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // padding
  p5: {
    padding: 5,
  },

  // margin
  m5: {
    marginLeft: 5,
    marginRight: 5,
  },

  m10: {
    marginLeft: 10,
    marginRight: 10,
  },

  // text align
  txCt: {
    textAlign: "center",
  },

  // width + height
  fw: {
    width: "100%",
  },
  fh: {
    height: "100%",
  },
});
