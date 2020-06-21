import { Unidade } from './unidade';

export interface Login {
    id?: number;
    nome: string;
    cpf: string;
    email: string;
    login: string;
    senha: string;
    unidade: Unidade
}