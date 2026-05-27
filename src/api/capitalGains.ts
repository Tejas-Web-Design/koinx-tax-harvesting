import capitalGains from "../data/capitalGains.json"

import type { CapitalGains } from "../types"

export const fetchCapitalGains = async (): Promise<{
  capitalGains: CapitalGains
}> => {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve(
        capitalGains as {
          capitalGains: CapitalGains
        }
      )

    }, 500)

  })

}