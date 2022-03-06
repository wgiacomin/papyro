import React, {useState} from 'react'
import { View, Image, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import calendar from '../../assets/icons/calendar.png'
import vertical from '../../assets/lines/straight.png'
import DateTimePicker from '@react-native-community/datetimepicker'

function pad(number, length) {
   
  var str = '' + number
  while (str.length < length) {
    str = '0' + str
  }
 
  return str

}

const DateBar = ({data, setData}) => {
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    setShow(false)
    if (selectedDate){
      const dd = pad(selectedDate.getDate(), 2)
      const mm = pad(selectedDate.getMonth() + 1, 2)
      const yyyy = selectedDate.getFullYear()
      setData({...data, 'data': selectedDate, 'data_string': dd + '/' + mm + '/' + yyyy})
    }
  }

  const showMode = () => {
    setShow(true)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={showDatepicker}
        >
          <View style={styles.segment}>
            <Image source={calendar} style={styles.imageSize} />
            <Image source={vertical} style={styles.verticalLine} />
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='Data de Nascimento'
              style={styles.textInput}
              value={data.data_string}
              editable={false}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Image source={vertical} style={styles.HorizontalLine} />
      </View>
      {show && (
        <DateTimePicker
          value={data.data}
          mode={'date'}
          display="default"
          onChange={onChange}
          maximumDate={new Date()}
        />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'white',
    marginTop: 10,
    alignItems: 'center'
  },
  textInput: {
    fontFamily: 'Poppins-Medium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
    marginLeft: 10,
    alignSelf: 'center',
    letterSpacing: -0.2,
  },
  imageSize: {
    width: 18,
    height: 18,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  segment:{
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  },
  verticalLine: {
    marginLeft: 10,
    width: 1,
    height: 25.5,
  },
  HorizontalLine: {
    marginLeft: 0,
    height: 1,
  },
})

export default DateBar