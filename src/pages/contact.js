import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactSection from "../components/ContactSection"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <ContactSection />
  </Layout>
)

export default SecondPage
