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
          'rate': 33,
          'peoples': 10,
          'description': '2 + 2 = qualquer coisa. O Porsche 911 é um carro desportivo produzido pela alemã Porsche AG de Stuttgart, Alemanha desde 1964. O modelo está em constante evolução desde seu lançamento em 1963 no Salão de Frankfurt, com o nome de 901. Mecanicamente ele se destaca por ter motor traseiro e até o modelo 993, em 1998, refrigeração a ar. Na realidade, apenas a versão Turbo da família 993 continuou com o motor arrefecido a ar por mais um ano, depois que, em meados de 1997, na chamada família 996, o motor de aspiração natural das demais versões foi substituído por outro com arrefecimento a líquido, mantida a arquitetura 6-cilindros boxer.Wikipedia',
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
              'you_liked': false,
              'text': 'O Porsche 911 é um carro desportivo produzido pela alemã Porsche AG de Stuttgart, Alemanha desde 1964. O modelo está em constante evolução desde seu lançamento em 1963 no Salão de Frankfurt, com o nome de 901. Mecanicamente ele se destaca por ter motor traseiro e até o modelo 993, em 1998, refrigeração a ar. Na realidade, apenas a versão Turbo da família 993 continuou com o motor arrefecido a ar por mais um ano, depois que, em meados de 1997, na chamada família 996, o motor de aspiração natural das demais versões foi substituído por outro com arrefecimento a líquido, mantida a arquitetura 6-cilindros boxer.Wikipedia',
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
              'you_liked': true,
              'text': 'O Porsche 911 é um carro desportivo produzido pela alemã Porsche AG de Stuttgart, Alemanha desde 1964. O modelo está em constante evolução desde seu lançamento em 1963 no Salão de Frankfurt, com o nome de 901. Mecanicamente ele se destaca por ter motor traseiro e até o modelo 993, em 1998, refrigeração a ar. Na realidade, apenas a versão Turbo da família 993 continuou com o motor arrefecido a ar por mais um ano, depois que, em meados de 1997, na chamada família 996, o motor de aspiração natural das demais versões foi substituído por outro com arrefecimento a líquido, mantida a arquitetura 6-cilindros boxer.Wikipedia',
              'user': {
                'nickname': 'um nome bem grande de teste',
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
              'you_liked': false,
              'text': 'KKKKKKKK',
              'user': {
                'nickname': 'nome123',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 1
              }
            },
            {
              'comments': 34,
              'date': '2022-03-26T23:05:08.239252',
              'id': 1,
              'likes': 3,
              'you_liked': false,
              'rate': 10,
              'text': 'bla bla bla bla esse nome não funcionaaaaaaaaaaaaaaaaaa',
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
              'you_liked': false,
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
              'you_liked': false,
              'rate': 2,
              'text': 'KKKKKKKK',
              'user': {
                'nickname': 'nome123',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 1
              }
            },
            {
              'comments': 34,
              'date': '2022-03-26T23:05:08.239252',
              'id': 1,
              'likes': 3,
              'you_liked': false,
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
              'you_liked': false,
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
              'you_liked': false,
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
            'id': 1,
            'status': 'lendo'
          },
          'book_status': [
            {
              'id': 1,
              'status': 'já li'
            },
            {
              'id': 2,
              'status': 'lendo'
            },
            {
              'id': 3,
              'status': 'lerei'
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
        'detail': 'Error ao cerragar pessoas lendo o livro.'
      },
      'status': 404
    },
    'success': {
      'data': {
        'get_reading_people': {
          'readers_read': {
            'id': 1,
            'status': 'Quem já leu?',
            'list': [
              {
                'nickname': 'Jana',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 1
              },
              {
                'nickname': 'Ina',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 2
              },
              {
                'nickname': 'Marcos',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 3
              },
              {
                'nickname': 'Mister X',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 4
              },
              {
                'nickname': 'Roger',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 5
              },
            ]
          },
          'readers_reading': {
            'id': 2,
            'status': 'Quem está lendo?',
            'list': [
              {
                'nickname': 'JAVA',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 1
              },
              {
                'nickname': 'C',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 2
              },
              {
                'nickname': 'SQL',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 3
              },
              {
                'nickname': 'PASCAL(ZINHO)',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 4
              },
              {
                'nickname': 'JAVASCRIPT',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 5
              },
            ]
          },
          'readers_to_read': {
            'id': 3,
            'status': 'Quem está lendo?',
            'list': [
              {
                'nickname': 'Pessoa Um',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 1
              },
              {
                'nickname': 'PEssoa II',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 2
              },
              {
                'nickname': 'Pessoa C',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 3
              },
              {
                'nickname': 'Pessoa quarta',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 4
              },
              {
                'nickname': 'Pessoa número 5',
                'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
                'id': 5
              },
            ]
          }
        },

      },
      'status': 200
    },
  },
  'get_reading_people_list': {
    'error': {
      'data': {
        'detail': 'Error'
      },
      'status': 404,
    },
    'success': {
      'data': {
        'get_reading_people_list': {
          'status': 'Quem já leu?',
          'list': [
            {
              'nickname': 'pessoa Um',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 1
            },
            {
              'nickname': 'PEssoa II',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 2
            },
            {
              'nickname': 'Pessoa C',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 3
            },
            {
              'nickname': 'pessoa quarta',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 4
            },
            {
              'nickname': 'pessoa número 5',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 5
            },
            {
              'nickname': 'pessoa Um',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 11
            },
            {
              'nickname': 'PEssoa II',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 21
            },
            {
              'nickname': 'Pessoa C',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 32
            },
            {
              'nickname': 'pessoa quarta',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 41
            },
            {
              'nickname': 'pessoa número 5',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 53
            },
            {
              'nickname': 'pessoa Um',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 14
            },
            {
              'nickname': 'PEssoa II',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 112
            },
            {
              'nickname': 'Pessoa C',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 312
            },
            {
              'nickname': 'pessoa quarta',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 141
            },
            {
              'nickname': 'pessoa número 5',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 151
            },
            {
              'nickname': 'pessoa Um',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 11
            },
            {
              'nickname': 'PEssoa II',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 232
            },
            {
              'nickname': 'Pessoa C',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 113
            },
            {
              'nickname': 'pessoa quarta',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 433
            },
            {
              'nickname': 'pessoa número 5',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 511
            },
          ]
        }
      },
      'status': 200,
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
          nickname: 'Ana',
          description: 'Sou rica de vdd.',
          photo: 'https://images.gr-assets.com/users/1610853705p6/74748450.jpg',
          id: 0,
          name: 'Ana Dolata'
        }
      },
      status: 200
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
  comments: {
    error: {
      data: {
        detail: 'string'
      },
      status: 404
    },
    success: {
      data: {
        comments: [
          {
            user: {
              id: 5,
              nickname: 'Yasmin Salazar',
              photo: 'https://images.gr-assets.com/users/1633811235p6/17682991.jpg'
            },
            comment: {
              id: 4,
              likes: 3,
              date: '20/04/2021',
              text: 'Não concordo com você, Ana',
              you_liked: false
            }
          },
          {
            user: {
              id: 25,
              nickname: 'Katie Thompson',
              photo: 'https://images.gr-assets.com/users/1519545853p6/33550406.jpg'
            },
            comment: {
              id: 33,
              likes: 1,
              date: '24/04/2021',
              text: 'Você está errada, Ana',
              you_liked: false
            }
          },
          {
            user: {
              id: 55,
              nickname: 'Inés Molina',
              photo: 'https://images.gr-assets.com/users/1650679220p6/130215337.jpg'
            },
            comment: {
              id: 64,
              likes: 3,
              date: '20/04/2021',
              text: 'Ana, não é porque vc é rica que sempre tem razão.',
              you_liked: true
            }
          },
        ],
        reviewer: {
          id: 99,
          photo: 'https://images.gr-assets.com/users/1561125551p6/30803272.jpg',
          nickname: 'Ana Dolata'
        },
        review: {
          id: 8,
          review: "It's been so long since I first read this that I only had the vaguest ideas of what would happen and how, so this was a really fun re-read with my book club on Discord. I love Lackey's approach to dragons and their relationships with humans here, and the strong nods to Egyptian culture throughout are well done and enjoyed. I'm not sure when I'll have time to keep reading the series, but I know I need to since I never read the fourth book during my initial reading.",
          rate: 4,
          likes: 4,
          date: '20/01/2021',
          you_liked: true,
          book: {
            id: 9,
            cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347497671l/530938.jpg',
            name: 'Joust',
            author: 'Mercedes Lackey'
          }
        }
      }
    },
    status: 200
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
          page: 2,
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
  'book_suggestion': {
    'error': {
      'data': {
        'detail': 'erro'
      },
      'status': 404
    },
    'success': {
      'data': {
        'book_suggestion': [
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 1,
            'name': '1984',
            'rate': 10,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 2,
            'name': 'Admirável mundo novo',
            'rate': 10,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 3,
            'name': 'livro 3',
            'rate': 3,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 4,
            'name': 'livro 5',
            'rate': 2,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 5,
            'name': 'livro 21321312',
            'rate': 33,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 1,
            'name': '1984',
            'rate': 10,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 2,
            'name': 'Admirável mundo novo',
            'rate': 10,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 3,
            'name': 'livro 3',
            'rate': 3,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 4,
            'name': 'livro 5',
            'rate': 2,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 1,
            'name': '1984',
            'rate': 10,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 2,
            'name': 'Admirável mundo novo',
            'rate': 10,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 3,
            'name': 'livro 3',
            'rate': 3,
          },
          {
            'cover': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg',
            'id': 4,
            'name': 'livro 5',
            'rate': 2,
          },
        ],
      },
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
