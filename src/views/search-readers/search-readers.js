import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './search-readers-style'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import mocked_image from '../../../assets/icons/image.png'

const SearchReaders = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={ navigation }/>
        <View style={styles.segment}>
          <Text style={styles.title}>Quem está lendo?</Text>
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
          <View style={styles.see_more_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchReadersReading')}>
              <Text style={styles.see_more}> Ver mais (5) </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.segment}>
          <Text style={styles.title}>Quem vai ler?</Text>
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
          <View style={styles.see_more_segment}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchReadersToRead')}>
              <Text style={styles.see_more}> Ver mais (5) </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.segment}>
          <Text style={styles.title}>Quem já leu?</Text>
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
        <View style={styles.see_more_segment}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchReadersRead')}>
            <Text style={styles.see_more}> Ver mais (5) </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
  

export default SearchReaders

