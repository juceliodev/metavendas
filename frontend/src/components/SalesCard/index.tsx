import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

/**Importacao de biblioteca esterna para trabalhar com datas */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from "../notificationButton";
import "./style.css";

function SalesCard() {
  /**Macete para setar uma data de X dias atras */
  const min = new Date(new Date().setDate(new Date().getDate() - 365));

  /**Criacao de use states para manipulacao das datas */
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(new Date());

  /*Criando um useState para manupular a venda que vira da requisiao
    useState tipado com com o sale tipo lista pois a requisicao retorna uma lista 
    e inicializado como uma lista vazia*/
  const [sales, setSales] = useState<Sale[]>([]);

  {
    /**Utilizando o axios para fazer requisicao com o backend
  O useEffect é exercutado sempre que o componente é montado e tambem sempre 
  que um dado passado para ele é alterado. esta atrelado ao ciclo de
  vida do componetne
  A requisicao retorna uma promisse e o metodo .then recebe esta promisse caso tudo de certo  */
  }
  useEffect(() => {
    axios.get(`${BASE_URL}/sales`).then((response) => {
      setSales(response.data.content);
    });
  }, []);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sale-table">
          <thead>
            <tr>
              <th className="show992px">ID</th>
              <th className="show576px">Data</th>
              <th>Vendedor</th>
              <th className="show992px">Visitas</th>
              <th className="show992px">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => {
              return (
                /**Para trabalhar listas precisamos informar uma chave para que o react
                possta gerencias quais valores foram alterados */
                <tr key={sale.id}>
                  <td className="show992px">{sale.id}</td>
                  {/**toLocaleDateString funcao do jacascript para mostrar a data em formato 
                   *  dd/mm/yyy para o usuario, a data vem da requisicao com formato yyyy/mm/dd.
                   */}
                  <td className="show576px">{new Date(sale.date).toLocaleDateString()}</td>
                  <td>{sale.sellerName}</td>
                  <td className="show992px">{sale.visited}</td>
                  <td className="show992px">{sale.deals}</td>
                  {/**toFixed funcao do java script para colocar casas decimais */}
                  <td>R$ {sale.amount.toFixed(2)}</td>
                  <td>
                    <div className="dsmeta-red-btn-container">
                      <NotificationButton />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
