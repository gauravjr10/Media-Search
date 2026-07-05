import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
    const dispatch = useDispatch()
    const clearTheCollection = () => {
        dispatch(clearCollection())
    }
    const collection = useSelector(state => state.collection.items)
    return (
        <div className="overflow-auto  py-6 px-10">
            {collection.length > 0 ?
               <div className="flex justify-between mb-6">
                    <h2 className=" text-xl font-medium">Your Collection</h2>
                    <button
                        onClick={() => {
                            clearTheCollection()
                        }}
                        className=" active:scale-95 cursor-pointer px-4 py-2 text-base bg-red-600 rounded font-medium">Clear collection</button>
                </div>
                :
                
                 <div>
                    <h2 className=" text-3xl font-medium justify-center text-center">Your Collection is Empty</h2>
                </div>
                }

            <div className='flex flex-wrap   gap-6  justify-start'>
                {collection.map((item, idx) => {
                    return <div >
                        <CollectionCard item={item} />
                    </div>
                })}
            </div>
        </div>
    )
}
export default CollectionPage;