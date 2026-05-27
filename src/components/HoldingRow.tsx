import type { Holding } from "../types"

import { formatCurrency } from "../utils/format"

interface Props {

  holding: Holding
  selected: boolean
  onToggle: (coin: string) => void

}

const HoldingRow = ({
  holding,
  selected,
  onToggle
}: Props) => {

  return (

    <tr
      className={`
        border-b
        border-slate-800
        hover:bg-slate-900
        transition-all
        duration-300
        ${selected ? "bg-blue-900/20" : ""}
      `}
    >

      <td className="p-4">

        <input
          type="checkbox"
          checked={selected}
          onChange={() =>
            onToggle(holding.coin)
          }
          className="
            h-4
            w-4
            accent-blue-500
          "
        />

      </td>

      <td className="p-4">

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <img
            src={holding.logo}
            alt={holding.coin}
            className="
              w-10
              h-10
              rounded-full
            "
          />

          <div>

            <p className="font-semibold">

              {holding.coin}

            </p>

            <p
              className="
                text-sm
                text-slate-400
              "
            >

              {holding.coinName}

            </p>

          </div>

        </div>

      </td>

      <td className="p-4">

        <div>

          <p>

            {holding.totalHolding.toFixed(4)}

          </p>

          <p
            className="
              text-sm
              text-slate-400
            "
          >

            Avg:
            {" "}
            {formatCurrency(
              holding.averageBuyPrice
            )}

          </p>

        </div>

      </td>

      <td className="p-4">

        {formatCurrency(
          holding.currentPrice
        )}

      </td>

      <td className="p-4">

        <div>

          <p
            className={
              holding.stcg.gain >= 0
                ? "text-green-400"
                : "text-red-400"
            }
          >

            {formatCurrency(
              holding.stcg.gain
            )}

          </p>

          <p
            className="
              text-sm
              text-slate-400
            "
          >

            Balance:
            {" "}
            {holding.stcg.balance.toFixed(4)}

          </p>

        </div>

      </td>

      <td className="p-4">

        <div>

          <p
            className={
              holding.ltcg.gain >= 0
                ? "text-green-400"
                : "text-red-400"
            }
          >

            {formatCurrency(
              holding.ltcg.gain
            )}

          </p>

          <p
            className="
              text-sm
              text-slate-400
            "
          >

            Balance:
            {" "}
            {holding.ltcg.balance.toFixed(4)}

          </p>

        </div>

      </td>

      <td className="p-4">

        {selected
          ? holding.totalHolding.toFixed(4)
          : "—"}

      </td>

    </tr>

  )

}

export default HoldingRow