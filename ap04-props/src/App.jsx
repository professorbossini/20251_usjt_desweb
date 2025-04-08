const App = () => {
  return (
    <div className="container border border-dark">
      <div className="row">
        <div className="col-12">
          <div>
            <p>Meu hipo</p>
            <i className="fa-solid fa-hippo"></i>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-3 col-md-6">
            <p className="border border-dark">Pedido 1</p>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <p className="border border-dark">Pedido 2</p>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <p className="border border-dark">Pedido 3</p>
          </div>
          <div className="col-sm-12 col-lg-3 col-md-6">
            <p className="border border-dark">Pedido 4</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App