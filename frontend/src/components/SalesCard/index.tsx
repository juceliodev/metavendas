import { useState } from "react";

/**Importacao de biblioteca esterna para trabalhar com datas */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from "../notificationButton";
import "./style.css";

function SalesCard() {

    /**Macete para setar uma data de X dias atras */
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate , setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());


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
            <tr>
              <td className="show992px">#341</td>
              <td className="show576px">08/07/2022</td>
              <td>Anakin</td>
              <td>R$ 55300,00</td>
              <td className="show992px">15</td>
              <td className="show992px">11</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992px">#341</td>
              <td className="show576px">08/07/2022</td>
              <td>Anakin</td>
              <td>R$ 55300,00</td>
              <td className="show992px">15</td>
              <td className="show992px">11</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992px">#341</td>
              <td className="show576px">08/07/2022</td>
              <td>Anakin</td>
              <td>R$ 55300,00</td>
              <td className="show992px">15</td>
              <td className="show992px">11</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992px">#341</td>
              <td className="show576px">08/07/2022</td>
              <td>Anakin</td>
              <td>R$ 55300,00</td>
              <td className="show992px">15</td>
              <td className="show992px">11</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
