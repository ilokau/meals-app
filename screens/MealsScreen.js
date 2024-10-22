import { View, FlatList, StyleSheet, Text } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsScreen( { route }) {
    const categoryId = route.params.categoryId;
    const categoryTitle = route.params.categoryTitle;
    const mealsDisplayed = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(categoryId) >= 0
    }
    );

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            complexity: item.complexity,
            duration: item.duration,
            affordability: item.affordability,

        };
        return <MealItem {...mealProps}/>
    }

    return <View style={styles.container}>
        <FlatList
            data={mealsDisplayed}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
        />
    </View>
};

export default MealsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});