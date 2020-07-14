import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import {
  Container,
  Button,
  Menu,
  MenuItem,
  Fade,
  useMediaQuery,
  Card,
  CardActionArea,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { ExpandMore, ExpandLess } from "@material-ui/icons"

import style from "../styles/header.module.css"

import brandingImage from "./images/branding.png"

const Header = ({ siteTitle }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [expand, setExpand] = useState(true)

  const match = useMediaQuery("(min-width:660px")

  const handleClick = e => {
    setExpand(!expand)
    console.log(expand)
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setExpand(!expand)
    console.log(expand)
    setAnchorEl(null)
  }

  return (
    <header className={style.header}>
      <Container maxWidth="lg">
        <div className={style.innerWrapper}>
          <img
            src={brandingImage}
            alt="Aloetrain branding"
            className={style.branding}
          ></img>

          {match ? (
            <div>
              <Button
                aria-controls="course-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="courses-btn"
              >
                Courses
                {expand ? <ExpandMore /> : <ExpandLess />}
              </Button>
              <Menu
                id="course-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
                className={style.courseMenu}
              >
                <MenuItem>
                  <a href="/prince-2-practitioner-course">
                    Prince2 Practitioner
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="/prince-2-foundation-course">Prince2 Foundation</a>
                </MenuItem>
                <MenuItem>
                  <a href="/prince-2-practitioner-and-foundation-course">
                    Prince2 Foundation & Practitioner
                  </a>
                </MenuItem>
              </Menu>
              <Button variant="contained" color="primary" href="/contact">
                APPLY NOW
              </Button>
            </div>
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
