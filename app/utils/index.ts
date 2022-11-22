export const bipolarRandomState = () => {
  let y = Math.random()
  let status = false
  y < 0.5 ? (status = false) : (status = true)
  return status
}