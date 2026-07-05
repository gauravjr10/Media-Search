import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../redux/features/collectionSlice";

const CollectionCard=({item})=>{

    const dispatch=useDispatch()
    const removeFromCollection=()=>{
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
return(
<>
<div className="w-[15vw] h-70 relative  bg-white rounded-lg overflow-hidden" >

            <a href={item.url} className='h-full'>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} /> : ''}
            </a>
            {
                <div id='bottom' className= "text-white flex gap-3 justify-between items-center w-full px-4 py-6 absolute bottom-0">
                 <h2 className="text-lg font-semibold capitalize h-13 overflow-hidden">
                    {item.title}
                 </h2>
                 <button 
                 onClick={()=>{
                    removeFromCollection(item)
                 }}
                 className="px-3 py-2 text-white rounded bg-red-500 font-medium">
                    Remove
                    </button>
                </div>
            }
        </div>
</>
)
}
export default CollectionCard;