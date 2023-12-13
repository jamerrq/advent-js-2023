export function calculateTime (deliveries: string[]): string {
  let [hh, mm, ss] = [0, 0, 0]
  for (const delivery of deliveries) {
    const [h, m, s] = delivery.split(':').map(Number)
    hh += h
    mm += m
    ss += s
  }
  const totalSeconds = ss + mm * 60 + hh * 3600
  const difference = (-7 * 3600) + totalSeconds
  const sign = ['', '-'][+(difference < 0)]
  const d = Math.abs(difference)
  const h = Math.floor(d / 3600)
  const hStr = h.toString().padStart(2, '0')
  const m = Math.floor((d - h * 3600) / 60)
  const mStr = m.toString().padStart(2, '0')
  const s = d - h * 3600 - m * 60
  const sStr = s.toString().padStart(2, '0')
  return `${sign}${hStr}:${mStr}:${sStr}`
}
