import * as React from 'react';


import Axios from 'axios';
import { useState } from 'react';




export default function Manage_book() {

    
    const [booklist,setbooklist] = useState([]);

    const getBooklist = () =>{
        Axios.get('http://localhost:3001/Requst_book').then((Response) => {
            setbooklist(Response.data);
        });
    }
    getBooklist();

    const [selectbook,setselectbook] = useState("");

    

  return (
    
    <div className='grid-Box'>
        {booklist.map((val, key) =>{
            return (
                <div className="grid-Box">
                    <div className='grid-item'>
                        <div className='content'>
                            <p>Book ID:{val.Book_ID}</p>
                            <p>{val.Book_Name}</p>
                            <p>{val.Book_Type}&nbsp;&nbsp;{val.Book_Price}$</p>
                            <button className="btn btn-success" href='/book_update'>Update</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  );
}