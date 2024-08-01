import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Books() {
    const[books, setBooks] = useState([])

    const getAllBooks = async ()=>{
        const {data} = await axios.get(process.env.REACT_APP_API_URL)
        console.log(data._embedded.books)
        setBooks(data._embedded.books)
    }

    useEffect(()=>{
        getAllBooks();
    },[])

    const deleteBook = async (id) => {
        await axios.delete(process.env.REACT_APP_API_URL+'/'+id)
        getAllBooks()
    }

    const deleteHandler = (id)=>{
        const result = window.confirm("Are you sure, want to delete the book?")
        if(result){
            deleteBook(id)
        }
    }
  return (
    <div>
        <Link to="/books/add" className='btn btn-success'>Add Book</Link>
        <h1>Books Page</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map((book)=>(
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <Link className='btn btn-warning' to={'/books/'+book.id}>Edit</Link>
                                <button onClick={()=>deleteHandler(book.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
