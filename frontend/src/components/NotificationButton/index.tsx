import './style.css' 
import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type Props = {
  saleId : number;
}

function handleClick(id : number){
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then(response => {
    toast.info("Mensagem Enviada");
  })
}

function NotificationButton( {saleId} : Props ) {
    return(
      <>
        <div className='dsmeta-red-btn' onClick={() => handleClick(saleId)}>
            <img src={icon} alt="View Notification" />
        </div>
      </>
    )
  }
  
  export default NotificationButton
  