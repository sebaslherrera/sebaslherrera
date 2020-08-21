import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  /* {
    id: 4,
    text: "blog",
    url: "/blog/",
  }, */
  {
    id: 5,
    text: "resume",
    url:
      "https://drive.google.com/file/d/1Q3PMSAKsybxlhnqpPbjWHgran7kPx_o8/view?usp=sharing",
  },
  {
    id: 6,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      {link.text === "resume" ? (
        <a href={link.url} target="__blank">
          {link.text}
        </a>
      ) : (
        <Link to={link.url}>{link.text}</Link>
      )}
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
