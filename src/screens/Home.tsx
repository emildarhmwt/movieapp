import React from "react";
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Go to Movie Detail"
            onPress={() => navigation.navigate('MovieDetail')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
  },
});

export default Home;