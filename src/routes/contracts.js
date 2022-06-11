const CONTRACTS = {
    "login": {
            "success": {
                "data": {
                      "usuario": {
                        "id": 0,
                        "nome": "string",
                        "apelido": "string",
                        "foto": "string",
                        "descricao": "string"
                      },
                      "access_token": "string",
                      "token_type": "string"

                },
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "criar": {
            "success": {
                "status": 201
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 400
            }
        },

        "generos": {
            "success": {
                "data": [
                    {
                        "id": 0,
                        "genero": "string"
                    }
                ],
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "feed": {
            "success": {
                "data": {
                    "comentario": [
                        {
                        "id": 0,
                        "data_criacao": "2022-02-17",
                        "texto": "string",
                        "likes": 0,
                        "comentariosQtd": 0,
                        "usuario": {
                            "id": 0,
                            "apelido": "string",
                            "foto": "string"
                        },
                        "livro": {
                            "id": 0,
                            "nome": "string",
                            "capa": "string"
                        }
                    }
                    ],
                    "avaliacao": [
                        {
                        "id": 0,
                        "texto": "string",
                        "data_criacao": "2022-07-12",
                        "likes": 0,
                        "comentariosQtd": 0,
                        "usuario": {
                            "id": 0,
                            "apelido": "string",
                            "foto": "string"
                        },
                        "livro": {
                            "id": 0,
                            "nome": "string",
                            "capa": "string",
                            "nota": 0
                        }
                    }
                    ]
                },
                "status": 200
            },
            "error":{
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "conversas": {
            "success": {
                "data": [{
                    "id": 0,
                    "texto": "string",
                    "usuario": {
                        "id": 0,
                        "apelido": "string",
                        "foto": "string"
                    }
                }],
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "sugestaoLivros": {
            "success": {
                "data": [
                        {
                            "id": 0,
                            "nome": "string",
                            "capa": "string"
                        }
                ],
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "notificacoes": {
            "success": {
                "data": {
                    "solicitacoes": [
                        {
                            "data_criacao": "2002-12-12",
                            "pendente": 0,
                            "usuario": {
                                "id": 0,
                                "apelido": "string",
                                "foto": "string"
                            }
                        }
                    ],
                    "avaliacao": [
                        {
                            "id": 0,
                            "livro": {
                                "id": 0,
                                "nome": "string"
                            },
                            "usuario": {
                                "id": 0,
                                "apelido": "string",
                                "foto": "string"
                            }
                        }
                    ]
                },
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "atualizar": {
            "success": {
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 400
            }
        },

        "mensages":{
            "success": {
                "data": [
                        {
                            "id": 0,
                            "mensagem": "string"
                        }
                ],
                "status": 200
            },
            "error":{
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "sugestaoAmigos": {
            "success": {
                "data": [
                        {
                            "id": 0,
                            "apelido": "string",
                            "foto": "string",
                            "livrosQtd": 0,
                            "generosQtd": 0
                        }
                ],
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "pesquisar": {
            "success": {
                "data": {
                    "usuarios": [{
                        "id": 0,
                        "apelido": "string",
                        "foto": "string",
                        "livrosEmComum": 0,
                        "generosEmComum": 0
                    }],
                    "livros": [{
                        "id": 0,
                        "capa": "string",
                        "nota": 0,
                        "autor": {
                            "nome": "string"
                        }
                    }]
                },
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "buscarIsbn": {
            "success": {
                "data": {
                    "nome": "string",
                    "ano": "2002-02-02",
                    "capa": "string",
                    "genero": [{
                        "nome": "string"
                    }],
                    "autor": [{
                        "nome": "string"
                    }],
                    "sinopse": "string"
                },
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "livro": {
            "success": {
                "data": {
                    "id": 0,
                    "nome": "string",
                    "ano": "2000-02-12",
                    "nota": 0,
                    "sinopse": "string",
                    "capa": "string",
                    "avaliacoesQtd": 0,
                    "pessoasQtd": 0,
                    "livroStatusUsuario": {
                        "id": 0,
                        "status": "string"
                    },
                    "genero": {
                        "id": 0,
                        "nome": "string"
                    },
                    "autor": [
                        {
                            "nome": "string",
                            "id": 0
                        }
                    ],
                    "avaliacoes": [
                        {
                            "id": 0,
                            "data_criacao": "2022-03-26T23:05:08.239252",
                            "texto": "string",
                            "nota": 0,
                            "likes": 0,
                            "comentariosQtd": 0,
                            "usuario": {
                                "id": 0,
                                "apelido": "string",
                                "foto": "string"
                            }
                        }
                    ],
                    "statusLivro": [
                        {
                            "id": 0,
                            "status": "string"
                        }
                    ]
                },
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "perfil": {
            "success": {
                "data":{
                    "id": 0,
                    "apelido": "string",
                    "nome": "string",
                    "foto": "string",
                    "livrosLidosQtd": 0,
                    "seguidoresQtd": 0,
                    "livrosLidos": {
                        "id": 0,
                        "nome": "string",
                        "livrosLidosQtd": 0
                    },
                    "livrosLerei": {
                        "id": 0,
                        "nome": "string",
                        "livrosLereiQtd": 0
                    },
                    "livrosLendo": {
                        "id": 0,
                        "nome": "string",
                        "livrosLendoQtd": 0
                    }
                },
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "livrosLidos": {
            "success": {
                "data": [
                        {
                            "id": 0,
                            "nota": 0,
                            "avalicoesQtd": 0,
                            "capa": "string",
                            "nome": "string",
                            "autor": {
                                "id": 0,
                                "nome": "string"
                            }
                        }
                ],
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "livrosSeraoLidos": {
            "success": {
                "data": [
                        {
                            "id": 0,
                            "nota": 0,
                            "avalicoesQtd": 0,
                            "capa": "string",
                            "nome": "string",
                            "autor": {
                                "id": 0,
                                "nome": "string"
                            }
                        }
                ],
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "livrosLendo": {
            "success": {
                "data": [
                        {
                            "id": 0,
                            "nota": 0,
                            "avalicoesQtd": 0,
                            "capa": "string",
                            "nome": "string",
                            "autor": {
                                "id": 0,
                                "nome": "string"
                            }
                        }
                ],
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "pessoasLivro": {
            "success": {
                "data": [
                        {
                            "id": 0,
                            "apelido": "string",
                            "foto": "string"
                        }
                ],
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "amigos": {
            "success": {
                "data": [
                        {
                            "id": 0,
                            "apelido": "string",
                            "foto": "string"
                        }
                ],
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "avaliarLivro": {
            "success": {
                "data": {
                    "id": 0,
                    "nome": "string",
                    "capa": "string",
                    "nota": 0,
                    "ano": "2022-02-02",
                    "sinopse": "string",
                    "genero": {
                        "nome": "string"
                    },
                    "autor": {
                        "id": "string",
                        "nome": "string"
                    }
                },
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        },

        "visualizarComentarios": {
            "success": {
                "data": {
                    "id": 0,
                    "nota": 0,
                    "data_criacao": "string",
                    "likes": 0,
                    "usuario": {
                        "id": 0,
                        "apelido": "string",
                        "foto": "string"
                    },
                    "livro": {
                        "id": 0,
                        "nome": "string",
                        "capa": "string",
                        "livroStatusUsuario": {
                            "id": 0,
                            "status": "string"
                        }

                    },
                    "comentarios": [{
                        "id": 0,
                        "comentario": "string",
                        "data_criacao": "string",
                        "likes": 0,
                        "usuario": {
                            "id": 0,
                            "apelido": "string",
                            "foto": "string"
                        }
                    }]
                },
                "status": 200
            },
            "error": {
                "data": {
                    "detail": "string"
                },
                "status": 404
            }
        }
}

export default CONTRACTS
