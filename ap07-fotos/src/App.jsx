import { Component } from 'react'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'
import { createClient } from 'pexels'
import Busca from './components/Busca'
class App extends Component {

    pexelsClient = null

    componentDidMount(){
        this.pexelsClient = createClient(
            'a91Qyfh2Ud1rdeOGKV8aTR5Aj9UmRvdma6EdyhC9EfKStoAyt7rmDuhV'
        )
    }

    onBuscaRealizada = (termo) => {
        this.pexelsClient.photos.search({query: termo})
        .then((result) => console.log(result))
    }

    render(){
        return(
            <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
                <div className='col-12'>
                    <h1>Exibir uma lista de...</h1>
                </div>
                <div className='col-8'>
                    <Busca 
                        onBuscaRealizada={this.onBuscaRealizada}/>
                </div>
            </div>
        )
    }
}
export default App