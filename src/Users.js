import s from './Users.module.css';
import * as axios from 'axios';
import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import Modal from './Modal';
import Select from "./Select";


class Users extends React.Component {
    state = {
        isOpened: false,
        fname: '',
        mname: '',
        name: '',
        status: ''
    }


    componentDidMount() {
        axios.get('https://watchlater.cloud.technokratos.com/get/array')
            .then(response => {
                this.props.getUsers(response.data)
            })
    }
    isModalShow(value, fname, name, mname, status) {
        this.setState({
            isOpened: value,
            fname,
            mname,
            name,
            status
        })
    }

    render() {
        const users = this.props.users.map((item, index) => {
            moment.locale('ru');

            return (

                    <div key={index} className={s.userDiv} >
                        <div className={s.photoName}
                             onClick={()=> this.isModalShow(true,item.fname, item.name, item.mname, item.status)}>
                            <img alt='#' src={item.avatar}/>
                            <span className={s.userName}> {item.fname} {(item.name)[0]}. {(item.mname)[0]}.</span>
                        </div>

                        <div className={s.balance}
                             onClick={()=> this.isModalShow(true,item.fname, item.name, item.mname, item.status)}>
                            Баланс: {(item.balance).toFixed(2)}
                        </div>
                        <div className={s.date}
                             onClick={()=> this.isModalShow(true,item.fname, item.name, item.mname, item.status)}>
                            Последнее изменение: {moment(item.lastUpdatedAt).fromNow()}
                        </div>
                        <Select value={item.status}/>
                    </div>
            )
         }
      )

       return <div className={s.mainDiv}>
                    <header>
                        <div> <span className={s.activeHeaderSpan}>Все</span> <span>Заблокированные</span> <span>Активные</span> </div>
                    </header>
                    {users}
                    <Modal
                            isOpened={this.state.isOpened}
                            isModalShow={this.isModalShow.bind(this)}
                            fname={this.state.fname}
                            name={this.state.name}
                            mname={this.state.mname}
                            status={this.state.status}
                        />

              </div>
    }
}

export default Users;
