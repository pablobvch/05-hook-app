import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "./"

export const MultipleCustomHook = () => {
  const {counter, increment} = useCounter(1)

  const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  
  const {author, quote} = !!data && data[0]
  
  return (
    <>
      <h3>Breaking Bads quotes</h3>
      <hr></hr>
      {isLoading ? 
        <LoadingQuote/>
        : 
        <Quote author={author} quote={quote}/>}
        <button className="btn btn-primary" onClick={()=>increment(1)} disabled={isLoading}>Next quote</button>
    </>
  )
}
