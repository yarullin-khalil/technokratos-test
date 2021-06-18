import s from "./Users.module.css";

const Select = ({value}) => {

    const options =  [{id: 0, title:'Приостановлена'}, {id: 1, title:'Подписка активна'}, {id: 2, title:'Заблокирован'}]
    const option = options.map((item) => {
        if(value === item.id) return <option selected value={item.id}>{item.title}</option>
       return <option disabled="disabled" value={item.id}>{item.title}</option>
    })

    return (
        <select className={s.status} >
            {option}
        </select>
    )
}

export default Select
