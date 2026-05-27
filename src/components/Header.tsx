interface Props {
  onViewReport: () => void
  onHarvestNow: () => void
}

const Header = ({
  onViewReport,
  onHarvestNow
}: Props) => {

  return (

    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
      "
    >

      <div>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              h-14
              w-14
              rounded-2xl
              bg-linear-to-br
              from-yellow-400
              to-orange-500
              flex
              items-center
              justify-center
              text-2xl
              shadow-xl
            "
          >

            ₿

          </div>

          <div>

            <h1
              className="
                text-3xl
                sm:text-5xl
                font-black
                bg-linear-to-r
                from-white
                to-slate-400
                bg-clip-text
                text-transparent
              "
            >

              Tax Loss Harvesting

            </h1>

            <p
              className="
                text-slate-400
                mt-2
                text-sm
                sm:text-base
              "
            >

              Optimize your crypto taxes in real-time

            </p>

          </div>

        </div>

      </div>

      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-4
        "
      >

        <button
          onClick={onViewReport}
          className="
            px-6
            py-3
            rounded-2xl
            bg-white
            text-black
            font-semibold
            hover:scale-105
            transition-all
            duration-300
          "
        >

          View Report

        </button>

        <button
          onClick={onHarvestNow}
          className="
            px-6
            py-3
            rounded-2xl
            bg-linear-to-r
            from-blue-500
            to-cyan-400
            font-semibold
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
          "
        >

          Harvest Now

        </button>

      </div>

    </div>

  )

}

export default Header