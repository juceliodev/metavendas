import logo from "../../assets/img/logo.svg"
import "./style.css"

function Header(){
    return(
        <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="logo" />
        <h1>DSMETA</h1>
        <p>
          Desenvolvido por
          <a href="http://linkedin.com/in/juceliodesa"> juceliodesa</a>
        </p>
      </div>
    </header>
    )
}

export default Header