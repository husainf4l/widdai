"use client";

import React, { useMemo } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

const AIAnimation: React.FC = () => {
  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: true,
              force: 100,
              smooth: 20,
            },
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 15,
          },
          bubble: {
            distance: 250,
            size: 12,
            duration: 2,
            opacity: 1,
            color: {
              value: ["#00E5FF", "#9E00FF"],
            },
          },
          grab: {
            distance: 350,
            links: {
              opacity: 1,
              color: "#00E5FF",
            },
          },
          repulse: {
            distance: 300,
            duration: 2,
          },
        },
      },
      particles: {
        color: {
          value: ["#00A3FF", "#00E5FF", "#9E00FF", "#FFFFFF"],
        },
        links: {
          color: {
            value: ["#00A3FF", "#00E5FF", "#9E00FF"],
          },
          distance: 150,
          enable: true,
          opacity: 0.8,
          width: 2.5,
          triangles: {
            enable: true,
            color: "#00E5FF77",
            opacity: 0.2,
          },
        },
        collisions: {
          enable: true,
          mode: "bounce",
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
            top: "destroy",
            bottom: "none",
          },
          random: false,
          speed: 4,
          straight: false,
          attract: {
            enable: true,
            rotateX: 1200,
            rotateY: 2500,
          },
        },
        number: {
          density: {
            enable: true,
            area: 600,
          },
          value: 200,
        },
        opacity: {
          value: { min: 0.6, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.4,
            sync: false,
          },
        },
        shape: {
          type: ["circle", "polygon"],
          options: {
            polygon: {
              sides: 6,
            },
          },
        },
        size: {
          value: { min: 2, max: 6 },
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 1,
            sync: false,
          },
        },
        stroke: {
          width: 1,
          color: {
            value: "#00E5FF",
            opacity: 0.2,
          },
        },
        twinkle: {
          lines: {
            enable: true,
            frequency: 0.05,
            opacity: 0.8,
            color: {
              value: ["#00E5FF", "#9E00FF"],
            },
          },
          particles: {
            enable: true,
            frequency: 0.08,
            opacity: 1,
            color: {
              value: ["#00A3FF", "#FFFFFF"],
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (typeof window === "undefined") {
    // Don't render a component that depends on browser APIs during SSR
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 z-0"
    />
  );
};

export default AIAnimation;
