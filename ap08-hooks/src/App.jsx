//import Accordion from "./components/Accordion"
import Busca from './components/Busca'
// const itens = [
//     {
//         titulo: 'Java',
//         conteudo: 'Linguagem compilada e interpretada.'
//     },
//     {
//         titulo: 'Python',
//         conteudo: 'Linguagem interpretada e dinamicamente tipada.'
//     },
//     {
//         titulo: 'Javascript',
//         conteudo: 'Interpretada. Executa do lado cliente e do lado servidor também.'
//     }
// ]

const App = () => {
    const expressaoJSX = <Busca />
    return(
        <div>
            {expressaoJSX}
        </div>
    )
}

export default App