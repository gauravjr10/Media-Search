import { Link } from "react-router"
const NavBar=()=>{

    return(<>
    <div className='  flex justify-between items-center bg-(--c2)  px-9 py-5 '>
                <Link to='./' className='text-2xl   font-medium '>Media Search</Link>
                <div className='flex gap-5 items-center'>
                    <Link className='text-base active:scale-95 cursor-pointer font-medium bg-(--c4)  rounded  text-(--c1) px-2 py-2 ' to='/'>Search</Link>
                    <Link  className='text-base active:scale-95 cursor-pointer font-medium bg-(--c4)  rounded  text-(--c1) px-2 py-2 ' to='/collection'>Collection</Link>
                </div>
            </div>
    </>)
}
export default NavBar