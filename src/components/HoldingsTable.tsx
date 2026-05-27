import type { Holding } from "../types"

import HoldingRow from "./HoldingRow"

interface Props {

  holdings: Holding[]
  selectedCoins: string[]
  onToggle: (coin: string) => void
  onToggleAll: () => void

}

const HoldingsTable = ({
  holdings,
  selectedCoins,
  onToggle,
  onToggleAll
}: Props) => {

  const allSelected =
    holdings.length === selectedCoins.length

  return (

    <div
      className="
        mt-10
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        backdrop-blur-xl
        overflow-hidden
        shadow-2xl
      "
    >

      {/* Top Header */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
          p-6
          border-b
          border-white/10
        "
      >

        <div>

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              bg-linear-to-r
              from-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >

            Holdings Portfolio

          </h2>

          <p className="text-slate-400 mt-1">

            Select assets to calculate harvesting impact

          </p>

        </div>

        <div
          className="
            px-4
            py-2
            rounded-2xl
            bg-cyan-500/10
            text-cyan-300
            border
            border-cyan-400/20
            font-semibold
            w-fit
          "
        >

          {selectedCoins.length} Selected

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full min-w-275">

          <thead
            className="
              bg-slate-950/80
              text-slate-300
            "
          >

            <tr>

              <th className="p-4 text-left">

                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={onToggleAll}
                  className="
                    h-4
                    w-4
                    accent-cyan-400
                    cursor-pointer
                  "
                />

              </th>

              <th className="p-4 text-left">

                Asset

              </th>

              <th className="p-4 text-left">

                Holdings / Avg Buy

              </th>

              <th className="p-4 text-left">

                Current Price

              </th>

              <th className="p-4 text-left">

                Short-Term Gain

              </th>

              <th className="p-4 text-left">

                Long-Term Gain

              </th>

              <th className="p-4 text-left">

                Amount to Sell

              </th>

            </tr>

          </thead>

          <tbody>

            {holdings.map((holding, index) => (

              <HoldingRow
                key={`${holding.coin}-${index}`}
                holding={holding}
                selected={
                  selectedCoins.includes(
                    holding.coin
                  )
                }
                onToggle={onToggle}
              />

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )

}

export default HoldingsTable