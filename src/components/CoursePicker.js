import React from "react"

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  CardActionArea,
  Button,
} from "@material-ui/core"

import DonutSmallOutlinedIcon from "@material-ui/icons/DonutSmallOutlined"

import Section from "./Section"

import style from "../styles/CoursePicker.module.css"

export default function CoursePicker() {
  return (
    <Section title="Our Courses" bg={"rgb(241, 255, 240)"}>
      <Container maxWidth="md" id="coursePicker">
        <Grid container spacing={3} justify="center">
          {cardContent.map(card => {
            return (
              <Grid item xs={6} sm={3}>
                <Card className={style.card}>
                  <Paper>
                    <CardActionArea>
                      <CardContent
                        style={{ backgroundColor: card.color }}
                        className={style.courseCard}
                      >
                        <div>
                          <DonutSmallOutlinedIcon fontSize="large" />
                        </div>
                      </CardContent>
                      <CardContent className={style.courseCardText}>
                        <Typography variant="subtitle1" component="p">
                          {card.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <div className={style.cardBtn}>
                      <Button color="secondary" size="small">
                        Learn More
                      </Button>
                    </div>
                  </Paper>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <div className={style.seeMoreBtn}>
          <Button variant="contained" color="primary">
            See all courses
          </Button>
        </div>
      </Container>
    </Section>
  )
}

const cardContent = [
  { title: "Principles of Project Management", color: "rgb(198, 218, 255)" },
  { title: "Prince2 Foundation® Study Course", color: "rgb(182, 245, 228)" },
  {
    title: "Prince2 Practitioner Study Course",
    color: "rgb(182, 245, 228)",
  },
  { title: "Prince2 Foundation® & Practicioner", color: "rgb(182, 245, 228)" },
  { title: "APM Project Management", color: "rgb(182, 245, 228)" },
  { title: "Business Continuity Management", color: "rgb(182, 245, 228)" },
]
