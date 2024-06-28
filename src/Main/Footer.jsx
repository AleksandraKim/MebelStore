import './MainStyles.css'
import Vk from '../images/free-icon-vk-1236871.png'
import Inst from '../images/free-icon-instagram-739244.png'
import Teleg from '../images/free-icon-telegram-739260.png'

export default function Footer(){

    return  <div id='footerMain'>
               <div className='adress'>
                   <p className='location'>МЕСТОПОЛОЖЕНИЕ</p>
                   <p className='locationAdress' > 40005, ул.Пражская, 16а</p>
                </div>
               <div class='social'>
                   <p>СОЦИАЛЬНЫЕ СЕТИ</p>
                     <p><a href='#' class='icons'><img src={Vk} width='20px'/></a>
                        <a href='#' class='icons'><img src={Inst} width='20px'/></a>
                        <a href='#' class='icons'><img src={Teleg} width='20px'/></a>
                     </p>
               </div>
           </div>
}

