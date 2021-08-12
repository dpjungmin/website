type LetterSpacingToken = "normal" | "tracked" | "tight"

type LetterSpacing = Record<LetterSpacingToken, string>

const letterSpacings: LetterSpacing = {
  normal: "normal",
  tracked: "0.075em",
  tight: "-0.015em",
}

export { letterSpacings }
