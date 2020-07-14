import React from "react"

import { Container, Grid } from "@material-ui/core"

import style from "../styles/ContactSection.module.css"

import Section from "./Section"
import Contact from "./Contact"

export default function ContactSection() {
  return (
    <Section>
      <Container>
        <Grid container className={style.contactGridWrapper}>
          <Grid item xs={12} sm={6} alignContent="center">
            <div className={style.contactTextWrapper}>
              <h2 className={style.contactHighlight}>Get In Touch</h2>
              <div className={style.contactText}>
                <p>Aloetrain, Ltd</p>
                <p>CO11 1DE</p>
                <p>Southwold, London</p>
                <p>United Kingdom</p>
                <p>
                  <img
                    className={style.flagIcon}
                    alt="United Kingdom Telephone Number"
                    src="http://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg"
                  />
                  44+ 7557 739393
                </p>
                <p>
                  <strong>sales@aloetrain.com</strong>
                </p>
                <p>
                  <strong>support@aloetrain.com</strong>
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={style.contactWrapper}>
              <Contact />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Section>
  )
}
