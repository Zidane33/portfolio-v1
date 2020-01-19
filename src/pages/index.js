import React from "react"
import Hero from '../components/Hero'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/Card'
import Contact from '../components/Contact'
import About from '../components/AboutMe'

const bookWorm = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum doloribus consectetur perferendis alias dignissimos? Alias repudiandae quisquam eum consectetur at exercitationem vitae ipsa quos obcaecati totam, nulla dolorem sequi minima! Quam magni ab saepe, ex assumenda culpa earum modi porro a consequatur vel ea laborum harum, rerum recusandae at nesciunt?`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div id="projects" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <Card name={'BookWorm'} text={bookWorm} />
      <Card name={'Shopify'} />
      <Card name={'Grad-Portfolios'} />
      <Card name={'GSA-Carleton'} />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
