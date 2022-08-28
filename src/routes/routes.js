const ROUTES = {
  baseURL: 'http://10.0.2.2:8000',
  // baseURL: 'http://192.168.0.186:8000',

  login: 'login/',
  refresh: 'login/refresh',

  comments: 'comments/',
  get_book: 'getBook/',

  get_persons_books: 'users/books',
  view_profile: 'users/viewProfile',
  edit_profile: 'users/editProfile',
  books_by_status: 'users/books/',
  get_following: 'friends/',
  people_suggestion: 'users/extras/suggestion/get',
  book_suggestion: 'getBook/extras/suggestion/get',
  notifications: 'notification/',
  like: 'like/',
  gender: 'genre/userGenre',

  feed: 'feed/',
  book_search: 'getBook/search/',
  people_search: 'users/search'

}

export default ROUTES
