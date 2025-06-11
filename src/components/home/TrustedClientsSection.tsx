import { Sparkles } from '../../components/ui/sparkles';

const Adidas = () => (
  <div className="text-center text-xl font-bold whitespace-nowrap">
    Adidas
  </div>
)

const Artistic = () => (
  <div className="text-center text-xl font-bold whitespace-nowrap">
    Artistic
  </div>
)

const BSM = () => (
  <div className="text-center text-xl font-bold whitespace-nowrap">
    BSM
  </div>
)

const Interloop = () => (
  <div className="text-center text-xl font-bold whitespace-nowrap">
    Interloop
  </div>
)

const JCPenney = () => (
  <div className="text-center text-xl font-bold whitespace-nowrap">
    JCPenney
  </div>
)

const Primark = () => (
  <div className="text-center text-xl font-bold whitespace-nowrap">
    Primark
  </div>
)

const Target = () => (
  <div className="text-center text-xl font-bold whitespace-nowrap">
    Target
  </div>
)

const Walmart = () => (
  <div className="text-center text-xl font-bold whitespace-nowrap">
    Walmart
  </div>
)

const TrustedClientsSection = () => {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="mx-auto mt-32 w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-3xl text-foreground">
          <span className="text-indigo-900 dark:text-indigo-200">
            Trusted by experts.
          </span>
          <br />
          <span>Used by the leaders.</span>
        </div>

        <div className="mt-14 flex justify-center gap-x-8 items-center text-zinc-900 dark:text-white">
          <Adidas />
          <Artistic />
          <BSM />
          <Interloop />
          <JCPenney />
          <Primark />
          <Target />
          <Walmart />
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
          color="#ffffff"
        />
      </div>
    </section>
  );
};

export default TrustedClientsSection; 