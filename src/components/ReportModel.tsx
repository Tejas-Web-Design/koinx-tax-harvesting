interface Props {

  open: boolean
  onClose: () => void

}

const ReportModal = ({
  open,
  onClose
}: Props) => {

  if (!open) return null

  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-sm
        px-4
      "
    >

      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          bg-slate-900
          border
          border-white/10
          p-8
          shadow-2xl
          animate-[fadeIn_.3s_ease]
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            mb-4
          "
        >

          Tax Report

        </h2>

        <p
          className="
            text-slate-300
            leading-relaxed
          "
        >

          Feature coming soon.
          Detailed PDF tax harvesting
          reports will be available here.

        </p>

        <button
          onClick={onClose}
          className="
            mt-6
            w-full
            rounded-2xl
            bg-linear-to-r
            from-blue-500
            to-cyan-400
            py-3
            font-semibold
            hover:scale-[1.02]
            transition-all
          "
        >

          Close

        </button>

      </div>

    </div>

  )

}

export default ReportModal