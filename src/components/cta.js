import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="What about CTA?"
      description="Give a final call to action because that's what the cool kids are doing."
    />
        <a href="https://google.com" rel="noopener noreferrer"><Button>Go to Google</Button></a>
   </div>
)

export default CallToAction
