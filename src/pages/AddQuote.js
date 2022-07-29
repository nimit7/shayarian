import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'

const AddQuote = () => {
       const history = useHistory();

       const { sendRequest, status } = useHttp(addQuote);

       useEffect(() => {
              if (status === 'completed') {
                     history.push('/quotes');
              }
       }, [status, history])


       const addQuoteHandler = quoteData => {
              console.log(quoteData)
              sendRequest(quoteData)
       }

       return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
}

export default AddQuote