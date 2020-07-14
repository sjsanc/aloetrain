import React from "react"

import { TextField, Button } from "@material-ui/core"

import style from "../styles/Contact.module.css"

// Independant Contact form component
export default function Contact({ title }) {
  return (
    <form className={style.formWrapper}>
      {title ? <h3>{title}</h3> : <></>}
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
      ></TextField>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email address"
        name="email"
        autoComplete="email"
      ></TextField>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        required
        id="contact"
        label="Contact Number"
        name="contact"
      ></TextField>
      <TextField
        margin="normal"
        required
        variant="outlined"
        fullWidth
        multiline
        label="Enter your message here"
        id="message"
        name="message"
        className={style.msgField}
      ></TextField>
      <div className="hflex center">
        <Button
          variant="contained"
          color="primary"
          className={style.contactBtn}
          fullWidth
        >
          Send your message
        </Button>
      </div>
    </form>
  )
}
