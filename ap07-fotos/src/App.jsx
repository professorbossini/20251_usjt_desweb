import { Component } from 'react'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import { createClient } from 'pexels'
import Busca from './components/Busca'
import ListaImagens from './components/ListaImagens'
import PexelsLogo from './components/PexelsLogo'
class App extends Component {

    state = {pics: []}
    pexelsClient = null
    pexelsKey = import.meta.env.VITE_PEXELS_KEY

    componentDidMount(){
        this.pexelsClient = createClient(
            this.pexelsKey
        )
    }

    onBuscaRealizada = (termo) => {
        this.pexelsClient.photos.search({query: termo})
        .then((result) => this.setState({pics: result.photos}))
    }

    render(){
        return(
            <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
                <div className='col-12'>
                    <PexelsLogo/>
                </div>
                <div className='col-12'>
                    <h1>Exibir uma lista de...</h1>
                </div>
                <div className='col-8'>
                    <Busca 
                        onBuscaRealizada={this.onBuscaRealizada}/>
                </div>
                <div className='col-8'>
                    <ListaImagens pics={this.state.pics}/>
                </div>
            </div>
        )
    }
}
export default App