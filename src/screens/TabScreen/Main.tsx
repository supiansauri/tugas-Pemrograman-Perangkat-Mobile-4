// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   ScrollView,
//   Pressable,
//   FlatList,
//   Dimensions,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import React, {useState} from 'react';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
// import {CoffeeItem} from '../../models/coffeeItem';
// import {RootStackParamList} from '../../navigation/AppNavigator';

// const coffeeCategory = [
//   'Mie Rebus',
//   'Mie Goreng',
//   'Bihun Goreng',
//   'Bihun Rebus',
//   'Kwetiau Goreng',
//   'Kwetiau Rebus',
//   'Capcay Goreng',
//   'Capcay Rebus',
// ];

// const data: CoffeeItem[] = [
//   {
//     id: 1,
//     image: require('../../../assets/MieRebus.png'),
//     rating: 4.5,
//     title: 'Mie Rebus',
//     desc: 'Mie yang direbus dengan bumbu khas, disajikan dengan sayuran dan topping.',
//     price: '4.53',
//     ingredient: [
//       { name: '200 gram mie telur', description: 'direbus hingga al dente' },
//       { name: '2 siung bawang putih', description: 'dicincang halus' },
//       { name: '2 batang daun bawang', description: 'diiris tipis' },
//       { name: '1 butir telur', description: 'dikocok lepas' },
//       { name: '100 gram sawi hijau', description: 'dipotong-potong' },
//     ],
//     instruction: 'Rebus mie telur hingga al dente. Tumis bawang putih hingga harum, masukkan daun bawang dan telur, aduk rata. Tambahkan mie dan sawi, aduk hingga tercampur rata. Sajikan dengan topping favorit.'
// },
// {
//     id: 2,
//     image: require('../../../assets/MieGoreng.jpg'),
//     rating: 4.5,
//     title: 'Mie Goreng',
//     desc: 'Mie goreng dengan bumbu yang gurih, dilengkapi sayuran segar dan topping pilihan.',
//     price: '4.53',
//     ingredient: [
//       { name: '200 gram mie telur', description: 'direbus dan ditiriskan' },
//       { name: '3 siung bawang merah', description: 'diiris tipis' },
//       { name: '2 siung bawang putih', description: 'dihaluskan' },
//       { name: '1 butir telur', description: 'dikocok lepas' },
//       { name: '100 gram kol', description: 'diiris kasar' },
//     ],
//   instruction: 'Tumis bawang merah dan bawang putih hingga harum. Masukkan telur dan orak-arik. Tambahkan mie yang telah direbus dan kol, aduk rata hingga mie tercampur dengan bumbu. Sajikan dengan topping pilihan.'
// },
// {
//     id: 3,
//     image: require('../../../assets/BihunGoreng.jpg'),
//     rating: 4.5,
//     title: 'Bihun Goreng',
//     desc: 'Bihun goreng lezat dengan campuran sayuran dan bumbu yang kaya rasa.',
//     price: '4.53',
//     ingredient: [
//       { name: '200 gram bihun', description: 'direbus dan ditiriskan' },
//       { name: '2 siung bawang putih', description: 'dicincang halus' },
//       { name: '1 batang daun bawang', description: 'diiris tipis' },
//       { name: '100 gram wortel', description: 'diiris tipis memanjang' },
//       { name: '50 gram tauge', description: 'dicuci bersih' },
//     ],
//     instruction: 'Tumis bawang putih hingga harum, masukkan wortel dan daun bawang, aduk rata. Tambahkan bihun yang telah direbus dan tauge, aduk hingga tercampur rata. Sajikan selagi hangat.'
// },
// {
//     id: 4,
//     image: require('../../../assets/BihunRebus.jpg'),
//     rating: 4.5,
//     title: 'Bihun Rebus',
//     desc: 'Bihun rebus dengan kuah gurih, dilengkapi sayuran dan topping pilihan.',
//     price: '4.53',
//     ingredient: [
//       { name: '200 gram bihun', description: 'direbus hingga matang' },
//       { name: '2 siung bawang putih', description: 'dicincang halus' },
//       { name: '1 batang daun bawang', description: 'diiris tipis' },
//       { name: '50 gram jamur kuping', description: 'diiris tipis' },
//       { name: '100 gram sawi hijau', description: 'dipotong-potong' },
//     ],
//     instruction: 'Rebus bihun hingga matang. Tumis bawang putih hingga harum, tambahkan jamur dan sawi, aduk hingga layu. Tuangkan kuah dan bihun, masak hingga kuah meresap. Sajikan dengan topping favorit.'
// },
// {
//     id: 5,
//     image: require('../../../assets/KwetiauGoreng.jpg'),
//     rating: 4.5,
//     title: 'Kwetiau Goreng',
//     desc: 'Kwetiau goreng dengan bumbu spesial, ditambah sayuran segar dan topping.',
//     price: '4.53',
//     ingredient: [
//       { name: '200 gram kwetiau', description: 'direbus dan ditiriskan' },
//       { name: '3 siung bawang putih', description: 'dihaluskan' },
//       { name: '100 gram udang', description: 'dikupas dan dibersihkan' },
//       { name: '1 batang daun bawang', description: 'diiris tipis' },
//       { name: '100 gram sawi hijau', description: 'dipotong-potong' },
//     ],
//     instruction: 'Tumis bawang putih hingga harum, tambahkan udang dan masak hingga matang. Masukkan kwetiau yang telah direbus dan sawi, aduk rata. Sajikan dengan topping favorit.'
// },
// {
//     id: 6,
//     image: require('../../../assets/KwetiauRebus.jpg'),
//     rating: 4.5,
//     title: 'Kwetiau Rebus',
//     desc: 'Kwetiau rebus yang lembut dengan kuah kaldu gurih dan tambahan sayuran.',
//     price: '4.53',
//     ingredient: [
//       { name: '200 gram kwetiau', description: 'direbus hingga matang' },
//       { name: '2 siung bawang putih', description: 'dicincang halus' },
//       { name: '1 batang daun bawang', description: 'diiris tipis' },
//       { name: '100 gram sawi hijau', description: 'dipotong-potong' },
//       { name: '50 gram wortel', description: 'diiris tipis' },
//     ],
//     instruction: 'Rebus kwetiau hingga matang. Tumis bawang putih hingga harum, masukkan wortel dan sawi, aduk rata. Tuangkan kuah kaldu dan masukkan kwetiau, masak hingga bumbu meresap. Sajikan hangat.'
// },
// {
//     id: 7,
//     image: require('../../../assets/CapcayRebus.jpg'),
//     rating: 4.5,
//     title: 'Capcay Goreng',
//     desc: 'Capcay goreng dengan sayuran segar dan bumbu yang meresap sempurna.',
//     price: '4.53',
//     ingredient: [
//       { name: '100 gram kol', description: 'diiris kasar' },
//       { name: '50 gram wortel', description: 'diiris tipis' },
//       { name: '50 gram buncis', description: 'dipotong serong' },
//       { name: '100 gram brokoli', description: 'dipotong kecil' },
//       { name: '2 siung bawang putih', description: 'dicincang halus' },
//     ],
//     instruction: 'Tumis bawang putih hingga harum, tambahkan wortel, buncis, kol, dan brokoli. Aduk rata dan masak hingga sayuran layu. Sajikan selagi hangat.'
// },
// {
//     id: 8,
//     image: require('../../../assets/CapcayGoreng.jpg'),
//     rating: 4.5,
//     title: 'Capcay Rebus',
//     desc: 'Capcay rebus dengan kuah gurih, sayuran berlimpah, dan rasa yang nikmat.',
//     price: '4.53',
//     ingredient: [
//       { name: '100 gram kol', description: 'diiris kasar' },
//       { name: '50 gram wortel', description: 'diiris tipis' },
//       { name: '50 gram buncis', description: 'dipotong serong' },
//       { name: '100 gram brokoli', description: 'dipotong kecil' },
//       { name: '2 siung bawang putih', description: 'dicincang halus' },
//     ],
//     instruction: 'Rebus kol, wortel, buncis, dan brokoli hingga empuk. Tumis bawang putih hingga harum, kemudian masukkan sayuran yang telah direbus dan kuah, masak hingga meresap. Sajikan dengan tambahan topping.'
// }


  
// ];

