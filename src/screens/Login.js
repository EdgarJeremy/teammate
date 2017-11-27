/**
 * Base configuration
 */
import React from "react";
import { Image } from "react-native";
import {
    Item,
    Icon,
    Input,
    Text,
    View,
    Content,
    Button
} from "native-base";
import Spinner from "react-native-loading-spinner-overlay";
import Hr from "react-native-hr";
import styles from "../styles/main";
import { Actions } from "react-native-router-flux";

/**
 * Services
 */
import Api from "../services/Api";
import Store from "../services/Store";


export default class Login extends React.Component {

    state = {
        username: "",
        password: "",
        loading: false
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    onLogin() {
        let username = this.state.username;
        let password = this.state.password;
        if (username.length && password.length) {
            this.setState({ loading: true });
            Api.login(this.state.username, this.state.password, (response) => {
                this.setState({ loading: false });
                if(!response.status) {
                    alert(response.message);
                } else {
                    Store.set_pengguna(response.data);
                    Actions.replace("Home");
                }
            },(err) => {
                this.setState({loading: false});
                alert(err);
            });
        } else {
            this.setState({ loading: false })
            alert("Isi kedua field!");
        }
    }

    render() {
        return (
            <Content keyboardShouldPersistTaps="handled">
                <View style={styles.login_img_container}>
                    <Image
                        style={styles.login_img_logo}
                        resizeMode={"contain"}
                        source={require("../images/logo_full.png")}
                    />
                </View>
                <Hr lineColor="#aaaaaa" text="terhubung dengan team" />
                <View style={styles.login_form_container}>
                    <Item style={[styles.input_rounded_top, { marginLeft: 0 }]} rounded>
                        <Icon name="person" style={{ color: "#0099ff" }} />
                        <Input value={this.state.username} onChangeText={(text) => this.setState({ username: text })} placeholder="Username" style={{ color: "#0099ff" }} />
                    </Item>
                    <Item style={[styles.input_release_round, { marginLeft: 0 }]} rounded>
                        <Icon name="lock" style={{ color: "#0099ff" }} />
                        <Input secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} placeholder="Password" style={{ color: "#0099ff" }} />
                    </Item>
                    <Button onPress={this.onLogin.bind(this)} info rounded block style={styles.input_rounded_bottom}>
                        <Text>LOGIN</Text>
                    </Button>
                </View>
                <Hr lineColor="#aaaaaa" text="Copyright 2017 _tagconn" />
                <Spinner animation="fade" visible={this.state.loading} textContent="Menghubungi server..." overlayColor="rgba(255,255,255,0.90)" color="#aaa" textStyle={styles.loading_text} />
            </Content>
        );
    }

}