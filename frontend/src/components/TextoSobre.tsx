import React from "react";
import './TextoSobre.css'

const TextoSobre = () => {
    return(
        <div className="sobre">
            <h1 className="paragrafo">Quem somos?</h1>

            <h2>Missão</h2>
            <p>Fornecer serviços de encanamento de qualidade e garantir o acesso sustentável à água potável para a população local. Nós nos comprometemos em trabalhar em conjunto para resolver os desafios relacionados ao sistema de água e encanamento, visando melhorar a qualidade de vida dos moradores.</p>

            <h2>Visão</h2>
            <p>A visão da associação é se tornar uma referência na região em termos de fornecimento de água e serviços de encanamento para o bem estar da população. Almejamos ser reconhecidos como uma organização que promove a sustentabilidade, o cuidado com o meio ambiente e a participação ativa da comunidade na gestão dos recursos hídricos.</p>
            <h2>Valores</h2>
            <ol  className="valores">
                <li className="listaSobre"><strong>Sustentabilidade:</strong> Eles estão comprometidos com práticas sustentáveis ​​na gestão dos recursos hídricos, buscando soluções que sejam ecologicamente corretas e socialmente justas.</li>
                
                <li className="listaSobre"><strong>Solidariedade:</strong> A associação promove a união e a solidariedade entre os moradores, trabalhando em colaboração para enfrentar os desafios e garantir o bem-estar coletivo.</li>
                
                <li className="listaSobre"><strong>Qualidade:</strong> Eles valorizam a prestação de serviços de alta qualidade, garantindo que os sistemas de encanamento sejam instalados e mantidos de acordo com os padrões técnicos e de segurança adequados.</li>
                
               
                
                <li className="listaSobre"><strong>Participação comunitária:</strong> Eles acreditam na importância da participação ativa da comunidade no processo de tomada de decisão e na gestão dos recursos hídricos, promovendo a conscientização e o engajamento dos moradores.</li>
            </ol>

            
        </div>
    )
}

export default TextoSobre;