// const Main = () => {
//   const {width} = Dimensions.get('window');
//   const itemMargin = 10;
//   const itemWidth = width / 2 - itemMargin * 4;

//   const [selectedIndex, setSelectedIndex] = useState<number | 0>(0);
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();


//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'black',
//       }}>
//       <View
//         style={{
//           marginHorizontal: 10,
//           marginTop: 10,
//         }}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: 10,
//           }}>
//           <View>
//             <Text>Location</Text>
//             <Text
//               style={{
//                 fontWeight: 600,
//                 fontSize: 18,
//               }}>
//               Sukabumi, Cibentang
//             </Text>
//           </View>

//           <Image
//             source={require('../../../assets/profile.png')}
//             style={{
//               height: 45,
//               width: 45,
//               borderRadius: 12,
//             }}
//           />
//         </View>
//         <TextInput
//           style={{
//             backgroundColor: 'white',
//             marginBottom: 20,
//             borderRadius: 12,
//             padding: 10,
//             color: 'black'
//           }}
//           placeholder="Search"
//           placeholderTextColor={'grey'}
//         />
//         <Image
//           source={require('../../../assets/BackgroundNasi.png')}
//           style={{
//             width: '100%',
//             height: 170,
//             borderRadius: 12,
//           }}
//         />
//       </View>
//       <ScrollView
//         horizontal
//         contentContainerStyle={{padding: 16}}
//         showsHorizontalScrollIndicator={false}>
//         {coffeeCategory.map((category, index) => (
//           <Pressable
//             key={index}
//             onPress={() => setSelectedIndex(index)}
//             style={{
//               backgroundColor: selectedIndex === index ? '#C67C4E' : 'white',
//               paddingHorizontal: 4,
//               paddingVertical: 10,
//               borderRadius: 12,
//               marginLeft: 8,
//               marginBottom: 25,
//               height: 40,
//             }}>
//             <Text
//               style={{
//                 color: selectedIndex === index ? 'white' : 'black',
//               }}>
//               {category}
//             </Text>
//           </Pressable>
//         ))}
//       </ScrollView>
//       <FlatList
//         data={data}
//         numColumns={2}
//         style={{
//           width: '100%',
//         }}
//         renderItem={({item}: {item: CoffeeItem}) => (
//           <Pressable
//             onPress={() => navigation.navigate('Detail', {item})}
//             style={{
//               backgroundColor: 'white',
//               borderRadius: 12,
//               padding: 10,
//               width: width / 2 - 20,
//               margin: 8,
//             }}>
//             <View
//               style={{
//                 position: 'relative',
//               }}>
//               <Image
//                 source={item.image}
//                 style={{
//                   width: '100%',
//                   height: 140,
//                   borderRadius: 12,
//                 }}
//               />
//               <View
//                 style={{
//                   position: 'absolute',
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   marginTop: 5,
//                   marginLeft: 5,
//                 }}>
//                 <Image
//                   source={require('../../../assets/star.png')}
//                   style={{
//                     width: 10,
//                     marginRight: 2,
//                     height: 10,
//                   }}
//                 />
//                 <Text
//                   style={{
//                     fontSize: 10,
//                   }}>
//                   {item.price}
//                 </Text>
//               </View>
//             </View>
//             <Text
//               style={{
//                 color: 'black',
//                 fontSize: 16,
//                 fontWeight: 500,
//               }}>
//               {item.title}{' '}
//             </Text>
//             <Text
//               style={{
//                 color: 'grey',
//                 fontSize: 12,
//               }}>
//               {item.desc}{' '}
//             </Text>
//             <View
//               style={{
//                 justifyContent: 'space-between',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <Text
//                 style={{
//                   color: '#2F4B4E',
//                   fontSize: 18,
//                   fontWeight: 600,
//                 }}>
//                 $ {item.price}
//               </Text>
//               <View
//                 style={{
//                   width: 40,
//                   borderRadius: 12,
//                   height: 40,
//                   backgroundColor: '#C67C4E',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Text
//                   style={{
//                     fontSize: 20,
//                     fontWeight: 600,
//                   }}>
//                   +
//                 </Text>
//               </View>
//             </View>
//           </Pressable>
//         )}
//       />
//     </View>
//   );
// };

