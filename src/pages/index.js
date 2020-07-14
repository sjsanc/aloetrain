import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import CoursePicker from "../components/CoursePicker"
import ContactSection from "../components/ContactSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero />
    <CoursePicker />
    <ContactSection />
  </Layout>
)

export default IndexPage
