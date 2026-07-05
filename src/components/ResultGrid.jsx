import { useEffect } from 'react'
import { fetchPhoto, fetchVideo, fetchGIF } from '../api/mediaApi'
import { setQuery, setError, setLoading, setResult } from '../redux/features/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'


const ResultGrid = () => {

    const dispatch = useDispatch()
    const { query, activeTab, result, loading, error } = useSelector((store) => store.search)

    useEffect(function () {
        if (!query) return
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photo') {
                    let response = await fetchPhoto(query)
                    
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url: item.links.html
                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideo(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                        url: item.url

                    }))
                }
                if (activeTab == 'GIF') {
                    let response = await fetchGIF(query)
                    data = response.data.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        title: item.title || 'gif',
                        thumbnail: item.images.fixed_width.url,
                        src: item.images.original.url,
                        url: item.url
                    }))
                }
                dispatch(setResult(data))
            } catch (err) {
                dispatch(setError(err.message))
            }
        }

        getData()
    }, [query, activeTab , dispatch])
    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <>
            <div className='flex flex-wrap w-full overflow-auto gap-6 px-10 justify-between'>
                {result.map((item, idx) => {
                    return <div key={idx}>
                   <ResultCard item={item}></ResultCard>
                    </div>
                })}
            </div>
        </>
    )
}
export default ResultGrid;