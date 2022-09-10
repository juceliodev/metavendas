/**Criacao do objeto que representara um venda vinda da requisicao ao backend */

export type Sale = {
    id: number;
    sellerName: string;
    date: string;
    visited: number;
    deals: number;
    amount: number;
}