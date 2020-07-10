import { Unidade } from './unidade';

export interface Login {
    id?: number;
    nome: string;
    cpf: string;
    email: string;
    senha: string;
    unidade: Unidade
}