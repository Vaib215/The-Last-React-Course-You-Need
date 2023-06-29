import { Link } from "react-router-dom"
import Project from "./Project"

const Projects = () => {
    return (
        <div className="p-4 md:min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-8 font-semibold lg:text-4xl text-center">
                Projects
            </h1>
            <div className="flex overflow-x-auto max-w-5xl w-full pb-8 rounded-md gap-4">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Link to="/projects" className="btn btn-primary my-auto">See More</Link>
            </div>
        </div>
    )
}

export default Projects