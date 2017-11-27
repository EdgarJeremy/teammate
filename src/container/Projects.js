/**
 * Base configuration
 */
import React from "react";
import { Image, Dimensions, ImageBackground } from "react-native";
import {
    Icon,
    Text,
    Content,
    Button
} from "native-base";
import Hr from "react-native-hr";
import styles from "../styles/main";

const { width, height } = Dimensions.get("window");

export default class Projects extends React.Component {

    render() {
        return (
            <Content>
                <ImageBackground style={{width: width,height: height}} source={require("../images/doodle_transparent.png")}>
                    <Image
                        style={styles.menu_icon_hollow}
                        resizeMode="contain"
                        source={require("../images/no_project_img.png")} />
                    <Hr lineColor="#aaaaaa" text="Belum ada project yang anda ikuti" />
                    <Button style={{ marginTop: 20 }} info block>
                        <Icon name="add" />
                        <Text>BUAT PROJECT BARU</Text>
                    </Button>
                    <Text style={{ marginTop: 20, color: "#c0392b", textAlign: "center", fontSize: 13 }}>
                        Atau minta teman anda mengundang anda dalam project mereka
                    </Text>
                </ImageBackground>
            </Content>
        );
    }

}