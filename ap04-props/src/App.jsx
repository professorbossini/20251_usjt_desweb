const App = () => {
  return (
    <div className="container border border-dark">
      <div className="row">
        <div className="col-12">
          <div>
            <p>Meu hipo</p>
            <i className="fa-solid fa-hippo fa-3x"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-header">
                22/04/2024
              </div>
              <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-mug-hot fa-2x"></i>
                </div>
                <div className="ms-3 border border-danger flex-grow-1">
                  <h4 className="text-center">
                    Café quente
                  </h4>
                  <p className="text-center">
                    Café expresso com açúcar. R$: 7,90
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-header">
                22/04/2024
              </div>
              <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-cookie fa-2x"></i>
                </div>
                <div className="ms-3 border border-danger flex-grow-1">
                  <h4 className="text-center">
                    Biscoito
                  </h4>
                  <p className="text-center">
                    Cookie suculento
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-header">
                22/04/2024
              </div>
              <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-car fa-2x"></i>
                </div>
                <div className="ms-3 border border-danger flex-grow-1">
                  <h4 className="text-center">
                    Mobi
                  </h4>
                  <p className="text-center">
                    Carro pequeno e sem espaço
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <div className="card">
              <div className="card-header">
                22/04/2024
              </div>
              <div className="card-body d-flex">
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-bicycle fa-2x"></i>
                </div>
                <div className="ms-3 border border-danger flex-grow-1">
                  <h4 className="text-center">
                    Bicicleta
                  </h4>
                  <p className="text-center">
                    Bicicleta aro 16
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App