// export default Main;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
  ActivityIndicator,
  ImageSourcePropType,
} from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CoffeeItem } from '../../models/coffeeItem';
import { RootStackParamList } from '../../navigation/AppNavigator';

const coffeeCategory = [
  'Mie Rebus',
  'Mie Goreng',
  'Bihun Goreng',
  'Bihun Rebus',
  'Kwetiau Goreng',
  'Kwetiau Rebus',
  'Capcay Goreng',
  'Capcay Rebus',
];

const imageMap: Record<string, ImageSourcePropType> = {
  
  "../../../assets/MieRebus.png" : require("../../../assets/MieRebus.png"),
  "../../../assets/MieGoreng.jpg" : require("../../../assets/MieGoreng.jpg"),
  "../../../assets/BihunGoreng.jpg" : require("../../../assets/BihunGoreng.jpg"),
  "../../../assets/BihunRebus.jpg" : require("../../../assets/BihunRebus.jpg"),
  "../../../assets/KwetiauGoreng.jpg" : require("../../../assets/KwetiauGoreng.jpg"),
  "../../../assets/KwetiauRebus.jpg" : require("../../../assets/KwetiauRebus.jpg"),
  "../../../assets/CapcayRebus.jpg" : require("../../../assets/CapcayRebus.jpg"),
  "../../../assets/CapcayGoreng.jpg" : require("../../../assets/CapcayGoreng.jpg"),
};

