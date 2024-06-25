import api from "./api"

export const getAllJogos = () => {
    const url = '/jogos'

    return api.get(url);
}

export const getJogoById = (id: string | number) => {
    const url = '/jogos/' + id;

    return api.get(url);
}

export const postJogo = (jogo: {}) => {
    const url = '/jogos';

    return api.post(url, jogo);
}

export const deleteJogo = (id: string | number) => {
    const url = '/jogos/' + id;

    return api.delete(url);
}