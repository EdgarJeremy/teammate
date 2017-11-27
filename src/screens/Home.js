/**
 * Base configuration
 */
import React from "react";
import {
    Container,
    Header,
    Content,
    Tab,
    Tabs,
    TabHeading,
    Text,
    Icon,
    Body,
    Title,
    Subtitle,
    Right,
    Button,
    H2
} from "native-base";
import { Image, ImageBackground, Dimensions } from "react-native";
import styles from "../styles/main.js";
import Chat from "../container/Chat";

const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {

    getHeading(title,icon = null) {
        if(icon) {
            return (
                <Icon name={icon} fontSize={5} style={{ color: "white" }} />
            );
        } else {
            return (
                <TabHeading style={styles.header}>
                    <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>{title}</Text>
                </TabHeading>
            )
        }
    }

    render() {
        return (
            <Container>
                <Header hasTabs androidStatusBarColor="#3eb2ff" style={styles.header}>
                    <Image source={require("../images/text_only_white.png")} style={{ height: 25 }} resizeMode="contain" />
                </Header>
                <Tabs initialPage={0} tabBarUnderlineStyle={{ borderBottomWidth: 0.1 }}>
                    <Tab heading={
                        this.getHeading("NEWS")
                    }>

                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.header}>
                            {/* <Icon name="people" fontSize={5} style={{ color: "white" }} /> */}
                            <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>CHAT</Text>
                        </TabHeading>
                    }>
                        <Chat />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.header}>
                            {/* <Icon name="clipboard" fontSize={5} style={{ color: "white" }} /> */}
                            <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>PROJECTS</Text>
                        </TabHeading>
                    }>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.header}>
                            {/* <Icon name="clipboard" fontSize={5} style={{ color: "white" }} /> */}
                            <Text style={{ fontWeight: "bold", fontSize: 12, color: "white" }}>SHARING</Text>
                        </TabHeading>
                    }>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={styles.header}>
                            <Icon name="settings" fontSize={5} style={{ color: "white" }} />
                        </TabHeading>
                    }>
                    </Tab>
                </Tabs>
            </Container>
        );
    }

}