import Blogs from "../blogs/Blogs";
import Hero from "./Hero"

const Home = () => {
    return (
        <div className="bg-white text-primary container mx-auto mt-8 p-8">
            <Hero></Hero>
            <Blogs></Blogs>
        </div>
    )
}

export default Home;