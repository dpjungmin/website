// type TransitionToken = "default" | "curve" | "speed"
type CurveToken = "default" | "fastOutLinearIn"
type SpeedToken = "faster" | "fast" | "default" | "slow" | "slower"

type Transition = {
  default: string
  curve: Record<CurveToken, string>
  speed: Record<SpeedToken, string>
}

const transition: Transition = {
  default: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  curve: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    fastOutLinearIn: "cubic-bezier(0.4, 0, 1, 1)",
  },
  speed: {
    faster: "50ms",
    fast: "100ms",
    default: "250ms",
    slow: "500ms",
    slower: "1000ms",
  },
}

export { transition }
