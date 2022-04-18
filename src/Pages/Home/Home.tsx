import { Header } from "../../Components/header/header"
import { Footer } from "../../Components/footer/footer"

import cinema1 from '../../Assets/IMG/cinema1.png'
import teatro from '../../Assets/IMG/theater1.png'

import '../../Assets/Css/home.css'

let headerUm:any = {
    descricao: 'Conheça nossa Coletânea'
}

export const Home = ():JSX.Element => {
    
    return(
        <div>
            <Header objeto={headerUm}></Header>
            <main className="mainHome">
                <section className="alinahmentoMainHome">
                    <section>
                        <div className="divH1Home">
                            <h1 className="h1Home">Monte sua coletânea de filmes...</h1>
                        </div>

                        <div>
                            <h2 className="h3Home">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</h2><br />
                            <p className="pHome"> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                        </div>
                    </section>

                    <section className="sectionCardsHome">
                        <div className="cardCategoriaHome">
                            <img src={cinema1} alt="Bobina de cinemas" className="imgsHome"/>
                            <h3 className="h3Home">Filmes</h3><br />
                            <p className="pHome pHomeCard">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="cardCategoriaHome">
                            <img src={teatro} alt="Mascaras de teatro" className="imgsHome"/>
                            <h3 className="h3Home">Categoria</h3><br />
                            <p className="pHome pHomeCard">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut eiusmod tempor incididunt ut labore aliquip ex ea commodo consequat.</p>
                        </div>
                    </section>

                </section>
            </main>
            <Footer></Footer>
        </div>
        
    )
}