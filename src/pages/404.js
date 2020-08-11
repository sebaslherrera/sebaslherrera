import React from "react"
import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [item, setItem] = useState("")

  const gifHandler = () => {
    fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=jLQ4mbCweCRUhg48LKf6auR6eyTqtK6d&tag=404&rating=g"
    )
      .then(res => res.json())
      .then(
        result => {
          const {
            data: { image_original_url },
          } = result
          setIsLoaded(true)
          setItem(image_original_url)
        },
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }

  useEffect(() => {
    gifHandler()
  }, [])

  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h2>
            You might want to check the url, or{" "}
            <Link to="/">go back to the homepage</Link>. Or just check out some
            cool gifs, entirely your choice.
          </h2>
          <Link to="/" className="btn">
            Back Home
          </Link>
          {error === null && isLoaded && (
            <img className="gif" src={item} alt="Random gif" autoPlay loop />
          )}
          <button className="btn" onClick={gifHandler}>
            Generate Another Gif
          </button>
        </div>
      </main>
    </Layout>
  )
}

export default Error
