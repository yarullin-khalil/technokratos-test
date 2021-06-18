import s from './Modal.module.css';
import Select from "./Select";

const Modal = ({isOpened, isModalShow, fname, mname, name, status}) => {
    return (
     <div className={isOpened ? s.open : s.close} >
            <div className={s.modalBody}>
                <div className={s.title}>
                    <div className={s.titleName}><h1>{`${fname} ${name}`}</h1></div>
                    <div className={s.modalClose} onClick={()=> isModalShow(false)}> &#215; </div>
                </div>
                <div className={s.modalMain}>
                    <div className={s.modalItem}> {fname} </div>
                    <div className={s.modalItem}> {name} </div>
                    <div className={s.modalItem}> {mname} </div>
                </div>

                <div className={s.modalStatus}>
                    <Select value={status}/>
                </div>
                <div className={s.button}>
                    <button onClick={()=> isModalShow(false)}> Сохранить </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
