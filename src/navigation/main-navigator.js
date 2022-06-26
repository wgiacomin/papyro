
import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import feed from '../views/feed/feed'
import home from '../../assets/icons/home.png'
import home_focused from '../../assets/icons/home_focused.png'
import notifications from '../../assets/icons/notifications.png'
import notifications_focused from '../../assets/icons/notifications_focused.png'
import books from '../../assets/icons/books.png'
import books_focused from '../../assets/icons/books_focused.png'
import groups from '../../assets/icons/groups.png'
import groups_focused from '../../assets/icons/groups_focused.png'
import people from '../views/profile/user-profile'
import friend from '../views/profile/friend-profile'
import conversations from '../views/chat/conversations'
import comments from '../views/comments/comment'
import notification from '../views/notification/notification'
import editProfile from '../views/edit-profile/edit-profile'
import personalize from '../views/edit-profile/personalize-profile'
import bookToRead from '../views/book-to-read/book-to-read'
import bookRead from '../views/book-read/book-read'
import bookReading from '../views/book-reading/book-reading'
import addBook from '../views/add-book/add-book'
import searchBook from '../views/search-book/search-book'
import searchPeople from '../views/search-people/search-people'
import searchReaders from '../views/search-readers/search-readers'
import bookSuggestion from '../views/book-suggestion/book-suggestion'
import peopleSuggestion from '../views/people-suggestion/people-suggestion'
import viewBook from '../views/view-book/view-book'
import review from '../views/review/review'
import searchReaders from '../views/search-readers/search-readers'
import searchReadersReading from '../views/search-readers-list/search-readers-reading'
import SearchReadersToRead from '../views/search-readers-list/search-readers-to-read'
import SearchReadersRead from '../views/search-readers-list/search-readers-read'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const StackN = createStackNavigator()

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Feed"
  >
    <Stack.Screen name='Feed' component={feed} options={{ headerShown: false }} />
    <Stack.Screen name='People' component={people} options={{ headerShown: false }} />
    <Stack.Screen name='Friend' component={friend} options={{ headerShown: false }} />
    <Stack.Screen name='Conversations' component={conversations} options={{ headerShown: false }} />
    <Stack.Screen name='Comments' component={comments} options={{ headerShown: false }} />
    <Stack.Screen name='EditProfile' component={editProfile} options={{ headerShown: false }} />
    <Stack.Screen name='Personalize' component={personalize} options={{ headerShown: false }} />
    <Stack.Screen name='BookToRead' component={bookToRead} options={{ headerShown: false }} />
    <Stack.Screen name='BookRead' component={bookRead} options={{ headerShown: false }} />
    <Stack.Screen name='BookReading' component={bookReading} options={{ headerShown: false }} />
    <Stack.Screen name='AddBook' component={addBook} options={{ headerShown: false }} />
    <Stack.Screen name='SearchBook' component={searchBook} options={{ headerShown: false }} />
    <Stack.Screen name='SearchPeople' component={searchPeople} options={{ headerShown: false }} />
    <Stack.Screen name='SearchReaders' component={searchReaders} options={{ headerShown: false }} />
    <Stack.Screen name='BookSuggestion' component={bookSuggestion} options={{ headerShown: false }} />
    <Stack.Screen name='PeopleSuggestion' component={peopleSuggestion} options={{ headerShown: false }} />
    <Stack.Screen name='ViewBook' component={viewBook} options={{ headerShown: false }} />
    <Stack.Screen name='Review' component={review} options={{ headerShown: false }} />
  </Stack.Navigator>
)

const StackNavigatorNotification = () => (
  <StackN.Navigator
    initialRouteName="Notifications"
  >
    <StackN.Screen name='Notifications' component={notification} options={{ headerShown: false }} />
    <StackN.Screen name='Friend' component={friend} options={{ headerShown: false }} />
    <StackN.Screen name='Conversations' component={conversations} options={{ headerShown: false }} />
    <StackN.Screen name='Comments' component={comments} options={{ headerShown: false }} />
    <StackN.Screen name='ViewBook' component={viewBook} options={{ headerShown: false}} />
    <StackN.Screen name='Review' component={review} options={{ headerShown: false}} />
  </StackN.Navigator>
)

const MainNavigator = () => (
  <Tab.Navigator
    initialRouteName='Feed'
    screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarActiveBackgroundColor: '#ededed',
      tabBarInactiveBackgroundColor: '#dcdcdc',
      tabBarStyle: [
        {
          display: 'flex',
          margin: 0,
          padding: 0
        },
        null
      ]
    }}
  >

    <Tab.Screen name="FeedTab" component={StackNavigator}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Image source={focused ? home_focused : home} style={{ width: size, height: size, }} />
        ),
      }} />


    <Tab.Screen name="NotificationsTab" component={StackNavigatorNotification} options={{ 
      headerShown: false, 
      tabBarShowLabel: false, 
      tabBarIcon: ({focused, color, size }) => (
        <Image source={focused ? notifications_focused : notifications} style={{ width: size, height: size,}} />
      ),
    }} />

    <Tab.Screen name="Books" component={bookSuggestion}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Image source={focused ? books_focused : books} style={{ width: size, height: size, }} />
        ),
      }} />

    <Tab.Screen name="Profile" component={peopleSuggestion}
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => (
          <Image source={focused ? groups_focused : groups} style={{ width: size + 5, height: size + 5, }} />
        ),
      }} />
  </Tab.Navigator>
)

export default MainNavigator