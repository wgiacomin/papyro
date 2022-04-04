import React from 'react'
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import styles from './search-readers-style'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import SearchEntries from '../search-readers/search-readers-entries'
import mocked_image from '../../../assets/icons/image.png'

const SearchReaders = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <Text style={styles.title}>Quem está lendo?</Text>
        </View>
        <View style={styles.line_segment}>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line_segment}>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Wanderson</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line_segment}>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
        </View>
              
        <View style={styles.segment}>
          <Text style={styles.title}>Quem vai ler?</Text>
        </View>
        <View style={styles.line_segment}>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line_segment}>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Wanderson</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line_segment}>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.segment}>
          <Text style={styles.title}>Quem já leu?</Text>
        </View>
        <View style={styles.line_segment}>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line_segment}>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Wanderson</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line_segment}>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={mocked_image} style={styles.user_image}/>  
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.person}>Ana Dolata</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
  
export default SearchReaders


let mocks = [{
  'id': 1,
  'name': 'Wanderson R. Giacomin Junior',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 2,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 3,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 4,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 5,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 6,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 7,
  'name': 'Ana Dolata',
  'commom_books': '10 livros em comum',
  'note': 'Você leu 5 livros desse grupo.',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 8,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
{
  'id': 9,
  'name': 'Ana Dolata',
  'foto': '../../../assets/icons/Nickname.png'
},
]


