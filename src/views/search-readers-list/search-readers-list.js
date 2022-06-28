import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import styles from './search-readers-list-style'
import DefaultBar from '../../components/default-bar-back'
import safeView from '../../styles/safe-view'
import mocked_image from '../../../assets/icons/image.png'
import { ScrollView } from 'react-native-gesture-handler'
import spinner from '../../styles/spinner'
import ROUTES from '../../routes/routes'
import useSearchReadersList from './use-search-readers-list'
import SearchReadersListEntries from './search-readers-list-entries'

const SearchReadersList = ({ navigation }) => {

    const [readers, setReaders] = useState({
        readers: [],
        loading: true,
    })

    useEffect(() => {
        useSearchReadersList({ id: ROUTES.params?.id, setReaders })
    }, [])

    if (readers.loading) {
        return (
            <View style={[spinner.container, spinner.horizontal]}>
                <ActivityIndicator size="large" color="#00000" />
            </View>
        )
    }

    console.log(readers.readers)
    console.log("XXXXXXXXXXXXXXXXXXXXXxx")
    console.log(readers)
    return (
        <SafeAreaView style={safeView.AndroidSafeArea}>
            <View style={styles.container}>
                <DefaultBar navigation={navigation} />
                <View style={styles.segment}>
                    <Text style={styles.title}>Quem já leu?</Text>
                    <ScrollView>
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
                        </View>
                    </ScrollView>
                </View>
                <SearchReadersListEntries data={readers.readers} navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}


export default SearchReadersList



