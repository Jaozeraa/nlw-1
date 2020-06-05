import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

import './styles.css'

const Success = () => {
    return(
        <div id="page-success">
            <main>
                <span>
                    <FiCheckCircle />
                </span>
                <h1>Cadastro concluído!</h1>
            </main>
        </div>
    )
}

export default Success