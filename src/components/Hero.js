import React from "react"

import {
  Container,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons"

import Section from "./Section"

import style from "../styles/Hero.module.css"

// Images
import aloeImage from "./images/aloeGraphic.jpg"

export default function Hero() {
  const match = useMediaQuery("(min-width:600px")

  return (
    <Section>
      <Container maxWidth="lg">
        <Grid
          container
          className={style.heroWrapper}
          alignItems="center"
          justify="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
            className={style.heroText}
            alignContent="center"
            justify="center"
          >
            <Typography variant="h4">
              Take your career in <strong>Project Management</strong> to the
              next level with our
            </Typography>
            <Typography variant="h3">Accredited Courses</Typography>
            <Typography variant="subtitle1">
              Access live, online courses now with top educators in the field of
              Project Management, teaching Prince2, Agile etc...
            </Typography>
            <div className={style.heroButton}>
              <Button color="primary" variant="contained" href="#coursePicker">
                <ExpandMore />
              </Button>
            </div>
          </Grid>

          {match ? (
            <Grid sm={6} className={style.heroImage}>
              <img alt="Aloe plant illustration" src={aloeImage}></img>
            </Grid>
          ) : (
            <div></div>
          )}
        </Grid>
      </Container>
    </Section>
  )
}
