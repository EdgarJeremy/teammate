import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const {width,height} = Dimensions.get("window");

export default styles = StyleSheet.create({

    login_img_container: {
        alignItems: "center",
        justifyContent: "center",
        width: width,
        height: 250
    },

    login_img_logo: {
        marginTop: 30,
        marginBottom: 15,
        width: width * (70/100),
        height: 250
    },

    login_form_container: {
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 20,
        paddingBottom: 20
    },

    input_rounded_bottom: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },

    input_rounded_top: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },

    input_release_round: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },

    loading_text: {
        color: "#aaa",
        fontSize: 15
    },

    header: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#3eb2ff"
    },

    colorWhite: {
        color: "#fff"
    },

    chat_list_item: {
        backgroundColor: "transparent",
        paddingTop: 7,
        paddingBottom: 7,
        borderBottomWidth: 0.2,
        borderBottomColor: "#e1e1e1"
    }

})