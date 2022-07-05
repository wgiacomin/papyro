const ROUTES = {
	signup: 'usuarios/',
	login: 'login/',
	profile: 'usuarios/visualizarPerfil/',
	forget_password: '',
	notifications: '',
	edit_profile: 'usuarios/meusDados',
	update_profile: 'usuarios/atualizarDados',
	get_book: 'livros/',
	get_reading_people: '/pessoas',
	add_book_to_library: '/usuarios/addLivroBiblioteca/',
	search: '/pesquisar/{tipo}/{termo}',
	people_suggestion: '/usuarios/sugestaoAmigos'
}

export default ROUTES
