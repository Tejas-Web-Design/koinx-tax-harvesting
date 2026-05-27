const Loader = () => {

  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-slate-950
      "
    >

      <div
        className="
          flex
          flex-col
          items-center
          gap-6
        "
      >

        <div className="relative">

          <div
            className="
              h-20
              w-20
              rounded-full
              border-4
              border-blue-500/20
            "
          />

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-cyan-400
              border-t-transparent
              animate-spin
            "
          />

        </div>

        <div className="text-center">

          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >

            Loading Portfolio

          </h2>

          <p className="text-slate-400 mt-2">

            Calculating tax harvesting insights...

          </p>

        </div>

      </div>

    </div>

  )

}

export default Loader