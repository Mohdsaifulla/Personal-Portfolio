import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import backgroundImg from "../../src/assets/img27.jpg";
const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        name: "React Snow",
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "remove",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 0.4,
              opacity: 1,
              size: 80,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 180,
              links: {
                opacity: 0.35,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 10,
            },
            repulse: {
              distance: 100,
              duration: 5,
            },
            slow: {
              factor: 1,
              radius: 0,
            },
          },
        },
        particles: {
          color: {
            value: "#FFF",
          },
          links: {
            blink: false,
            color: {
              value: "#fff",
            },
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.6,
            shadow: {
              blur: 5,
              color: {
                value: "lime",
              },
              enable: false,
            },
            width: 1,
          },
          move: {
            direction: "bottom",
            enable: true,
            speed: 3,
          },
          collisions: {
            enable: true,
          },
          number: {
            limit: -1,
            value: 160,
          },
          opacity: {
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
            value: {
              min: 0.1,
              max: 0.5,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 1,
              max: 4,
            },
          },
        },
        pauseOnBlur: true,
        background: {
          color: "",
          image: `url(${backgroundImg})`,
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          opacity: 0.5,
        },
      }}
    />
  );
};

export default Particle;
