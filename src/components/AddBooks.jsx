import axios from 'axios'
import React, { useRef } from 'react'

export default function AddBooks() {
    const titleElement = useRef('')
    const authorElement = useRef('')

    const addBook = async (newBook)=>{
        const {data} = await axios.post(process.env.REACT_APP_API_URL, newBook)
        if(data.id){
            window.alert("Book added with id: " + data.id)
            titleElement.current.value = ''
            authorElement.current.value = ''
        }else{
            window.alert("Something went wrong, please try again")
        }
    }
    const submitHandler = () =>{
        let title = titleElement.current.value
        let author = authorElement.current.value
        if(title && author){
            const newBook = {title, author}
            addBook(newBook)
        }
        else{
            window.alert("Title and author is required")
        }
    }

  return (
    <div>
        <h1>Add New Book</h1>
        <div className="form-group">
            <label className='form-label'>Enter Title</label>
            <input type='text' className='form-control' ref={titleElement}placeholder='Enter Title' required></input>
        </div>
        <div className="form-group">
            <label className='form-label'>Enter Author</label>
            <input type='text' className='form-control' ref = {authorElement} placeholder='Enter Author' required></input>
        </div>
        <br/>
        <button onClick={submitHandler} className='btn btn-success'>Add Book</button>
    </div>
  )
}
