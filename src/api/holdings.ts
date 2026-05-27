import holdings from "../data/holdings.json"

export const fetchHoldings=async()=>{

  return new Promise((resolve)=>{

    setTimeout(()=>{

      resolve(holdings)

    },1000)

  })

}