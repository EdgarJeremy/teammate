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
import News from "../container/News";
import Chat from "../container/Chat";
import Projects from "../container/Projects";

const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {

    getHeading(title, icon = null) {
        if (icon) {
            return (
                <TabHeading style={styles.header}>
                    <Icon name={icon} fontSize={5} style={{ color: "white" }} />
                </TabHeading>
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
                    <Tab heading={this.getHeading("NEWS")}>
                        <News />
                    </Tab>
                    <Tab heading={this.getHeading("CHAT")}>
                        <Chat />
                    </Tab>
                    <Tab heading={this.getHeading("PROJECTS")}>
                        <Projects />
                    </Tab>
                    <Tab heading={this.getHeading("SHARING")}>
                    </Tab>
                    <Tab heading={this.getHeading("SETTING", "settings")}>
                    </Tab>
                </Tabs>
            </Container>
        );
    }

}