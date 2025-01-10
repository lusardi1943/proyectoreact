import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Autocompletar extends Component {
    static propTypes = {
        sugerencias: PropTypes.instanceOf(Array)
    };

    //Define la propiedad predeterminada con sugerencias como un array vacio.
    static defaultProperty = {
        sugerencias: []
    }

    constructor(props) {
        super(props);
        this.state = {
            sugerenciaActiva: 0,
            sugerenciaFiltro: [],
            mostrarSugerencias: false,
            inputUser: ""
        }
    }

    onChange = (e) => {
        const { sugerencias } = this.props;
        const inputUser = e.currentTarget.value;

        const sugerenciaFiltro = sugerencias.filter(
            (sugerencia) => sugerencia.toLowerCase().indexOf(inputUser.toLowerCase()) > -1
        );

        this.setState({
            sugerenciaActiva: 0,
            sugerenciaFiltro,
            mostrarSugerencias: true,
            inputUser: e.currentTarget.value
        });
    }

    // Se hace click sobre la palabra encontrada y se rellena el input con esa palabra
    onClick = e => {
        this.setState({
            sugerenciaActiva: 0,
            sugerenciaFiltro: [],
            mostrarSugerencias: false,
            inputUser: e.currentTarget.innerText
        });
    }

    render() {
        // El componente Autocompletar presenta una entrada y una lista de sugerencias, 
        // todas están envueltas en un React.Fragment. Es un contenedor, al igual que div, 
        // pero no se procesa en la salida final. Esto evita divs de envoltura innecesarios.

        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                sugerenciaActiva,
                sugerenciaFiltro,
                mostrarSugerencias,
                inputUser
            }
          } = this;

        let sugerenciasListaComponent;
        if(mostrarSugerencias && inputUser){
            if(sugerenciaFiltro.length) {
                sugerenciasListaComponent = (
                    <ul className="sugerencias">
                        {sugerenciaFiltro.map((sugerencia, index) => {
                            return (
                                <li key={sugerencia} onClick={onClick}>
                                    {sugerencia}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                sugerenciasListaComponent = (
                    <div className="no-sugerencia">
                        <h2>No hay sugerencias! </h2>
                    </div>
                );
            }
        }
        return (
            <React.Fragment>
                <input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={inputUser}
                    placeholder="Buscar sugerencias..."
                />
                {sugerenciasListaComponent}
            </React.Fragment>
        );
    };
}

export default Autocompletar;