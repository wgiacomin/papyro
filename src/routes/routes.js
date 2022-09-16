import { BASE_URL } from '@env'

const ROUTES = {
  //baseURL: 'http://10.0.2.2:8000',
  baseURL: BASE_URL,

  login: 'login/',
  refresh: 'login/refresh',
  forget_password: '/login/forgotPassword',
  reset_password: '/login/resetPassword',

  signup: 'users/',

  comments: 'comments/',
  get_book: 'getBook/',

  get_persons_books: 'users/books',
  books_by_status: 'userBook/books/',

  get_following: 'following/',

  view_profile: 'users/viewProfile',
  edit_profile: 'users/editProfile',
  people_suggestion: 'users/extras/suggestion/get',
  book_suggestion: 'getBook/extras/suggestion/get',
  genre: 'genre/userGenre',
  update_genre: 'genre/save/',

  notifications: 'notification/',
  like: 'like/',
  feed: 'feed/',
  book_search: 'getBook/search/',
  people_search: 'users/search',
  users: 'users/',

  user_book: 'userBook/',

  rate: 'rate/'
}

export default ROUTES
