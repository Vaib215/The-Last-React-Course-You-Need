const Hero = () => {
    return (
        <div className="hero min-h-screen pt-16 flex-1 bg-base-200 overflow-x-hidden">
            <div className="hero-content p-0 flex-col lg:flex-row-reverse w-full">
                <img src="https://i.imgur.com/ANDmuKd.png" className="max-w-md w-full" />
                <div className="md:max-w-md p-4 text-center md:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold">Welcome to <br/><span className="text-primary">The Last React Course You Need</span></h1>
                    <p className="py-6 max-w-md mx-auto lg:mx-0"> This comprehensive course covers not only React but also other essential tools and technologies that complement the React ecosystem.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;