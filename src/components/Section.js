import React from "react"

export default function Section({ children, title, bg }) {
  return (
    <section style={{ backgroundColor: bg }}>
      {title ? <h4 className="section-title">{title}</h4> : <></>}
      {children}
    </section>
  )
}
