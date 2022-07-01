import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import styles from './search-readers-style'

// eslint-disable-next-line react/prop-types
const Entry = ({ nickname, photo, navigation }) => {
    return (
        <View style={styles.container} >
            <View style={styles.people_segment}>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Friend')}>
                        <Image source={{ uri: photo }} style={styles.user_image} />
                    </TouchableOpacity>
                    <View>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Friend')}>
                                <Text style={styles.person}>{nickname}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


export default Entry