import { useEffect, useState } from "react"

export const usePercentage = (percentage) => {
  const [progressStyles, setProgressStyles] = useState([])
  
  useEffect(() => {
    const updateProgressStyles = () => {
      const updatedStyles = percentage.map((p) => {
        const leftStyle =
          p.porc <= 50
            ? { transform: `rotate(${percentageToDegrees(p.porc)}deg)` }
            : { transform: "rotate(180deg)" }
        const rightStyle =
          p.porc <= 50
            ? { transform: "rotate(0deg)" }
            : { transform: `rotate(${percentageToDegrees(p.porc - 50)}deg)` }

        return { leftStyle, rightStyle }
      })

      setProgressStyles(updatedStyles)
    }

    updateProgressStyles()
  }, [])

  const percentageToDegrees = (percentage) => {
    return (percentage / 100) * 360;
  };
  return {
    progressStyles,
  }
}
