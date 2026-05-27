import { useEffect, useMemo, useState } from "react"

import Header from "./components/Header"
import Loader from "./components/Loader"
import SummaryCard from "./components/SummaryCard"
import HoldingsTable from "./components/HoldingsTable"
import ReportModal from "./components/ReportModel"

import { fetchCapitalGains } from "./api/capitalGains"
import { fetchHoldings } from "./api/holdings"

import type { Holding, CapitalGains } from "./types"

import {
  calculateHarvestedData,
  calculateNetGain
} from "./utils/calculations"

import { formatCurrency } from "./utils/format"

function App() {

  const [holdings, setHoldings] =
    useState<Holding[]>([])

  const [capitalGains, setCapitalGains] =
    useState<CapitalGains | null>(null)

  const [selectedCoins, setSelectedCoins] =
    useState<string[]>([])

  const [loading, setLoading] =
    useState(true)

  const [error,setError]=useState("")

  const [showModal, setShowModal] =
    useState(false)

  const [showAll,setShowAll]=
  useState(false)

  useEffect(() => {

    const loadData = async () => {

      try {

        const holdingsData =
          await fetchHoldings() as Holding[]

        const capitalGainsData =
          await fetchCapitalGains() as {
            capitalGains: CapitalGains
          }

        setHoldings(holdingsData)

        setCapitalGains(
          capitalGainsData.capitalGains
        )

      } catch (error) {

        console.log(error)
        setError("Failed to load portfolio data")

      } finally {

        setLoading(false)

      }

    }

    loadData()

  }, [])

  const selectedHoldings = useMemo(() => {

    return holdings.filter((holding) =>
      selectedCoins.includes(holding.coin)
    )

  }, [selectedCoins, holdings])

  const visibleHoldings=showAll
  ? holdings
  : holdings.slice(0,8)

  const afterHarvesting = useMemo(() => {

    if (!capitalGains) return null

    return calculateHarvestedData(
      capitalGains,
      selectedHoldings
    )

  }, [capitalGains, selectedHoldings])

  const toggleCoin = (coin: string) => {

    setSelectedCoins((prev) =>
      prev.includes(coin)
        ? prev.filter((c) => c !== coin)
        : [...prev, coin]
    )

  }

  const toggleAll = () => {

    if (selectedCoins.length === holdings.length) {

      setSelectedCoins([])

    } else {

      setSelectedCoins(
        holdings.map((holding) => holding.coin)
      )

    }

  }

  if(loading){
  return <Loader/>
}

if(error){

  return(

    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">

      <div className="bg-red-500/10 border border-red-500/30 rounded-3xl p-8 text-center max-w-md w-full">

        <h2 className="text-2xl font-bold text-red-400 mb-3">
          Something went wrong
        </h2>

        <p className="text-slate-300">
          {error}
        </p>

      </div>

    </div>

  )

}

if(!capitalGains || !afterHarvesting){
  return null
}

  const beforeRealised =

    calculateNetGain(
      capitalGains.stcg.profits,
      capitalGains.stcg.losses
    )

    +

    calculateNetGain(
      capitalGains.ltcg.profits,
      capitalGains.ltcg.losses
    )

  const afterRealised =

    calculateNetGain(
      afterHarvesting.stcg.profits,
      afterHarvesting.stcg.losses
    )

    +

    calculateNetGain(
      afterHarvesting.ltcg.profits,
      afterHarvesting.ltcg.losses
    )

  const savings =
    beforeRealised - afterRealised

  return (

    <div
      className="
        min-h-screen
        bg-slate-950
        text-white
        overflow-x-hidden
      "
    >

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_35%)]
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-6
        "
      >

        <Header
          onViewReport={() => setShowModal(true)}
          onHarvestNow={() =>
            document
              .getElementById("portfolio")
              ?.scrollIntoView({
                behavior: "smooth"
              })
          }
        />

        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-6
            mt-8
          "
        >

          <SummaryCard
            title="Pre Harvesting"
            gains={capitalGains}
            bgColor="
              bg-gradient-to-br
              from-slate-900
              to-slate-800
            "
          />

          <SummaryCard
            title="After Harvesting"
            gains={afterHarvesting}
            bgColor="
              bg-gradient-to-br
              from-blue-950
              to-indigo-950
            "
          />

        </div>

        {savings > 0 && (

          <div
            className="
              mt-8
              rounded-3xl
              p-6
              border
              border-green-400/20
              bg-linear-to-r
              from-green-500
              to-emerald-600
              shadow-2xl
              animate-pulse
            "
          >

            <p
              className="
                text-lg
                sm:text-2xl
                font-bold
              "
            >

              🎉 Estimated Tax Savings:

              <span className="ml-2">

                {formatCurrency(savings)}

              </span>

            </p>

          </div>

        )}

        <div id="portfolio">

          <HoldingsTable
            holdings={visibleHoldings}
            selectedCoins={selectedCoins}
            onToggle={toggleCoin}
            onToggleAll={toggleAll}
          />

        </div>
        <div className="flex justify-center mt-6">

  <button
    onClick={() => setShowAll(!showAll)}
    className="
      px-6 py-3
      rounded-2xl
      bg-cyan-500
      hover:bg-cyan-400
      text-slate-950
      font-semibold
      transition-all
      duration-300
      shadow-lg
      shadow-cyan-500/20
    "
  >

    {showAll
      ? "Show Less"
      : "View All Holdings"}

  </button>

</div>

      </div>

      <ReportModal
        open={showModal}
        onClose={() => setShowModal(false)}
      />

    </div>

  )

}

export default App