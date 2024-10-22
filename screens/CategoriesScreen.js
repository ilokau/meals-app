import { View, FlatList, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen( { navigation }) {

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('Meals Overview', {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title

      });
    }


    return (
      <CategoryGridTile 
      title={itemData.item.title}
      color={itemData.item.color}
      onTilePress={pressHandler} />
    );
  }

  return (
    <View style={styles.container}>
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={3}
    />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebc1d6",
  },
});