import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Product({name, price, image, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>R$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#008B8B',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },

  thumb: {
    height: 300,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },

  infoContainer: {
    padding: 16,
  },

  name: {
    fontSize: 22,
    color: '#F5F5F5',
    fontWeight: 'bold',
  },

  price: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    marginBottom: 8,
  },
});