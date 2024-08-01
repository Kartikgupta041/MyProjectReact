import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function EditBooks() {
    // Use Param reads dynamic link and pulls ID from it
    const {id} = useParams()
    const titleElement = useRef('')
    const authorElement = useRef('')

    const getABooks = async ()=>{
        const {data} = await axios.get(process.env.REACT_APP_API_URL+'/'+id)
        console.log(data)
        titleElement.current.value = data.title
        authorElement.current.value = data.author
    }

    useEffect(()=>{
        getABooks();
    },[id])

    const updateBook = async (newBook)=>{
        const {data} = await axios.put(process.env.REACT_APP_API_URL+'/'+id, newBook)
        if(data.id){
            window.alert("Book updated successfully: " + data.id)
        }else{
            window.alert("Something went wrong, please try again")
        }
    }
    const submitHandler = () =>{
        let title = titleElement.current.value
        let author = authorElement.current.value
        if(title && author){
            const newBook = {title, author}
            updateBook(newBook)
        }
        else{
            window.alert("Title and author is required")
        }
    }
    
  return (
    <div>
        <h1>Edit Book</h1>
        <div className="form-group">
            <label className='form-label'>Enter Title</label>
            <input type='text' className='form-control' ref={titleElement}placeholder='Enter Title' required></input>
        </div>
        <div className="form-group">
            <label className='form-label'>Enter Author</label>
            <input type='text' className='form-control' ref = {authorElement} placeholder='Enter Author' required></input>
        </div>
        <br/>
        <button onClick={submitHandler} className='btn btn-success'>Update Book</button>
    </div>
  )
}
