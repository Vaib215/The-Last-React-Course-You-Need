import Loading from "./Loading"
import Project from "./Project"

const ProjectsPage = () => {
    return (
        <>
            <h1 className="text-3xl text-center mt-24">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 my-8">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </>
    )
}

export default ProjectsPage