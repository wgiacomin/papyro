const ROUTES = {
  baseURL: 'http://10.0.2.2:8000',
  signup: 'usuarios',
  login: 'login/',
  refresh: 'login/refresh',
  profile: '',
  forget_password: '',
  notifications: '',
  edit_profile: 'usuarios/meusDados',
  update_profile: 'usuarios/atualizarDados',
  get_book: 'getBook/',
  get_persons_books: 'users/books',
  get_reading_people: '/pessoas',
  add_book_to_library: '/usuarios/addLivroBiblioteca/',
  search: '/pesquisar/{tipo}/{termo}',
  people_suggestion: '/usuarios/sugestaoAmigos',
  gender: '',

}

export default ROUTES
