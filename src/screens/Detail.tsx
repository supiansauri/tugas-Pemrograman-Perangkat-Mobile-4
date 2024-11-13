import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Svg, Path } from 'react-native-svg';
import CheckBox from '@react-native-community/checkbox';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { CoffeeItem } from '../models/coffeeItem';
import { style } from '../style/font_style';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface DetailProps {
  route: DetailScreenRouteProp;
}

export default function DetailScreen({ route }: DetailProps) {
  const { item } = route.params;
  const [savedRecipe, setSavedRecipe] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState(new Array(5).fill(false));

  const toggleIngredient = (index: number) => {
    const newCheckedIngredients = [...checkedIngredients];
    newCheckedIngredients[index] = !newCheckedIngredients[index];
    setCheckedIngredients(newCheckedIngredients);
    console.log(item.image);
  };
  
  // const imageMap: Record<string, ImageSourcePropType> = {
  
  //   "../../../assets/MieRebus.png" : require("../../../assets/MieRebus.png"),
  //   "../../../assets/MieGoreng.jpg" : require("../../../assets/MieGoreng.jpg"),
  //   "../../../assets/BihunGoreng.jpg" : require("../../../assets/BihunGoreng.jpg"),
  //   "../../../assets/BihunRebus.jpg" : require("../../../assets/BihunRebus.jpg"),
  //   "../../../assets/KwetiauGoreng.jpg" : require("../../../assets/KwetiauGoreng.jpg"),
  //   "../../../assets/KwetiauRebus.jpg" : require("../../../assets/KwetiauRebus.jpg"),
  //   "../../../assets/CapcayRebus.jpg" : require("../../../assets/CapcayRebus.jpg"),
  //   "../../../assets/CapcayGoreng.jpg" : require("../../../assets/CapcayGoreng.jpg"),
  // };

  // const resolvedImageSource = Image.resolveAssetSource(imageMap[item.image]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Svg width={24} height={24} viewBox="0 0 256 256" fill="white">
              <Path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity>
            <Svg width={24} height={24} viewBox="0 0 256 256" fill="white">
              <Path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H165a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h39.71L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z" />
            </Svg>
          </TouchableOpacity>
        </View>

        {/* <Image
          source={item.image}
          style={styles.recipeImage}
        /> */}

        <Text style={[styles.title, style.medium]}>{item.title}</Text>
        <Text style={[styles.description, style.medium]}>{item.desc}</Text>
        <Text style={[styles.price, style.medium]}>{item.price}</Text>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        {item.ingredient.map((ingredient, index) => (
          <View key={index} style={styles.ingredientItem}>
            <CheckBox
              disabled={false}
              value={checkedIngredients[index]}
              onValueChange={() => toggleIngredient(index)}
              tintColors={{ true: '#1919e6', false: '#3c3c53' }}
              style={styles.checkbox}
            />
            <View>
              <Text style={styles.ingredientName}>{ingredient.name}</Text>
              <Text style={styles.ingredientDescription}>{ingredient.description}</Text>
            </View>
          </View>
        ))}

        

<Text style={styles.sectionTitle}>Instructions</Text>
<View style={styles.instructionItem}>
  <Text style={styles.instructionDescription}>{item.instruction}</Text>
</View>

      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={() => setSavedRecipe(!savedRecipe)}>
          <Svg width={24} height={24} viewBox="0 0 256 256" fill="white">
            <Path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
          </Svg>
          <Text style={styles.saveButtonText}>{savedRecipe ? 'Saved' : 'Save Recipe'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111118',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  recipeImage: {
    width: '100%',
    height: 218,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 16,
    paddingBottom: 12,
  },
  description: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  price: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 16,
    paddingBottom: 12,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingVertical: 8,
  },
  checkbox: {
    marginRight: 16,
  },
  ingredientName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  ingredientDescription: {
    color: '#9d9db8',
    fontSize: 14,
  },
  nutritionContainer: {
    padding: 16,
  },
  nutritionLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  nutritionValue: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  nutritionChart: {
    marginTop: 16,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  chartLabel: {
    color: '#9d9db8',
    fontSize: 13,
    fontWeight: 'bold',
    width: 60,
  },
  chartBar: {
    flex: 1,
    height: 24,
    backgroundColor: '#292938',
  },
  chartFill: {
    height: '100%',
    backgroundColor: '#9d9db8',
  },
  instructionItem: {
    padding: 16,
    paddingVertical: 8,
  },
  instructionStep: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  instructionDescription: {
    color: 'white',
    fontSize: 16,
    marginTop: 4,
  },
  footer: {
    padding: 16,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292938',
    padding: 16,
    borderRadius: 12,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});