import React from 'react';
import { Link } from "react-router-dom";
import { Navigator } from './navigator'


export class Clientes extends React.Component {
    render() {
        return (
            <div >
                <Navigator />

                <div className="alarma-comunitaria">
                    <h4>clientes</h4>


                </div>
            </div>

        )
    }
}