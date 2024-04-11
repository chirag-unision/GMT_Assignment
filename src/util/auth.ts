import { GoogleSignin } from "@react-native-google-signin/google-signin";
import axios from "axios";
import apis from "../constants/config";

export const getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    return currentUser;
};

export const setCalendar = async (email: String) => {
      
    axios.post(apis.BASE_URL+'calendar/setCalendar', {
        email: email
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
}