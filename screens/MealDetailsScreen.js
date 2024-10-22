import { View, Image, Text, Pressable, StyleSheet, Platform, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

function MealDetailsScreen( { route }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);


    return (
        <ScrollView style={styles.rootContainer}>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
        </View>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability} />
        <View style={styles.textContainer}>

        <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        </View>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
        </View>
        </ScrollView>
    );

}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,

    },
    image: {
        width: '100%',
        height: 300,
        margin: 5
    },

    title: {
        fontSize: 22,
        textAlign: 'center',
        margin: 16,
        textTransform: 'uppercase',
        color: 'white',
        backgroundColor: '#c289a6',
        padding: 5,
        borderRadius: 5,
    },

    textContainer: {
        backgroundColor: '#D4ABC0',
        marginVertical: 20,
        alignItems: 'center',

    },

    listContainer: {
        width: '80%',
        

    }

    

});