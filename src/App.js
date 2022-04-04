import React, { useState, useEffect } from 'react';
import './App.css';
import books from 'biblejs/lib/books';


const App = () => {
    //State
    const [data, setData] = useState([]);

    //Generating Random book, chapter, verse.
    const book = books[Math.floor(Math.random() * books.length)];
    const bookName = book.names[0];
    const chapter = Math.floor(Math.random() * book.verses.length) + 1;
    const verse = Math.floor(Math.random() * book.verses[chapter - 1]) + 1;

    //API Call Format
    const api = "https://bible-api.com";
    var url = `${api}/${bookName} ${chapter}:${verse}`;

    //Default Verse
    useEffect(async () => {
        const response = await fetch("https://bible-api.com/genesis 1:3");
        setData(await response.json());
    }, []);

    //Update Verse On Click
    const handleClick = async () => {
        const response = await fetch(url);
        setData(await response.json());
    }

    //HTML
    return (
        <main onClick={handleClick}>
            <div className="container">
                <div className='text'>
                    <h3 className='info'>{data.reference}</h3>
                    <p className='text'>{data.text}</p>
                </div>
            </div>
        </main>
    )
}

export default App;