const Project = ({ videoId }) => {
    return (
        <div className="card btn btn-ghost h-full p-0 w-96 bg-base-100 shadow-xl image-full overflow-hidden" >
            <figure><img src={'https://i.imgur.com/KVZTyR4.png'} alt="Shoes" /></figure>
            <div className="card-body p-6 mt-auto bg-black/70">
                <div className="card-title normal-case text-white">Day 0</div>
            </div>
            <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-4">
                <button className="btn z-20 btn-primary btn-sm">Code</button>
                <button className="btn z-20 btn-secondary btn-sm">Live</button>
            </div>
        </div >
    )
}

export default Project