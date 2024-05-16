import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "@gluestack-ui/themed";

import  SignUp  from "./../Connexion/SignUp/Signup";
import  Login  from "./../Connexion/Login/Login";
import ProfilConnecté from "../Connexion/Profil/ProfilConnecté";

const Profil = () => {
    return (
        <>
            <SafeAreaView>
                <ProfilConnecté />
            </SafeAreaView>
        </>    
    )
}

export default Profil

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#fff',
      
    },
});