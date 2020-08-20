import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const query = graphql`
  {
    hero: file(relativePath: { eq: "nomadic-julien.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ className }) => {
  const { hero } = useStaticQuery(query)

  const backgroundFluidImageStack = [
    hero.childImageSharp.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
  ].reverse()

  return (
    <header>
      <BackgroundImage
        fluid={backgroundFluidImageStack}
        Tag="section"
        className={className}
      >
        <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h1>I'm Sebastian</h1>
              <h4>Backend engineer</h4>
              <Link to="/contact" className="btn">
                Contact me!
              </Link>
              <SocialLinks />
            </div>
          </article>
        </div>
      </BackgroundImage>
    </header>
  )
}

const StyledHeroSection = styled(Hero)`
  height: 100vh;
  width: 100%;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -5rem;
  padding-top: 5rem;
`

export default StyledHeroSection
