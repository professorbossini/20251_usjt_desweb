/* eslint-disable react/prop-types */
import { Component } from "react"
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }
    onTermoAlterado = (event) => {
        this.setState({termoDeBusca: event.target.value})
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="flex flex-column">
                    <IconField iconPosition="left">
                        <InputIcon className="pi pi-search"></InputIcon>
                        <InputText 
                            className="w-full"
                            value={this.state.termoDeBusca}
                            onChange={this.onTermoAlterado}
                            placeholder="O que quer ver?" />
                    </IconField>
                    <Button
                        label='OK'
                        className="p-button-outlined mt-2"
                    />
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver...'
}