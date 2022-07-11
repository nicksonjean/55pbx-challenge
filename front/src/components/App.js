import React, { useState } from 'react'
import ImageList from './ImageList'
import '../index.css'

export default function App() {
    const [submitting, setSubmitting] = useState(false)
    const [values, setValues] = useState({
        url: ''
    })
    const set = url => {
        return ({target: {value}}) => {
            setValues(oldValues => ({...oldValues, [url]: value}))
        }
    }

    const saveFormData = async () => {
        const uri = 'http://localhost:5001/v1/images'
        const response = await fetch(uri, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status !== 200) {
            throw new Error(`Request failed: ${response.status}`)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await saveFormData()
            setSubmitting(true)
            setValues({
                url: ''
            })
            setTimeout(() => {
                setSubmitting(false)
            }, 3000)
        } catch (e) {
            throw new Error(`Error: ${e.message}`)
        }
    }

    return (
        <div className='app'>
            <div className="wrapper">
                <h1>Informe uma URL que contenha imagens (.png & .jpg): </h1>
                {submitting &&
                    <div>Submetendo requisição...</div>
                }
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>
                            <p>URL</p>
                            <input type="text" required
                                   value={values.url} onChange={set('url')} placeholder="https://google.com"/>
                        </label>
                        <button type="submit">Submeter</button>
                    </fieldset>
                </form>
            </div>
            <ImageList/>
        </div>
    )
}
