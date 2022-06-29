import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './search-readers-list-style'

// eslint-disable-next-line react/prop-types
const Entry = ({ nickname, photo, navigation }) => {
    return (
        <View style={styles.people_segment}>
            <View style={styles.segment}>
                <ScrollView>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Friend')}>
                            <Image source={{ uri: photo }} style={styles.user_image} />
                        </TouchableOpacity>
                        <View>
                            <View >
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Friend')}>
                                    <Text style={styles.person}>{nickname}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Entry