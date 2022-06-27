const CONTRACTS = {
  'amigos': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'apelido': 'string',
          'foto': 'string',
          'id': 0
        }
      ],
      'status': 200
    }
  },
  'atualizar': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 400
    },
    'success': {
      'status': 200
    }
  },
  'avaliarLivro': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': {
        'ano': '2022-02-02',
        'autor': {
          'id': 'string',
          'nome': 'string'
        },
        'capa': 'string',
        'genero': {
          'nome': 'string'
        },
        'id': 0,
        'nome': 'string',
        'rate': 0,
        'sinopse': 'string'
      },
      'status': 200
    }
  },
  'buscarIsbn': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': {
        'ano': '2002-02-02',
        'autor': [
          {
            'nome': 'string'
          }
        ],
        'capa': 'string',
        'genero': [
          {
            'nome': 'string'
          }
        ],
        'nome': 'string',
        'sinopse': 'string'
      },
      'status': 200
    }
  },
  'conversas': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'id': 0,
          'texto': 'string',
          'usuario': {
            'apelido': 'string',
            'foto': 'string',
            'id': 0
          }
        }
      ],
      'status': 200
    }
  },
  'feed': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': {
        'avaliacao': [
          {
            'comentariosQtd': 0,
            'data_criacao': '2022-07-12',
            'id': 0,
            'likes': 0,
            'livro': {
              'capa': 'string',
              'id': 0,
              'nome': 'string',
              'rate': 0
            },
            'texto': 'string',
            'usuario': {
              'apelido': 'string',
              'foto': 'string',
              'id': 0
            }
          }
        ],
        'comentario': [
          {
            'comentariosQtd': 0,
            'data_criacao': '2022-02-17',
            'id': 0,
            'likes': 0,
            'livro': {
              'capa': 'string',
              'id': 0,
              'nome': 'string'
            },
            'texto': 'string',
            'usuario': {
              'apelido': 'string',
              'foto': 'string',
              'id': 0
            }
          }
        ]
      },
      'status': 200
    }
  },
  'generos': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'genero': 'string',
          'id': 0
        }
      ],
      'status': 200
    }
  },
  'get_book': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': {
        'book': {
          'id': 1,
          'year': '2000-02-12',
          'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
          'book_title': '1984',
          'rate': 0,
          'peoples': 10,
          'description': '2 + 2 = qualquer coisa',
          'author': [
            {
              'id': 1,
              'name': 'kakkaka'
            }
          ],
          'rates': [
            {
              'comments': 34,
              'date': '2022-03-26T23:05:08.239252',
              'id': 1,
              'likes': 3,
              'rate': 10,
              'text': 'bla bla bla bla',
              'user': {
                'nickname': 'nome123',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 1
              }
            },
            {
              'comments': 13,
              'date': '2022-03-26T23:33:08.239252',
              'id': 1,
              'likes': 3,
              'rate': 2,
              'text': 'bla bla bla bla',
              'user': {
                'nickname': 'grauber',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 2
              }
            },
            {
              'comments': 33,
              'date': '2022-03-27T23:05:08.239252',
              'id': 3,
              'likes': 3,
              'rate': 2,
              'text': 'KKKKKKKK',
              'user': {
                'nickname': 'nome123',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 1
              }
            },
          ],
          'genre': {
            'id': 1,
            'name': 'ficção'
          },
          'book_status_user': {
            'id': 0,
            'status': 'string'
          },
          'book_status': [
            {
              'id': 0,
              'status': 'string'
            }
          ]
        }
      },
      'status': 200
    }
  },
  'get_reading_people': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'apelido': 'string',
          'foto': 'string',
          'id': 0
        }
      ],
      'status': 200
    }
  },
  'livrosLendo': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'autor': {
            'id': 0,
            'nome': 'string'
          },
          'avalicoesQtd': 0,
          'capa': 'string',
          'id': 0,
          'nome': 'string',
          'rate': 0
        }
      ],
      'status': 200
    }
  },
  'livrosLidos': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'autor': {
            'id': 0,
            'nome': 'string'
          },
          'avalicoesQtd': 0,
          'capa': 'string',
          'id': 0,
          'nome': 'string',
          'rate': 0
        }
      ],
      'status': 200
    }
  },
  'livrosSeraoLidos': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'autor': {
            'id': 0,
            'nome': 'string'
          },
          'avalicoesQtd': 0,
          'capa': 'string',
          'id': 0,
          'nome': 'string',
          'rate': 0
        }
      ],
      'status': 200
    }
  },
  login: {
    error: {
      data: {
        detail: 'Falha ao realizar login!'
      },
      status: 404
    },
    success: {
      data: {
        access_token: 'STRINGEXEMPLO',
        token_type: 'Bearer',
        user: {
          nickname: 'Exemplinho',
          description: 'Sou rica',
          photo: 'string',
          id: 0,
          name: 'Exemplo'
        }
      },
      status: 200
    }
  },
  'mensages': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'id': 0,
          'mensagem': 'string'
        }
      ],
      'status': 200
    }
  },
  notifications: {
    error: {
      data: {
        detail: 'string'
      },
      status: 404
    },
    success: {
      data: {
        notifications: [
          {
            id: 0,
            book: {
              id: 0,
              name: 'Foundation',
              cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg'
            },
            user: {
              nickname: 'Emily May',
              photo: 'https://images.gr-assets.com/users/1528390751p2/4622890.jpg',
              id: 0
            },
            notification: {
              id: 0,
              text: 'Emily comentou "Legal" na sua avaliação.',
              date: '20/05/2021',
              refer: 'comment',
              refer_id: '1'
            }
          },
          {
            id: 1,
            book: {
              id: 1,
              name: 'Foundation and Empire',
              cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391454612l/29581.jpg'
            },
            user: {
              nickname: 'Antti Palmén',
              photo: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              id: 1
            },
            notification: {
              id: 1,
              text: 'Antti curtiu sua avaliação sobre o livro.',
              date: '20/05/2021',
              refer: 'comment',
              refer_id: '1'
            }
          }
        ],
      },
      status: 200
    }
  },
  search: {
    error: { 
      data: {
        detail: 'string'
      },
      status: 404
    },
    success: {
      page1: {
        data: {
          result: {
            books: [
              {
                author: {
                  name: 'Kirstin Valdez Quade',
                  id: 0
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612030905l/53597769.jpg',
                id: 1,
                rate: 3,
                name: 'The Five Wounds'
              },
              {
                author: {
                  name: 'Kirstin Valdez Quade',
                  id: 2
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612030905l/53597769.jpg',
                id: 3,
                rate: 1,
                name: 'The Five Wounds'
              },
              {
                author: {
                  rate: 'Kirstin Valdez Quade',
                  id: 4
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612030905l/53597769.jpg',
                id: 5,
                rate: 0,
                name: 'The Five Wounds'
              },
              {
                author: {
                  name: 'Kirstin Valdez Quade',
                  id: 6
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612030905l/53597769.jpg',
                id: 7,
                rate: 2,
                name: 'The Five Wounds'
              },
              {
                author: {
                  name: 'Kirstin Valdez Quade',
                  id: 8
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612030905l/53597769.jpg',
                id: 9,
                rate: 4,
                name: 'The Five Wounds'
              },
              {
                author: {
                  name: 'Kirstin Valdez Quade',
                  id: 10
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612030905l/53597769.jpg',
                id: 11,
                rate: 5,
                name: 'The Five Wounds'
              },
              {
                author: {
                  name: 'Kirstin Valdez Quade',
                  id: 12
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612030905l/53597769.jpg',
                id: 13,
                rate: 3,
                name: 'The Five Wounds'
              },
              {
                author: {
                  name: 'Kirstin Valdez Quade',
                  id: 14
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612030905l/53597769.jpg',
                id: 15,
                rate: 1,
                name: 'The Five Wounds'
              },
            ],
            people: [
              {
                nickname: 'Ana Dolata',
                photo: 'https://images.gr-assets.com/users/1626743530p6/122873281.jpg',
                common_genre: 0,
                id: 0,
                common_books: 1,
              },
              {
                nickname: 'Ana Dolata',
                photo: 'https://images.gr-assets.com/users/1626743530p6/122873281.jpg',
                common_genre: 0,
                id: 1,
                common_books: 1,
              },
              {
                nickname: 'Ana Dolata',
                photo: 'https://images.gr-assets.com/users/1626743530p6/122873281.jpg',
                common_genre: 0,
                id: 2,
                common_books: 1,
              },
              {
                nickname: 'Ana Dolata',
                photo: 'https://images.gr-assets.com/users/1626743530p6/122873281.jpg',
                common_genre: 6,
                id: 3,
                common_books: 1,
              },
              {
                nickname: 'Ana Dolata',
                photo: 'https://images.gr-assets.com/users/1626743530p6/122873281.jpg',
                common_genre: 0,
                id: 4,
                common_books: 1,
              },
              {
                nickname: 'Ana Dolata',
                photo: 'https://images.gr-assets.com/users/1626743530p6/122873281.jpg',
                common_genre: 5,
                id: 5,
                common_books: 1,
              },
              {
                nickname: 'Ana Dolata',
                photo: 'https://images.gr-assets.com/users/1626743530p6/122873281.jpg',
                common_genre: 0,
                id: 6,
                common_books: 1,
              },
              {
                nickname: 'Ana Dolata',
                photo: 'https://images.gr-assets.com/users/1626743530p6/122873281.jpg',
                common_genre: 0,
                id: 7,
                common_books: 1,
              },
            ]
          },
          page: 1,
        },
        status: 200
      },
      page2: {
        data: {
          result: {
            books: [
              {
                author: {
                  name: 'Elin Hilderbrand ',
                  id: 0
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591030940l/50998096.jpg',
                id: 0,
                rate: 0,
                name: 'Troubles in Paradise'
              },
              {
                author: {
                  name: 'Elin Hilderbrand ',
                  id: 0
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591030940l/50998096.jpg',
                id: 0,
                rate: 0,
                name: 'Troubles in Paradise'
              },
              {
                author: {
                  name: 'Elin Hilderbrand ',
                  id: 0
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591030940l/50998096.jpg',
                id: 0,
                rate: 0,
                name: 'Troubles in Paradise'
              },
              {
                author: {
                  name: 'Elin Hilderbrand ',
                  id: 0
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591030940l/50998096.jpg',
                id: 0,
                rate: 0,
                name: 'Troubles in Paradise'
              },
              {
                author: {
                  name: 'Elin Hilderbrand ',
                  id: 0
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591030940l/50998096.jpg',
                id: 0,
                rate: 0,
                name: 'Troubles in Paradise'
              },
              {
                author: {
                  name: 'Elin Hilderbrand ',
                  id: 0
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591030940l/50998096.jpg',
                id: 0,
                rate: 0,
                name: 'Troubles in Paradise'
              },
              {
                author: {
                  name: 'Elin Hilderbrand ',
                  id: 0
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591030940l/50998096.jpg',
                id: 0,
                rate: 0,
                name: 'Troubles in Paradise'
              },
              {
                author: {
                  name: 'Elin Hilderbrand ',
                  id: 0
                },
                cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591030940l/50998096.jpg',
                id: 1,
                rate: 0,
                name: 'Troubles in Paradise'
              },
            ],
            people: [
              {
                nickname: 'Alfredo',
                photo: 'https://images.gr-assets.com/users/1613521073p6/60843495.jpg',
                common_genre: 0,
                id: 0,
                common_books: 10,
              },
              {
                nickname: 'Alfredo',
                photo: 'https://images.gr-assets.com/users/1613521073p6/60843495.jpg',
                common_genre: 0,
                id: 0,
                common_books: 10,
              },
              {
                nickname: 'Alfredo',
                photo: 'https://images.gr-assets.com/users/1613521073p6/60843495.jpg',
                common_genre: 0,
                id: 0,
                common_books: 10,
              },
              {
                nickname: 'Alfredo',
                photo: 'https://images.gr-assets.com/users/1613521073p6/60843495.jpg',
                common_genre: 0,
                id: 0,
                common_books: 10,
              },
              {
                nickname: 'Alfredo',
                photo: 'https://images.gr-assets.com/users/1613521073p6/60843495.jpg',
                common_genre: 0,
                id: 0,
                common_books: 10,
              },
              {
                nickname: 'Alfredo',
                photo: 'https://images.gr-assets.com/users/1613521073p6/60843495.jpg',
                common_genre: 0,
                id: 0,
                common_books: 10,
              },
              {
                nickname: 'Alfredo',
                photo: 'https://images.gr-assets.com/users/1613521073p6/60843495.jpg',
                common_genre: 0,
                id: 0,
                common_books: 10,
              },
              {
                nickname: 'Alfredo',
                photo: 'https://images.gr-assets.com/users/1613521073p6/60843495.jpg',
                common_genre: 5,
                id: 0,
                common_books: 10,
              },
            ]
          },
          page:2,
        },
        status: 200
      }
    },
  },
  'profile': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': {
        'apelido': 'string',
        'foto': 'string',
        'id': 0,
        'livrosLendo': {
          'id': 0,
          'livrosLendoQtd': 0,
          'nome': 'string'
        },
        'livrosLerei': {
          'id': 0,
          'livrosLereiQtd': 0,
          'nome': 'string'
        },
        'livrosLidos': {
          'id': 0,
          'livrosLidosQtd': 0,
          'nome': 'string'
        },
        'livrosLidosQtd': 0,
        'nome': 'string',
        'seguidoresQtd': 0
      },
      'status': 200
    }
  },
  signup: {
    error: {
      data: {
        detail: 'Falha ao cadastrar!'
      },
      status: 400
    },
    success: {
      status: 201
    }
  },
  'sugestaoAmigos': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'apelido': 'string',
          'foto': 'string',
          'generosQtd': 0,
          'id': 0,
          'livrosQtd': 0
        }
      ],
      'status': 200
    }
  },
  'sugestaoLivros': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': [
        {
          'capa': 'string',
          'id': 0,
          'nome': 'string'
        }
      ],
      'status': 200
    }
  },
  'visualizarComentarios': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': {
        'comentarios': [
          {
            'comentario': 'string',
            'data_criacao': 'string',
            'id': 0,
            'likes': 0,
            'usuario': {
              'apelido': 'string',
              'foto': 'string',
              'id': 0
            }
          }
        ],
        'data_criacao': 'string',
        'id': 0,
        'likes': 0,
        'livro': {
          'capa': 'string',
          'id': 0,
          'livroStatusUsuario': {
            'id': 0,
            'status': 'string'
          },
          'nome': 'string'
        },
        'rate': 0,
        'usuario': {
          'apelido': 'string',
          'foto': 'string',
          'id': 0
        }
      },
      'status': 200
    }
  }
}

export default CONTRACTS
