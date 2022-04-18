import { Header } from "../../Components/header/header"
import { Footer } from "../../Components/footer/footer"

import '../../Assets/Css/generos.css'

import teatro from '../../Assets/IMG/theater1.png'

let headerTres:any = {
    descricao: 'Cadastre os gêneros dos filmes'
}

export const Genero = ():JSX.Element => {
    return(
        <div>
            <Header objeto = {headerTres}></Header>
            <main className="mainGenero">
                <section className="alinhamentoGenero">
                    <section className="primeiraSectionGeneros">
                        <div className="tituloGenero">
                            <h1 className="h1Generos">Gêneros</h1>
                            <img src={teatro} alt="Mascaras de teatro" className="imgGeneros" />
                        </div>
                        <div className="baseDoTituloGenero">
                            <div className="nucleoBase">
                                <h2 className="h2Generos">Cadastrar Gênero</h2>
                                <input type="text" placeholder="Gênero" className="inputGenero" />
                            </div>
                            <button className="salvarGeneros">Salvar</button>
                        </div>
                    </section>
                    <section className="segundaSectionGeneros">
                        <div className="divsNucleosSegundaSections">
                            <p className="pGeneros">Terror</p>
                            <p className="pGeneros">Ação</p>
                            <p  className="pGeneros">Comédia</p>
                        </div>
                        <div className="divsNucleosSegundaSections">
                            <div>
                                <button className="editarGenero">Editar</button>
                                <button className="excluirGenero">Excluir</button>
                            </div>
                            <div>
                                <button className="editarGenero">Editar</button>
                                <button className="excluirGenero">Excluir</button>
                            </div>
                            <div>
                                <button className="editarGenero">Editar</button>
                                <button className="excluirGenero">Excluir</button>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}