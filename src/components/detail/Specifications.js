import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { DataTable } from "react-native-paper";
import globalStyles from "../../globalStyles";

const specs = {
  title: "Title",
  release_date: "Release Date",
  overview: "Overview",
  genres: "Genres",
  production_company: "Production Commpany",
};

const listToStr = (list) => {
  return list.map((item) => item.name).join(", ");
};

export default function Specifications({ item }) {
  return (
    <View style={[globalStyles.dpCt, styles.container]}>
      <Text style={styles.specsTitle}>Detail</Text>
      <DataTable>
        {Object.keys(specs).map((key, index) => (
          <DataTable.Row
            key={index}
            style={index % 2 ? styles.evenRow : styles.oddRow}
          >
            <DataTable.Cell style={styles.leftCell}>
              <Text style={styles.leftCellContent}>{specs[key]}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={styles.rightCell}>
              <Text numberOfLines={2} style={styles.rightCellContent}>
                {Array.isArray(item[key]) ? listToStr(item[key]) : item[key]}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  specsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  oddRow: {
    flex: 1,
    flexWrap: "wrap",
  },
  evenRow: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#F6F6F6",
  },
  leftCell: {
    flex: 1,
    flexWrap: "wrap",
    marginRight: 10,
  },
  rightCell: {
    flex: 2,
    flexWrap: "wrap",
  },
});
