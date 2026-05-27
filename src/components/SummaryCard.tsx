import type { CapitalGains } from "../types"

import {
  calculateNetGain
} from "../utils/calculations"

import {
  formatCurrency
} from "../utils/format"

interface Props {

  title: string
  gains: CapitalGains
  bgColor: string

}

const SummaryCard = ({
  title,
  gains,
  bgColor
}: Props) => {

  const stcgNet =
    calculateNetGain(
      gains.stcg.profits,
      gains.stcg.losses
    )

  const ltcgNet =
    calculateNetGain(
      gains.ltcg.profits,
      gains.ltcg.losses
    )

  const total =
    stcgNet + ltcgNet

  return (

    <div
      className={`
        ${bgColor}
        rounded-3xl
        p-6
        border
        border-white/10
        shadow-2xl
        backdrop-blur-xl
        hover:scale-[1.02]
        transition-all
        duration-300
      `}
    >

      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >

        <div>

          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
            "
          >

            {title}

          </h2>

          <p className="text-slate-400 mt-1">

            Tax summary overview

          </p>

        </div>

        <div
          className="
            h-12
            w-12
            rounded-2xl
            bg-white/10
            flex
            items-center
            justify-center
            text-2xl
          "
        >

          📊

        </div>

      </div>

      <div className="space-y-5">

        {/* STCG */}

        <div
          className="
            rounded-2xl
            bg-white/5
            p-4
            space-y-2
          "
        >

          <h3
            className="
              text-lg
              font-semibold
              text-cyan-300
            "
          >

            Short-Term Capital Gains

          </h3>

          <div className="flex justify-between">

            <span className="text-slate-300">

              Profits

            </span>

            <span
              className="
                text-green-400
                font-semibold
              "
            >

              {formatCurrency(gains.stcg.profits)}

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-slate-300">

              Losses

            </span>

            <span
              className="
                text-red-400
                font-semibold
              "
            >

              {formatCurrency(gains.stcg.losses)}

            </span>

          </div>

          <div
            className="
              flex
              justify-between
              pt-2
              border-t
              border-white/10
            "
          >

            <span className="font-semibold">

              Net Capital Gains

            </span>

            <span
              className="
                text-cyan-400
                font-bold
              "
            >

              {formatCurrency(stcgNet)}

            </span>

          </div>

        </div>

        {/* LTCG */}

        <div
          className="
            rounded-2xl
            bg-white/5
            p-4
            space-y-2
          "
        >

          <h3
            className="
              text-lg
              font-semibold
              text-cyan-300
            "
          >

            Long-Term Capital Gains

          </h3>

          <div className="flex justify-between">

            <span className="text-slate-300">

              Profits

            </span>

            <span
              className="
                text-green-400
                font-semibold
              "
            >

              {formatCurrency(gains.ltcg.profits)}

            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-slate-300">

              Losses

            </span>

            <span
              className="
                text-red-400
                font-semibold
              "
            >

              {formatCurrency(gains.ltcg.losses)}

            </span>

          </div>

          <div
            className="
              flex
              justify-between
              pt-2
              border-t
              border-white/10
            "
          >

            <span className="font-semibold">

              Net Capital Gains

            </span>

            <span
              className="
                text-cyan-400
                font-bold
              "
            >

              {formatCurrency(ltcgNet)}

            </span>

          </div>

        </div>

        {/* TOTAL */}

        <div
          className="
            rounded-2xl
            bg-linear-to-r
            from-cyan-500/10
            to-blue-500/10
            p-5
            border
            border-cyan-400/20
          "
        >

          <p className="text-slate-300 text-sm">

            Realised Capital Gains

          </p>

          <h3
            className="
              text-3xl
              font-black
              mt-2
            "
          >

            {formatCurrency(total)}

          </h3>

          <p className="text-green-400 mt-2 text-sm">

            ● Live Calculation

          </p>

        </div>

      </div>

    </div>

  )

}

export default SummaryCard