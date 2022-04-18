import { Header } from "../../Components/header/header"
import { Footer } from "../../Components/footer/footer"
import Cinema from '../../Assets/IMG/cinema1.png'

import '../../Assets/Css/filmes.css'
import '../../Assets/Css/global.css'

let headerQuatro:any = {
    descricao: 'Cadastre os filmes de sua preferência'
}

export const Filmes = ():JSX.Element => {
    return(
        <div>
            <Header objeto = {headerQuatro}></Header>
            <main className="mainFilmes">
                <section className="alinhamentoMainFilmes">
                    <section>

                        <div className="divH1Filme">
                            <h1 className="h1Filme">Filmes</h1>
                            <img src={Cinema} alt="Bobina de cinema" className="imgFilme"/>
                        </div>
                        <div className="alinhamentoInputsFilmes">
                            <div className="divH2Filmes">
                                <h2 className="h2Cadastrar">Cadastrar Filmes</h2>
                            </div>
                            <div className="nucleoInputFilmes">
                                <div>
                                    <input className="inputCadastrarFilmes" type="text" placeholder="Título do Filme"/>
                                </div>
                                <select name="selectDoUsuario" className="sectionFilmes">
                                    <option className="tamanhoPlaceholder" value="" selected={true}>Genêro</option>
                                    <option className="tamanhoPlaceholder" value="">Terror</option>
                                    <option className="tamanhoPlaceholder" value="">Anime</option>
                                    <option className="tamanhoPlaceholder" value="">Romance</option>
                                </select>
                                <button className="salvarFIlmes">Salvar</button>
                            </div>
                        </div>
                    </section>

                    <section className="sectionDoisFilmes">
                        <div className="divNucleoUmFilmes">
                            <div className="espaçamentoPFilmes">
                                <p className="pFilmes">Os outros</p>
                                <p  className="pFilmes">Até o último homem</p>
                                <p  className="pFilmes">O máscara</p>
                            </div>
                            <div className="espaçamentoPFilmes">
                                <p  className="pFilmes">Terror</p>
                                <p  className="pFilmes">Ação</p>
                                <p  className="pFilmes">Comédia</p>
                            </div>
                        </div>
                        <div className="buttonsFilmes">
                            <div>
                                <button className="editarFilmes">Editar</button>
                                <button className="excluirFilmes">Excluir</button>
                            </div>
                            <div>
                                <button className="editarFilmes">Editar</button>
                                <button  className="excluirFilmes">Excluir</button>
                            </div>
                            <div>
                                <button className="editarFilmes">Editar</button>
                                <button  className="excluirFilmes">Excluir</button>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}