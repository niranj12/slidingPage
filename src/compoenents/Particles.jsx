import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useState } from "react";

function Particle() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  const [isHovering, setIsHovering] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        position: "absolute",
        height: "1300px",
        width: "100%",
        //border: "3px solid green",
        display: "block",
        zIndex: 3
      }}
      //className=" z-30 border-4 border-gray-700 width-100 height-[1300px] top-30 relative display-block "
      //onMouseEnter={() => setIsHovering(true)}
      //onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <Particles
          id="tsparticles"
          style={{
            //display: isHovering ? "block" : "none",
            width: 10,
            height: 15,
            zIndex: 4,
            display: "block",
            position: "absolute",

            backgroundColor: "transparent"

            // border: "5px solid red"
          }}
          init={particlesInit}
          Loaded={particlesLoaded}
          options={{
            background: {
              color: "transparent"
            },
            fpsLimit: 93,
            interactivity: {
              detectOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10
                  },
                  // background: {
                  //   color: "##FFFF00"
                  // },
                  boundary: {
                    width: 30,
                    height: 30
                  },
                  opacity: {
                    value: 0.3
                  },
                  particles: {
                    color: {
                      value: "#0000FF"
                    }
                  }
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 300,
                  duration: 1
                },
                repulse: {
                  distance: 90,
                  duration: 0.7
                }
              },

              pauseOnBlur: true,
              retinaDetect: true
            },
            particles: {
              color: "#0000FF",
              polygon: {
                nb_sides: 6
              },
              links: {
                color: "#FFFFFF",
                distance: 300,
                enable: true,
                opacity: 0.5,
                width: 1.5
              },
              collisions: {
                enable: true
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  //default: "bounce"
                },
                random: false,
                speed: 1.2,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 1000
                },
                value: 20
              },
              opacity: {
                value: 0
              },
              shape: {
                type: "circle"
              },
              size: {
                value: { min: 0.22, max: 0.22 }
              }
            },
            detectRetina: true
            //pauseOnBlur: true
          }}
        />
      )}
    </div>
  );
}

export default Particle;
