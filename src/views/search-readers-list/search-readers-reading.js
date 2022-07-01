import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './search-readers-list-style'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import mocked_image from '../../../assets/icons/image.png'
import { ScrollView } from 'react-native-gesture-handler'

const SearchReadersReading = ({ navigation }) => {
  return (
    <SafeAreaView style={safeView.AndroidSafeArea}>
      <View style={styles.container}>
        <DefaultBar navigation={navigation} />
        <View style={styles.segment}>
          <Text style={styles.title}>Quem está lendo?</Text>
          <ScrollView>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.people_segment}>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Friend')}>
                <Image source={mocked_image} style={styles.person_image} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Friend')}>
                <Text style={styles.person}>Ana Dolata</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default SearchReadersReading



