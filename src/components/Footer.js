import React from "react"
import Section from "./Section"

import { Link } from "gatsby"

import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
} from "@material-ui/core"

import style from "../styles/Footer.module.css"

import brandingImage from "./images/branding.png"

export default function Footer() {
  const handleReturn = () => {
    const doc = document.documentElement.scrollTop || document.body.scrollTop
    if (doc > 0) {
      window.requestAnimationFrame(handleReturn)
      window.scrollTo(0, doc - doc / 8)
    }
  }

  return (
    <footer>
      <Section>
        <Container maxWidth="lg">
          <Grid container justify="center" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={2}>
              <h4>Company</h4>
              <p>
                <Link to="/about">About Us</Link>
              </p>
              <p>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
              <p>
                <Link to="/terms-of-use">Terms of Use</Link>
              </p>
              <p>
                <Link to="/cancellation-policy">Cancellation Policy</Link>
              </p>
            </Grid>

            <Grid item xs={12} sm={2}>
              <h4>Contacts</h4>
              <p>
                <Link to="/contact">Contact Us</Link>
              </p>
              <p>
                <a href="mailto:info@aloetrain.com">info@aloetrain.com</a>
              </p>
              <p>
                <a href="mailto:support@aloetrain.com">support@aloetrain.com</a>
              </p>
              <p>
                <a href="tel:">UK +44 1763 288238</a>
              </p>
            </Grid>
            <Grid item xs={12} sm={2}>
              <h4>Enquiries</h4>
              <p>
                <Link to="/teach-for-us">Teach for us</Link>
              </p>
              <p>
                <Link to="/become-an-affiliate">Become an Affiliate</Link>
              </p>
              <p>
                <Link to="/courses">Full course list</Link>
              </p>
              <p>
                <Link to="/sitemap">Sitemap</Link>
              </p>
            </Grid>
            <Grid item xs={12} sm={2}>
              <h4>Social Media</h4>
              <p>
                <Link to="www.facebook.com">Facebook</Link>
              </p>
              <p>
                <Link to="www.twitter.com">Twitter</Link>
              </p>
              <p>
                <Link to="www.linkedin.com">LinkedIN</Link>
              </p>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Card className={style.brandCard}>
                <CardActionArea onClick={handleReturn}>
                  <img src={brandingImage} className={style.brandImage}></img>
                </CardActionArea>
              </Card>
              <p>Made with GatsbyJS</p>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </footer>
  )
}
