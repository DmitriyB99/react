import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Danil'},
        {id: 5, name: 'Sanya'},
        {id: 6, name: 'Irma'}
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Whats up'},
        {id: 3, message: 'How r u'},
        {id: 4, message: 'I like programming'},
        {id: 5, message: 'Lol'},
        {id: 6, message: 'Wtf'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map( m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
};

export default Dialogs;
