import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const URL_API = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

  const [formData, setFormData] = useState({
    author : "",
    title : "",
    body : "",
    public : false
  })

  function handleFormData (event)  {

    const value = event.target.type === "checkbox" ?  event.target.checked : event.target.value; // per usare anche le checkbox

    setFormData({
      ...formData,
      [event.target.name] :  value,
    })
  }

  function handleFormSubmit (event) {
    event.preventDefault()

    axios.post(URL_API, formData)
      .then(res => {
        console.log(res.data)
      })
  }

  return(
    <>
      <div className="container">
        <div className="inputContainer">
          <form onSubmit={handleFormSubmit}>

            <div className="authorInput">
              <input type="text" placeholder="Inserisci il nome dell'autore" name="author" value={formData.author} onChange={handleFormData}/>
            </div>

            <div className="titleInput">
              <input type="text" placeholder="Inserisci il titolo" name="title" value={formData.title} onChange={handleFormData}/>
            </div>

            <div className="bodyInput">
              <textarea placeholder="Inserisci l'articolo" name="body" value={formData.body} onChange={handleFormData}/>
            </div>

            <div className="publicInput">
              <input type="checkbox" id="publicCheck" name="public" checked={formData.public} onChange={handleFormData}/>
              <label htmlFor="publicCheck">Pubblico</label>
            </div>

            <div className="submitInput">
              <button type="submit"> Invia </button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
