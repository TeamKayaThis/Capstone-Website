import TeamGrid from "@/src/components/teamgrid/TeamGrid";
import Gallery from "@/src/components/gallery/Gallery";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* ================================================= */}
      {/* CINEMATIC BACKGROUND */}
      {/* ================================================= */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-black" />

        {/* GRID */}
        <div
          className="
            absolute inset-0 opacity-[0.05]
            bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[size:90px_90px]
          "
        />

        {/* GLOWS */}
        <div className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] bg-red-500/15 blur-[180px]" />

        <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-blue-500/15 blur-[220px]" />

        {/* NOISE */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-black/50" />

      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}
      <section className="relative min-h-screen flex items-center px-6 md:px-14 overflow-hidden">

        {/* BG WORD */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="
            text-[20vw]
            font-black
            tracking-[-0.08em]
            text-white/[0.03]
            select-none
          ">
            NGINIG
          </h1>

        </div>

        <div className="
          relative z-10
          grid lg:grid-cols-2
          gap-20
          items-center
          w-full
          max-w-[1600px]
          mx-auto
        ">

          {/* LEFT */}
          <div>

            <p className="
              text-[10px]
              tracking-[0.6em]
              uppercase
              text-zinc-500
              mb-8
            ">
              OFFICIAL PRODUCTION
            </p>

            <h1 className="
              text-5xl
              md:text-7xl
              lg:text-8xl
              font-black
              leading-[0.95]
            ">

              TEAM <br />

              <span className="
                bg-gradient-to-r
                from-white
                via-zinc-300
                to-zinc-600
                bg-clip-text
                text-transparent
              ">
                KAYA THIS
              </span>

            </h1>

            <div className="
              w-32 h-[1px]
              bg-gradient-to-r
              from-red-500
              to-transparent
              mt-10 mb-10
            " />

            <p className="
              max-w-2xl
              text-zinc-400
              leading-8
              text-base md:text-lg
            ">
              A cinematic collective dedicated to crafting immersive
              storytelling through fragmented memory systems,
              emotional expression, and experimental visual language.
            </p>

            {/* METADATA */}
            <div className="
              flex flex-wrap
              gap-8 md:gap-12
              mt-14
              text-[10px]
              tracking-[0.35em]
              uppercase
              text-zinc-500
            ">

              <div>
                <p className="text-white mb-2">FORMAT</p>
                <p>2.5D ANIMATION FILM</p>
              </div>

              <div>
                <p className="text-white mb-2">STATUS</p>
                <p>ACTIVE</p>
              </div>

              <div>
                <p className="text-white mb-2">YEAR</p>
                <p>2026</p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="
            hidden lg:flex
            relative
            h-[620px]
            items-center
            justify-center
          ">

            {/* CARD 1 */}
            <div className="
              absolute top-0 left-0
              w-[320px]
              rounded-[28px]
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              p-7
            ">

              <p className="
                text-[10px]
                tracking-[0.35em]
                text-red-400
                uppercase
              ">
                01
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                Visual Distortion
              </h3>

              <p className="mt-5 text-zinc-400 leading-7">
                Reality bends through layered motion,
                memory glitches, and cinematic depth.
              </p>

            </div>

            {/* CARD 2 */}
            <div className="
              absolute top-36 right-0
              w-[340px]
              rounded-[28px]
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              p-7
            ">

              <p className="
                text-[10px]
                tracking-[0.35em]
                text-blue-400
                uppercase
              ">
                02
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                Emotional Engine
              </h3>

              <p className="mt-5 text-zinc-400 leading-7">
                Narrative systems designed to evoke tension,
                fear, and fragmented psychological perception.
              </p>

            </div>

            {/* CARD 3 */}
            <div className="
              absolute bottom-0 left-20
              w-[300px]
              rounded-[28px]
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              p-7
            ">

              <p className="
                text-[10px]
                tracking-[0.35em]
                text-pink-400
                uppercase
              ">
                03
              </p>

              <h3 className="mt-5 text-2xl font-bold">
                Memory Fracture
              </h3>

              <p className="mt-5 text-zinc-400 leading-7">
                Non-linear storytelling layered with
                immersive psychological transitions.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* MANIFESTO */}
      {/* ================================================= */}
      <section className="relative py-32 md:py-40 px-6 md:px-14 overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="
            text-[16vw]
            font-black
            text-white/[0.03]
            select-none
          ">
            VISION
          </h1>

        </div>

        <div className="
          relative
          max-w-6xl
          mx-auto
          text-center
        ">

          <p className="
            text-[10px]
            tracking-[0.6em]
            uppercase
            text-zinc-500
            mb-10
          ">
            DIRECTOR’S NOTE
          </p>

          <h2 className="
            text-2xl
            md:text-5xl
            font-light
            leading-[1.4]
            text-zinc-100
          ">

            “NGINIG is not simply watched.

            <span className="text-white font-semibold">
              {" "}It is entered.
            </span>

            {" "}A curated collection of cinematic environments,
            visual systems, and emotional states developed
            during the production of Nginig.”

          </h2>

          <div className="w-24 h-[1px] bg-white/20 mx-auto my-14" />

          <p className="
            text-zinc-500
            tracking-[0.25em]
            uppercase
            text-xs
          ">
            Creative Direction Statement
          </p>

        </div>

      </section>

      {/* ================================================= */}
      {/* INFO STRIP */}
      {/* ================================================= */}
      <section className="
        relative
        py-8
        border-y border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        overflow-hidden
      ">

        <div className="
          flex flex-wrap
          justify-center
          gap-8 md:gap-16
          text-[10px]
          tracking-[0.45em]
          uppercase
          text-zinc-500
          px-6
        ">

          <span>VISUAL DISTORTION</span>
          <span>EMOTIONAL ENGINE</span>
          <span>2.5D EXPERIENCE</span>
          <span>PSYCHOLOGICAL CINEMA</span>

        </div>

      </section>

      {/* ================================================= */}
      {/* GALLERY */}
      {/* ================================================= */}
      <section className="relative py-32 md:py-40 px-6 md:px-14">

        <div className="max-w-[1600px] mx-auto">

          <div className="
            flex flex-col md:flex-row
            justify-between md:items-end
            gap-8
            mb-16
          ">

            <div>

              <p className="
                text-[10px]
                tracking-[0.6em]
                uppercase
                text-zinc-500
                mb-6
              ">
                PRODUCTION ARCHIVE
              </p>

              <h2 className="
                text-5xl
                md:text-7xl
                font-black
                leading-none
              ">
                Production
              </h2>

            </div>

            <p className="
              max-w-md
              text-zinc-500
              leading-7
            ">
              A fragmented collection of cinematic environments,
              visual systems, and emotional states.
            </p>

          </div>

          <div className="
            relative
            rounded-[36px]
            overflow-hidden
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
          ">

            <Gallery />

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* TEAM */}
      {/* ================================================= */}
      <section className="relative py-32 md:py-40 overflow-hidden">

        {/* BG WORD */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="
            text-[15vw]
            font-black
            text-white/[0.03]
            tracking-tight
            select-none
          ">
            THE TEAM
          </h1>

        </div>

        {/* glow */}
        <div className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent
          via-red-500/5
          to-transparent
        " />

        {/* HEADER */}
        <div className="
          relative z-10
          px-6 md:px-14
          text-center
          mb-20
        ">

          <p className="
            text-[10px]
            tracking-[0.6em]
            uppercase
            text-zinc-500
            mb-8
          ">
            PRODUCTION TEAM (TKT – TEAM KAYA THIS)
          </p>

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            leading-none
          ">

            Meet The <br />

            <span className="
              bg-gradient-to-r
              from-white
              via-zinc-300
              to-zinc-600
              bg-clip-text
              text-transparent
            ">
              Team
            </span>

          </h2>

          <div className="
            w-32 h-[1px]
            bg-gradient-to-r
            from-transparent
            via-red-500
            to-transparent
            mx-auto my-10
          " />

          <p className="
            text-zinc-400
            leading-8
            max-w-4xl
            mx-auto
            text-base md:text-lg
          ">
            The production of NGINIG is made possible through the
            collaborative efforts of TKT (Team Kaya This),
            integrating animation, visual design, storytelling,
            programming, sound design, and technical development
            into a unified cinematic experience.
          </p>

        </div>

        {/* TEAM GRID */}
        <div className="
          relative z-10
          w-full
          px-4 md:px-10
        ">

          {/* glow */}
          <div className="
            absolute inset-0
            bg-gradient-to-r
            from-red-500/10
            via-transparent
            to-blue-500/10
            blur-[120px]
          " />

          {/* IMPORTANT FIX */}
          {/* MAS MALAKI NA TEAM GRID */}
          <div className="
            relative z-10
            max-w-[1900px]
            mx-auto
            scale-[1.02]
          ">

            <TeamGrid />

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}
      <section className="relative py-32 text-center overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <h1 className="
            text-[18vw]
            font-black
            text-white/[0.02]
            select-none
          ">
            END
          </h1>

        </div>

        <div className="relative z-10 px-6">

          <div className="
            w-24 h-[1px]
            bg-white/20
            mx-auto mb-8
          " />

          <h2 className="
            text-4xl
            md:text-6xl
            font-black
            leading-tight
          ">

            Beyond perception. <br />
            Beyond memory.

          </h2>

          <p className="
            mt-10
            text-[10px]
            tracking-[0.6em]
            uppercase
            text-zinc-600
          ">
            NGINIG / VISUAL ARCHIVE
          </p>

        </div>

      </section>

    </main>
  );
}