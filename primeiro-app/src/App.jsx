const App = () => {
  //kebab case
  // const background-color-outra-palavra;
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label htmlFor='nome' style={{display: 'block', marginBottom: 4}}>
        Nome:
      </label>
      <input type='text' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', width: '100%', borderRadius: 8}}/>
      <button type='button' style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', borderRadius: 8, width: '100%', color: 'white', cursor: 'pointer', borderStyle: 'none'}}>
        Enviar
      </button>
    </div>
  )
}

export default App

//pessoa que se chama Ana e tem 17 anos
// {
//   nome: 'Ana',
//   idade: 17
// }




// function oi(nome){
//   console.log("oi, " + nome)
//   return nome[0]
// }
// console.log('Seu nome começa com ' + oi('Ana'))

// //arrow functions
// // const oi = () => {}
// // const oi = () => {console.log('oi')}
// // const t = 2
// // const oi = nome => console.log ('Oi, ' + nome)
// const dobro = n => 2 * n
// const resultado = dobro(5)
// oi()