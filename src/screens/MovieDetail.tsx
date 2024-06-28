import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { API_URL, API_ACCESS_TOKEN } from "@env";

const MovieDetail = ({navigation}: any): any => {
    const fetchData = (): void => {
        if (API_URL == null || API_ACCESS_TOKEN.length == null){
            throw new Error('ENV not found')
        }
        const option = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_ACCESS_TOKEN}`,
            },
        }

        fetch(API_URL, option)
        .then(async(response) => await response.json())
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Movie Detail Screen</Text>
            <Button title="Fetch Data" onPress={() => fetchData()} />
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

export default MovieDetail;