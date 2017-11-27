/**
 * Base configuration
 */
import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import {
    View,
    Thumbnail,
    Content,
    List,
    ListItem,
    Left,
    Body,
    Right,
    Text,
    Button,
    Badge
} from "native-base";
import styles from "../styles/main";
import Api from "../services/Api";

const {width,height} = Dimensions.get("window");

export default class Chat extends React.Component {

    state = {
        ready: false,
        users: []
    };

    componentWillMount() {
        this.fetchList();
    }

    fetchList() {
        Api.random_user(10, (response) => {
            this.setState({ ready: true, users: response.results });
        }, (err) => {
            alert(err);
        });
    }

    render() {
        if (this.state.users.length === 0) {
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
                    <List>
                        {this.state.users.map((user, index) => {
                            return (
                                <ListItem itemDivider={false} style={styles.chat_list_item} button key={index} avatar button onPress={() => { console.log(user) }}>
                                    <Left>
                                        <Thumbnail source={{ uri: user.picture.thumbnail }} />
                                    </Left>
                                    <Body style={{ borderBottomWidth: 0 }}>
                                        <Text>{user.name.first + " " + user.name.last}</Text>
                                        <Text note>{user.location.city + "," + user.location.state}</Text>
                                    </Body>
                                    <Right style={{ borderBottomWidth: 0 }}>
                                        <Text note>20:31</Text>
                                        <Badge info style={{ marginTop: 4, padding: 0, borderRadius: 100, paddingRight: 0, paddingLeft: 0, width: 20, height: 20 }}>
                                            <Text style={{ fontSize: 10, lineHeight: 20 }}>34</Text>
                                        </Badge>
                                    </Right>
                                </ListItem>
                            );
                        })}
                    </List>
                </Content>
            );
        }
    }

}