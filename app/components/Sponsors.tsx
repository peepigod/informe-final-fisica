import React from 'react';
import Image from 'next/image';

interface SponsorImage {
  src: string;
  alt: string;
  class?: string;
}

interface MarqueeProps {
  sponsors: SponsorImage[];
  speed?: number;
  direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({ 
  sponsors, 
  speed = 50, 
  direction = 'left' 
}) => {
  return (
    <div className="marquee-container">
      <div 
        className={`marquee ${direction}`}
        style={{ '--speed': `${speed}s` } as React.CSSProperties}
      >
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={index} className="marquee-item">
            <Image
              src={sponsor.src}
              alt={sponsor.alt}
              className={sponsor.class}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Sponsors: React.FC = () => {
  const sponsors: SponsorImage[] = [
    { src: "/imgs/afordin-sponsor.png", alt: "logo-sponsor" },
    { src: "/imgs/logo_cfu_.png", alt: "logo-sponsor", class: "invert" },
    { src: "/imgs/logo-wichay.webp", alt: "logo-sponsor" },
    { src: "/imgs/afordin-sponsor.png", alt: "logo-sponsor" },
    { src: "/imgs/logo_cfu_.png", alt: "logo-sponsor", class: "invert" },
  ];

  return (
    <section className="w-full mx-auto max-w-6xl flex flex-col gap-16 overflow-hidden">
      <p className="mx-4 lg:mx-0 text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-br from-caPrimary-500 to-caSecondary-500">
        Evento sponsorizado gracias a
      </p>
      <Marquee sponsors={sponsors} speed={30} direction="left" />
    </section>
  );
};