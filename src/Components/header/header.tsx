import group2 from '../../Assets/IMG/Group2.png'
import '../../Assets/Css/header.css'
import '../../Assets/Css/global.css'
import { Link } from "react-router-dom";

export const Header = (props: any):JSX.Element => {
    return(
        
        <div>
            <div className="header">
                <div className='alinhamentoHeader'>
                    <div className='parteDaLogo'>
                        <img className='imgHeader' src={group2} alt="Logo da marca Filmes collection" />
                        <h2 className='popsFont'>{props.objeto.descricao}</h2>
                        <h2 className='popsFont'>{props.objeto.subDescricao}</h2>
                    </div>

                    <div className='buttonsHeader'>
                        <button className='buttonHeader'><Link to='/' className="link">Home</Link></button>
                        <button className='buttonHeader'><Link to='/Usuario' className="link">Usuario</Link></button>
                        <button className='buttonHeader'><Link to='/Filmes' className="link">Filmes</Link></button>
                        <button className='buttonHeader'><Link to='/Generos' className="link">Genêro</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}