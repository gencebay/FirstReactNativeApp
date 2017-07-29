// AlbumDetail Component
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Alert, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import SharedFeatures from "./../utils/SharedFeatures";
import BuyButton from "./Button";

class AlbumDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: this.props.album.thumbnail }}
            />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>
              {this.props.album.title}
            </Text>
            <Text>
              {this.props.album.artist}
            </Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri: this.props.album.image }}
          />
        </CardSection>
        <CardSection>
          <BuyButton onPress={() => Linking.openURL(this.props.album.url)}>
            Buy Now
          </BuyButton>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3,
    marginRight: 6
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
