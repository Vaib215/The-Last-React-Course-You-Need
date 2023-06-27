const FeatureCard = ({ title, description, imageUrl }) => {
    return (
        <div className="card bg-base-100 m-4 shadow-lg image-full hover:shadow-blue-400 place-items-center cursor-pointer overflow-hidden">
            <figure className="w-full ar-1 mx-auto overflow-visible">
                <img src={imageUrl} alt={title} />
            </figure>
            <div className="card-body hero-overlay items-center hover:bg-base-100 hover:bg-opacity-90 text-center text-info-content opacity-0 hover:opacity-100 justify-center">
                <h2 className="card-title text-3xl font-semibold">{title}</h2>
                <p className="flex-grow-0 h-fit">{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard;