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
        'nota': 0,
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
              'nota': 0
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
        'id': 1,
        'year': '2000-02-12',
        'assessments_count': 3,
        'cover': 'aaa',
        'book_title': '1984',
        'note': 0,
        'people_count': 0,
        'synopsis': '2 + 2 = qualquer coisa',
        'author': [
          {
            'id': 1,
            'name': 'kakkaka'
          }
        ],
        'assessments': [
          {
            'comments_count': 3,
            'date_create': '2022-03-26T23:05:08.239252',
            'id': 1,
            'likes_count': 3,
            'note': 2,
            'text': 'bla bla bla bla',
            'user': {
              'nickname': 'nome123',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 1
            }
          },
          {
            'comments_count': 3,
            'date_create': '2022-03-26T23:33:08.239252',
            'id': 1,
            'likes_count': 3,
            'note': 2,
            'text': 'bla bla bla bla',
            'user': {
              'nickname': 'grauber',
              'photo': 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1428832015i/5876502._UX100_CR0,0,100,100_.jpg',
              'id': 2
            }
          },
          {
            'comments_count': 3,
            'date_create': '2022-03-27T23:05:08.239252',
            'id': 3,
            'likes_count': 3,
            'note': 2,
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
          'nota': 0
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
          'nota': 0
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
          'nota': 0
        }
      ],
      'status': 200
    }
  },
  'login': {
    'error': {
      'data': {
        'detail': 'Falha ao realizar login!'
      },
      'status': 404
    },
    'success': {
      'data': {
        'access_token': 'STRINGEXEMPLO',
        'token_type': 'Bearer',
        'usuario': {
          'apelido': 'Exemplinho',
          'descricao': 'Sou rica',
          'foto': 'string',
          'id': 0,
          'nome': 'Exemplo'
        }
      },
      'status': 200
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
  'notificacoes': {
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
            'id': 0,
            'livro': {
              'id': 0,
              'nome': 'string'
            },
            'usuario': {
              'apelido': 'string',
              'foto': 'string',
              'id': 0
            }
          }
        ],
        'solicitacoes': [
          {
            'data_criacao': '2002-12-12',
            'pendente': 0,
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
  'pesquisar': {
    'error': {
      'data': {
        'detail': 'string'
      },
      'status': 404
    },
    'success': {
      'data': {
        'livros': [
          {
            'autor': {
              'nome': 'string'
            },
            'capa': 'string',
            'id': 0,
            'nota': 0
          }
        ],
        'usuarios': [
          {
            'apelido': 'string',
            'foto': 'string',
            'generosEmComum': 0,
            'id': 0,
            'livrosEmComum': 0
          }
        ]
      },
      'status': 200
    }
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
  'signup': {
    'error': {
      'data': {
        'detail': 'Falha ao cadastrar!'
      },
      'status': 400
    },
    'success': {
      'status': 201
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
        'nota': 0,
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
