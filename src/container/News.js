/**
 * Base configuration
 */
import React from "react";
import { Image, ActivityIndicator, Dimensions } from "react-native";
import {
    Card,
    CardItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Button,
    Icon,
    Text,
    Content,
    View
} from "native-base";
import Hr from "react-native-hr";
import Api from "../services/Api";
import { Actions } from "react-native-router-flux";

const { width, height } = Dimensions.get("window");

export default class News extends React.Component {

    state = {
        news: []
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.fetchList();
    }

    fetchList() {
        Api.hacker_news((response) => {
            this.setState({ news: response.articles });
            console.log(response);
        }, (err) => {
            console.log(err);
        })
    }

    render() {
        if (this.state.news.length === 0) {
            return (
                <Content>
                    <View style={{ width: width, height: height / 2, alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="#aaaaaa" />
                    </View>
                </Content>
            )
        } else {
            return (
                <Content>
                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <Hr lineColor="#aaaaaa" text="Sumber Berita (Hacker-News)"/>
                    </View>
                    {this.state.news.map((article, index) => {
                        return (
                            <Card key={index}>
                                <CardItem button onPress={() => { Actions.NewsView({ news_url: article.url }) }}>
                                    <Left>
                                        <Body>
                                            <Text>{article.title.substring(0, 50) + "..."}</Text>
                                            <Text note>{article.description}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    {/* <Image source={{ uri: article.urlToImage }} style={{ height: 200, width: null, flex: 1 }} /> */}
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="archive" />
                                            <Text>Simpan</Text>
                                        </Button>
                                    </Left>
                                    <Right>
                                        <Text>{article.publishedAt}</Text>
                                    </Right>
                                </CardItem>
                            </Card>
                        );
                    })}
                </Content>
            );
        }
    }

}