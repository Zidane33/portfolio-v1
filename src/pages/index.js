import React from "react"
import Hero from '../components/Hero'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/Card'
import Contact from '../components/Contact'
import About from '../components/AboutMe'

const bookWorm = `A full stack solution for graduate students to keep track of books used in their research. Using the Google books API, Flask for the server and PostgresSQL for the database, it's a super lightweight server rendered app. I plan on building a React app for the front end to replace the Jinja2 template front end`;
const shopify = `A headless Shopify solution for an aspiring artist in the Ottawa region. Gatsbyjs provides a great synergy with Shopify's back end with its native support for GraphQl queries`;
const gsa = `My current workplace has a wordpress website that can be very slow. I am in the process of converting the website to utilize a React front end and query wordpress' back end for all the pages and posts. It's still a work in progress`;
const grad = `A graduate student portfolio built using React.`

const bookWormTech = ['Flask', 'PostgresSQL', 'Jinja2', 'HTML', 'CSS', 'REST api']
const shopifyTech = ['React', 'Gatsbyjs', 'Shopify', 'GraphQL']
const gradTech = ['React', 'CSS', 'JSX']
const gsaTech = ['Headless Wordpress', 'REST api', 'GraphQL', 'Gatsbyjs', 'React']

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div id="projects" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      <Card name={'BookWorm'} text={bookWorm} tech={bookWormTech} />
      <Card name={'Shopify'} text={shopify} tech={shopifyTech}/>
      <Card name={'Grad-Portfolios'} text={grad} tech={gradTech}/>
      <Card name={'GSA-Carleton'} text={gsa} tech={gsaTech}/>
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
