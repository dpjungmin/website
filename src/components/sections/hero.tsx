import * as React from "react"
import * as $ from "./hero.styles"

const Hero: React.FC = () => {
  return (
    <$.Section>
      <h1>Hello.</h1>
      <h3>My name is David Park.</h3>
      <p>
        I am a MS student in Computer Science at{" "}
        <i>University of Southern California</i>. Currently, I am focusing on{" "}
        <i>Operating Systems</i> and <i>Software Security</i>.
      </p>
      <p>
        My ultimate goal is to produce positive changes in the world through
        computational approaches, and I wish to introduce new insights in
        solving future problems.
      </p>
      <p>
        If you happen to speak Korean, my Korean name is 박정민 (Park Jung Min).
      </p>
    </$.Section>
  )
}

export { Hero }
