import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Post from './Post'

function App() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPosts(data)
    setFilteredPosts(data)
    setLoading(false)
  }

  useEffect(() => {
    const searchResult = posts.filter(post => {
      return post.title.includes(search)
    })
    setFilteredPosts(searchResult)
  }, [search])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Posts</h1>
      <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder='Search something...' />
      <div className="post-wrapper">
        {loading ? (<h1>Loading</h1>) :
          (filteredPosts.map((post) => {
            return <Post post={post} key={post.id} />
          }))
        }
      </div>
    </>
  )
}

export default App
