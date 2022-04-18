import { Header } from "../../Components/header/header"
import { Footer } from "../../Components/footer/footer"

import '../../Assets/Css/usuario.css'

let headerDois:any = {
    descricao: 'Faça o Cadastro de usuários e edite, caso necessário',
    subDescricao: 'Pronto para cadastrar?'
}

export const Usuario = ():JSX.Element => {
    return(
        <div>
            <Header objeto = {headerDois}></Header>
            <main className="mainUsuario">
                <section className="alinahmentoMain">
                    <section>
                        <div className="cadastroDiv">
                            <h1 className="h1Usuario">Cadastro</h1>
                        </div>
                        <div className="baseH1">
                            <div className="divInputs">
                                <div>
                                    <p className="pUsuario">Nome</p>
                                    <input type="text" className="inputUsuario"/>
                                </div>
                                <div>
                                    <p className="pUsuario">Email</p>
                                    <input type="text" className="inputUsuario"/>
                                </div>
                                <div>
                                    <p className="pUsuario">Telefone</p>
                                    <input type="text" className="inputUsuario"/>
                                </div>
                            </div>
                            <div>
                                <button className="cadastrarUsuario">Cadastrar</button>
                            </div>
                        </div>
                    </section>

                    <section className="sectionDoisUsuario">
                        <div className="divDasCardsUsuarios">
                            <div className="divCardsUsuarios">
                                <p className="pUsuario">Paulo Andre</p>
                                <p className="pUsuario">Marcos Lucio</p>
                                <p className="pUsuario">Laura Port</p>
                                
                            </div>
                            <div className="contatosUsuarios">
                                <div className="alturaContatosUsuario">
                                    <p className="pUsuario">paulo@email.com</p>
                                    <p className="pUsuario">marcos@email.com</p>
                                    <p className="pUsuario">laura@email.com</p>
                                </div>
                                
                                <div className="alturaContatosUsuario">
                                    <p className="pUsuario">3349 6788</p>
                                    <p className="pUsuario">3349 6788</p>
                                    <p className="pUsuario">3349 6788</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className="buttonsUsuarioDiv">
                            <div>
                                <button className="editarUsuario">Editar</button>
                                <button className="excluirUsuario">Excluir</button>
                            </div>
                            <div>
                                <button className="editarUsuario">Editar</button>
                                <button className="excluirUsuario">Excluir</button>
                            </div>
                            <div>
                                <button className="editarUsuario">Editar</button>
                                <button className="excluirUsuario">Excluir</button>
                            </div>
                        </div>

                    </section>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}