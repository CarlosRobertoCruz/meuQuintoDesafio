import groupe1 from '../../Assets/IMG/Group 1.png'
import '../../Assets/Css/footer.css'
import '../../Assets/Css/global.css'

export const Footer = ():JSX.Element => {
    return(
        <div>
            <div className="footer">
                <div className='alinhamentoFooter'>
                    <div className='ladoFooter'>
                        <img className='imgFooter' src={groupe1} alt="Logo do Filmes Colletions" />
                    </div>
                    <div className='ladoFooterBarra'>
                        <div className='barraDivisoria'></div>
                    </div>
                    <div className='pFooter'>
                        <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
                        <p> Call us now toll free: (800)2345-6789</p>
                        <p>Customer support: support@demolink.org</p>
                        <p>Skype: sample-username</p>
                    </div>
                </div>
            </div>
        </div>
    )
}