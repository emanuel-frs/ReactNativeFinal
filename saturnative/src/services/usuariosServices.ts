import api from "./api"

export const getUsuarios = () => {
    const url = '/usuarios'

    return api.get(url);
}