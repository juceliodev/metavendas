/**Definicao da variavel de ambiente para ser usada na requisicao
 * Esta definicao usando os ?? é para que pegue o valor localhost caso nao tenha definido
 * uma variavel de ambiente é boa pratica para ambientes de testes.
 */

export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";