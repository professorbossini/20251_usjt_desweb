/* eslint-disable no-unused-vars */
import axios from 'axios'
//import striptags from 'striptags'
import { useEffect, useState } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const Busca = () => {
    const [termoDeBusca, setTermoDeBusca] = useState('React')
    const [resultados, setResultados] = useState([])
    console.log(resultados)
    // useEffect(() => {
    //     console.log("Causando um efeito colateral")
    //     return () => {
    //         console.log("Posso limpar algo deixado para trás...")
    //     }
    // })
    useEffect(() => {
        const fazBusca = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    srsearch: termoDeBusca,
                    origin: '*'
                }
            })
            setResultados(data.query.search)
        }
        if (termoDeBusca && !resultados.length){
            fazBusca()
        } else {
            const timeoutID = setTimeout(() => {
                if(termoDeBusca)
                    fazBusca()
            }, 1000)
            return () => {
                clearTimeout(timeoutID)
            }
        }
    }, [termoDeBusca])

    return (
        <div>
            <IconField iconPosition='left'>
                <InputIcon className='pi pi-search' />
                <InputText 
                    placeholder='Buscar...'
                    value={termoDeBusca}
                    onChange={(e) => {
                        setTermoDeBusca(e.target.value)
                    }}/>
            </IconField>
            {
                resultados.map((resultado) => (
                    <div 
                        key={resultado.pageid}
                        className='my-3 border border-1 border-400'>
                        <div className='border-bottom border border-1 border-400 p-3 text-center font-bold'>
                            {resultado.title}
                            <span>
                            <Button
                                icon="pi pi-send"
                                className="ml-2 p-button-rounded p-button-secondary"
                                onClick = {() => window.open(
                                    `https:\\en.wikipedia.org?curid=${resultado.pageid}`
                                )}
                                />
                            </span>    
                        </div>
                        <div>
                            <span 
                                dangerouslySetInnerHTML={{__html: resultado.snippet}}>
                            </span>
                            
                        </div>
                    </div>
                ))
            }   
        </div>
    )
}

export default Busca