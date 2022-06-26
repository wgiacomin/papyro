import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './search-readers-list-style'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import mocked_image from '../../../assets/icons/image.png'

const SearchReadersToRead = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <Text style={styles.title}>Quem está lendo?</Text>
          <Text style={styles.subtitle}>Em breve</Text>
          <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.segment}>
          <Text style={styles.subtitle}>Na próxima semana</Text>
          <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.segment}>
          <Text style={styles.subtitle}>Próximo mês</Text>
          <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.people_segment}>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
              <Image source={mocked_image} style={styles.person_image}/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Friend')}>
              <Text style={styles.person}>Ana Dolata</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
  

export default SearchReadersToRead



