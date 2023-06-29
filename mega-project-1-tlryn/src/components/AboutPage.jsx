const AboutPage = () => {
    return (
        <div className="hero flex-1 bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <img src="https://i.imgur.com/ANDmuKd.png" className="max-w-xs mx-auto w-full" />
                    <h1 className="text-5xl font-bold">About TLRYN</h1>
                    <p className="py-6">This is the course website for "The Last React Course You Need". In case you haven't checked out, it is the most comprehensive course to learn react concepts along with some popular libraries like TailwindCSS, DaisyUI, Appwrite, Zustand and many more...</p>
                    <a href="https://github.com/vaib215/The-Last-React-Course-You-Need" className="btn btn-primary btn-sm">Github</a>
                </div>
            </div>
        </div>
    )
}

export default AboutPage