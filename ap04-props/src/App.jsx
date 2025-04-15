import Pedido from "./Pedido"

const App = () => {
  return (
    <div className="container border border-dark">
      <div className="row">
        <div className="col-12">
          <div>
            <p>Meus hipos</p>
            <i className="fa-solid fa-hippo fa-3x"></i>
            <i className="ms-1 fa-solid fa-hippo fa-3x fa-flip-horizontal"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido 
              data="22/04/2024"
              titulo="Café quente"
              icone="mug-hot"
              descricao="Café quente expresso no copo americano"/>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido 
              data="23/04/2024"
              titulo="Biscoito"
              icone="cookie"
              descricao="Cookie suculento"/>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido 
              data="14/04/2025"
              titulo="Mobi"
              icone="car"
              descricao="Carro pequeno e sem espaço"/>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
          <Pedido 
              data="17/03/2024"
              titulo="Bicicleta"
              icone="bicycle"
              descricao="Bicicleta aro 16 cor amarela"/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App