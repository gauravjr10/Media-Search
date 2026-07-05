import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"

const SearchBar =()=>{
    const [ text , setText ]=useState('')

    const dispatch = useDispatch()


    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }
return(
 <>
<div >
    <form
    className="flex bg-(--c1) gap-5 px-14 py-10 "
     onSubmit={(e)=>{
submitHandler(e)
    }}>
        <input 
        value={text}
        required
        onChange={(e)=>{
            setText(e.target.value)
        }}
        className="w-full border-2 px-6 py-3 text-xl outline-none"
        placeholder="write here"
         />
        <button className="border-2 px-6 py-3 text-xl outline-none">search</button>
    </form>
    
</div>



</>
)

}
export default SearchBar