import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({ title, color, onTilePress }) {
  

  return (
    <View style={styles.gridTile}>
      <Pressable android_ripple={{ color: '#ccc'}} 
      style={( { pressed }) => 
      [styles.pressableButton,
      pressed ? styles.pressableButtonPressed : null,
      ]}
      onPress={onTilePress}
      >
        <View style={[styles.innerGridTile , { backgroundColor : color }]}>
          <Text style={styles.tileTitle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridTile : {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'space-evenly',
    margin: 10,
    height: 120,
    borderRadius: 10,
    maxWidth: '30%',
    backgroundColor: 'white',
    //shadow for android
    elevation: 1,
    //shadow for iOS
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    overflow: Platform.OS === 'android' ? 'hidden': 'visible',
  },

  pressableButton : {
    flex: 1,
  },

  pressableButtonPressed : { //visible reaction on iOS when pressed
    opacity: 0.5,

  },

  innerGridTile : {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tileTitle : {
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
    
  }
});