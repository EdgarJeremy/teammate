/**
 * Base configurations
 */
import React from "react";
import { View, WebView, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default class NewsView extends React.Component {

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <View style={{ width, height }}>
                <WebView
                    scrollEnabled
                    startInLoadingState={true}
                    source={{ uri: this.props.news_url }}
                    style={{ width, height }}
                />
            </View>
        );
    }

}