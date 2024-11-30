import { ArrowUpRight, Ticket } from "lucide-react";
import { Button } from "./ui/button";
import { Countdown } from "./common/Countdown";
import { FC, PropsWithChildren } from "react";
import { cn } from "./utils";

interface Props extends PropsWithChildren<{}> {
  variant: "home" | "ticket";
}

export const WelcomeHero: FC<Props> = ({ variant, children }) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-6xl w-full h-full",
        variant === "home" ? "mt-44" : "mt-20"
      )}
    >
      <div className="relative z-20 flex flex-col gap-14 items-center text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-caTextSecondary text-lg md:text-[24px]">
            Informe final puntos extras 0
          </h2>
          <p className="mx-9 text-5xl text-balance md:text-hero font-semibold lg:text-wrap">
            Entrega final en{" "}
            <span className="inline-block bg-gradient-to-r from-caPrimary-500 to-caSecondary-500 text-transparent bg-clip-text">
              Bambú y After Party en Jora
            </span>
          </p>
          {children}
        </div>

        {/* Wrapper was moved to countdown because its component logic, could be override by className prop */}
        <Countdown startFrom={new Date("2024-12-6")} />

        <div className="flex gap-6 pb-12">
          {/* {variant === "home" && (
            <a href="#ticket">
              <Button size="xl">
                Ver ticket
                <Ticket className="size-6 ml-3" />
              </Button>
            </a>
          )}
          {variant === "ticket" && (
            <a href="/">
              <Button size="xl">
                Ir al inicio
                <ArrowUpRight className="size-6 ml-2" />
              </Button>
            </a>
          )} */}
          <Button variant="default" size="xl">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8gSmh5h5rkZSPwAOAuY01BwPT98-Ijf1oW4N5iH0YwwdAFA/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              Votar por el más pisado
            </a>
            <ArrowUpRight className="size-6 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