const Main = () => {
  const { width } = Dimensions.get('window');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [menuItems, setMenuItems] = useState<CoffeeItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch('https://9nmlpf1g-5000.asse.devtunnels.ms/menus');
      const data = await response.json();
      setMenuItems(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <ActivityIndicator size="large" color="#C67C4E" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <View>
            <Text>Location</Text>
            <Text style={{ fontWeight: '600', fontSize: 18 }}>Sukabumi, Cibentang</Text>
          </View>
          <Image
            source={require('../../../assets/profile.png')}
            style={{ height: 45, width: 45, borderRadius: 12 }}
          />
        </View>
        <TextInput
          style={{
            backgroundColor: 'white',
            marginBottom: 20,
            borderRadius: 12,
            padding: 10,
            color: 'black'
          }}
          placeholder="Search"
          placeholderTextColor={'grey'}
        />
        <Image
          source={require('../../../assets/BackgroundNasi.png')}
          style={{ width: '100%', height: 170, borderRadius: 12 }}
        />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ padding: 16 }}
        showsHorizontalScrollIndicator={false}
      >
        {coffeeCategory.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedIndex(index)}
            style={{
              backgroundColor: selectedIndex === index ? '#C67C4E' : 'white',
              paddingHorizontal: 4,
              paddingVertical: 10,
              borderRadius: 12,
              marginLeft: 8,
              marginBottom: 70,
              height: 40,
            }}
          >
            <Text style={{ color: selectedIndex === index ? 'white' : 'black' }}>
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <FlatList
        data={menuItems}
        numColumns={2}
        style={{ width: '100%' }}
        renderItem={({ item }: { item: CoffeeItem }) => (
          <Pressable
            onPress={() => navigation.navigate('Detail', { item })}
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 10,
              width: width / 2 - 20,
              margin: 8,
            }}
          >
            <View style={{ position: 'relative' }}>
              <Image
        source={imageMap[item.image]} // Menggunakan mapping untuk mendapatkan gambar
        style={{ width: '100%', height: 140, borderRadius: 12 }}
              />
              <View
                style={{
                  position: 'absolute',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                  marginLeft: 5,
                }}
              >
                <Image
                  source={require('../../../assets/star.png')}
                  style={{ width: 10, marginRight: 2, height: 10 }}
                />
                <Text style={{ fontSize: 10 }}>{item.rating}</Text>
              </View>
            </View>
            <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>
              {item.title}
            </Text>
            <Text style={{ color: 'grey', fontSize: 12 }}>{item.desc}</Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#2F4B4E', fontSize: 18, fontWeight: '600' }}>
                $ {item.price}
              </Text>
              <View
                style={{
                  width: 40,
                  borderRadius: 12,
                  height: 40,
                  backgroundColor: '#C67C4E',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: '600' }}>+</Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Main;