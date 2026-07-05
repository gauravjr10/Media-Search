import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../redux/features/searchSlice"

const Tabs =()=>{
    const tabs = ['photo','videos','GIF']
    const dispatch =useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
    return(
       <>
       <div className="flex gap-5 p-10">
       {
        tabs.map(function(elem,idx){
           return( <button
            className={`${(activeTab==elem?'bg-blue-600':'bg-gray-600')} px-5 py-2 rounded uppercase cursor-pointer active:scale-95"`}
            key = {idx}
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}
            >{elem}</button>)

        })
       }
       </div>
       </> 
    )
}
export default Tabs