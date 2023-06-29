import { useState } from "react"
import { useEffect } from "react"
import Loading from "./Loading"
import Video from "./Video"

const VideosPage = () => {
    const [videosUrl, setVideosUrl] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchVideos = async () => {
        const response = await fetch('https://j442k5-5000.csb.app/?url=https://www.youtube.com/playlist?list=PLz7a_KiI41N5DNblvE3w5OeOxk1RifUvR')
        const data = await response.json()
        setVideosUrl(data.video_urls)
        setLoading(false)
    }
    useEffect(() => {
        fetchVideos()
    }, [])
    return (
        <>
            <h1 className="text-3xl text-center mt-24">Videos</h1>
            {loading ? <Loading /> : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 my-8">
                    {videosUrl.map(videoUrl => {
                        return <Video videoId={videoUrl.split("?v=")[1]} key={videoUrl} />
                    })}
                </div>)}
        </>
    )
}

export default VideosPage