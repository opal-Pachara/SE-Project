import * as React from 'react';


import Axios from 'axios';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function Add_book() {

    const [booklist,setbooklist] = useState([]);
    

    const [Book_ID,setBook_ID] = useState("");
    const [Book_Name,setBook_Name] = useState("");
    const [Book_Type,setBook_Type] = useState("");
    const [Book_Price,setBook_Price] = useState(0);
    const [Book_Detail,setBook_Detail] = useState("");
    const [Book_Quantity,setBook_Quantity] = useState(0);
    const [Book_Pic,setrBook_Pic] = useState("");

    const getBooklist = () =>{
        Axios.get('http://localhost:3001/Requst_book').then((Response) => {
            setbooklist(Response.data);
        });
    }
    getBooklist()


    
    const addBook = () =>{
        Axios.post('http://localhost:3001/Add_book_to_table',{
            Book_ID : Book_ID,
                Book_Name : Book_Name,
                Book_Type : Book_Type,
                Book_Price : Book_Price,
                Book_Detail : Book_Detail,
                Book_Quantity : Book_Quantity,
                Book_Pic : Book_Pic
        }).then( () =>{
           setbooklist([
            ...booklist,
            {
                Book_ID : Book_ID,
                Book_Name : Book_Name,
                Book_Type : Book_Type,
                Book_Price : Book_Price,
                Book_Detail : Book_Detail,
                Book_Quantity : Book_Quantity,
                Book_Pic : Book_Pic
            }
           ])
        })
    }


    return (
      <div className='App container'>
        <h1>Add book to data base</h1>
        <div className='information'>
            <form action=''>
                <div className='mb-3'>
                    <label htmlFor='Book_ID' className='form-label'>
                        Book_ID:
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Book ID'
                        onChange={(event) =>{
                            setBook_ID(event.target.value)
                        }} 
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Book_Name' className='form-label'>
                        Name:
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter name'
                        onChange={(event) =>{
                            setBook_Name(event.target.value)
                        }}  
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Book_Type' className='form-label'>
                        Book_Type:
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter TYpe'
                        onChange={(event) =>{
                            setBook_Type(event.target.value)
                        }}   
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Book_Price' className='form-label'>
                        Book_Price:
                    </label>
                    <input
                        type='float'
                        className='form-control'
                        placeholder='Enter price'
                        onChange={(event) =>{
                            setBook_Price(event.target.value)
                        }}   
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Book_Detail' className='form-label'>
                        Book_Detail:
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Detail'
                        onChange={(event) =>{
                            setBook_Detail(event.target.value)
                        }}   
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Book_Quantity' className='form-label'>
                        Book_quantity:
                    </label>
                    <input
                        type='int'
                        className='form-control'
                        placeholder='Enter Quantity'
                        onChange={(event) =>{
                            setBook_Quantity(event.target.value)
                        }}   
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Book_Pic' className='form-label'>
                        Book_Pic:
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Picture url'
                        onChange={(event) =>{
                            setrBook_Pic(event.target.value)
                        }}   
                    />
                </div>
                <Button className="btn btn-success" onClick={addBook} href='/Book_shelf'>Add Book</Button>
            </form>
        </div>
      </div>
    );
  }