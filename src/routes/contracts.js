const CONTRACTS = {
    login: {
        success: {
            data: {
                access_token: 'TOKENDEACESSO',
                usuario: {
                    nome: 'EXEMPLO',
                    apelido: 'EXEMPLINHO',
                    descricao: 'SOULINDO'
                },
            },
            status: 200,
        },
        error: {
            data: {
                detail: 'Falha'
            },
            status: 404,
        }
    }
}

export default CONTRACTS