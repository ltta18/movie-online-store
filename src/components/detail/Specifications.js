import React from "react";
import globalStyles from "../../globalStyles";
import { StyleSheet, View, Text } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import { useSelector } from "react-redux";

const specs = {
  title: "Title",
  release_date: "Release Date",
  overview: "Overview",
  genres: "Genres",
  production_companies: "Production Company",
  vote_average: "Vote Average",
  homepage: "Home Page",
};

const listToStr = (list) => {
  return list.map((film) => film.name).join(", ");
};

const Specifications = () => {
  // Component displays film's detailed info

  const film = useSelector((state) => state.filmReducer.fetchDetail);

  return (
    <View style={[globalStyles.dpCt, styles.container]}>
      <Text style={styles.specsTitle}>Detail</Text>

      <Grid style={[globalStyles.fw, styles.grid]}>
        {Object.keys(specs).map((key, index) => (
          <Row
            key={index}
            style={[
              globalStyles.p5,
              index % 2 ? styles.evenRow : styles.oddRow,
            ]}
          >
            {/* Specification attributes */}
            <Col size={25}>
              <Text>{specs[key]}</Text>
            </Col>

            {/* Specification values */}
            <Col size={75} style={globalStyles.m5}>
              {film && (
                <Text numberOfLines={15} minHeight={150}>
                  {Array.isArray(film[key]) ? listToStr(film[key]) : film[key]}
                </Text>
              )}
            </Col>
          </Row>
        ))}
      </Grid>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  grid: {
    borderColor: "lightgrey",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,
  },
  specsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  evenRow: {
    backgroundColor: "#F6F6F6",
  },
});

export default Specifications;
