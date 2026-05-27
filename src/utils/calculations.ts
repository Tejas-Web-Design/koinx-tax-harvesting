import type {
  CapitalGains,
  Holding
} from "../types"

export const calculateNetGain = (
  profits: number,
  losses: number
) => {

  return profits - losses

}

export const calculateHarvestedData = (
  original: CapitalGains,
  selectedHoldings: Holding[]
): CapitalGains => {

  const updated: CapitalGains = {

    stcg: {
      profits: original.stcg.profits,
      losses: original.stcg.losses
    },

    ltcg: {
      profits: original.ltcg.profits,
      losses: original.ltcg.losses
    }

  }

  selectedHoldings.forEach((holding) => {

    if (holding.stcg.gain > 0) {

      updated.stcg.profits +=
        holding.stcg.gain

    } else {

      updated.stcg.losses +=
        Math.abs(holding.stcg.gain)

    }

    if (holding.ltcg.gain > 0) {

      updated.ltcg.profits +=
        holding.ltcg.gain

    } else {

      updated.ltcg.losses +=
        Math.abs(holding.ltcg.gain)

    }

  })

  return updated

}