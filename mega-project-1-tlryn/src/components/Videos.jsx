import Video from "./Video"

const Videos = () => {
    const videoUrls = ["7Nn6OaMWzio", "_FptCFyd1sM", "YsemD3OX8zI" , "_tiOxwsld2Q", "z963B3Ytjas",]
    return (
        <div className="p-4 min-h-[90vh] flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-8 font-semibold lg:text-4xl text-center">
                Videos
            </h1>
            <div className="flex max-w-5xl overflow-x-auto w-full pb-8 rounded-md gap-4">
                {videoUrls.map((videoUrl)=>{
                    return <Video key={videoUrl} videoId={videoUrl}/>
                })}
                <button className="btn btn-primary my-auto">See More</button>
            </div>
        </div>
    )
}

export default Videos