import React from 'react'
import load_book from './../../assets/images/book-load.gif'
import './styles.css'
export const Loading = () => {
    return (
        <div className="div-book-load">
            <img className="img-book-load" src={load_book} />
        </div>
    )
}