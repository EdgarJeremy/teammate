import DefaultPreferences from "react-native-default-preference";

export default Store = {
    set_pengguna: (pengguna,done = () => {}) => {
        DefaultPreferences.set("pengguna",JSON.stringify(pengguna)).then(done);
    },
    get_pengguna: (callback) => {
        DefaultPreferences.get("pengguna").then((value) => callback(JSON.parse(value)));
    }
};