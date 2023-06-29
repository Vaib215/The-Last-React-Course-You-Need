import { useEffect, useState } from "react"

const Video = ({ videoId }) => {
    const [title, setTitle] = useState("")
    useEffect(() => {
        fetch('https://noembed.com/embed?url=https://www.youtube.com/watch?v=' + videoId)
            .then(res => res.json())
            .then(data => setTitle(data.title))
    }, [])
    return (
        <div onClick={() => location.href = `https://youtu.be/${videoId}`} className="card btn btn-ghost h-full p-0 w-full md:w-96 bg-base-100 shadow-xl image-full overflow-hidden" >
            <figure><img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="Shoes" /></figure>
            <div className="opacity-0 bg-black/50 hover:opacity-100 absolute top-0 bottom-0 left-0 right-0">
                <div className="card-body absolute bottom-0">
                    <div className="card-title normal-case text-white">{title}</div>
                </div>
            </div>
            <button className="absolute top-24 left-40 btn bg-red-600 rounded-full w-16 h-16">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/play--v1.png" alt="play" />
            </button>
        </div >
    )
}

export default Video