import { react } from "react";
import { MenuItems } from "../compoenents/MenuItems";
import { Component } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";
const slashMotion = {
  rest: { x: 0, opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    x: 4,
    color: "yellow",
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeOut"
    }
  }
};
const textMotion = {
  rest: {
    x: 0
  },
  hover: {
    color: "yellow",
    //x: 6,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut"
    }
  }
};
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredIndex: null
    };
  }

  handleHover = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseOut = () => {
    this.setState({ hoveredIndex: null });
  };
  render() {
    return (
      <>
        <motion.nav
          class="   z-40
                    font-[700]
                     
                     w-full h-10 flex flex-row
                    mx-30
                    fixed
                
                    my-10
                    justify-center
                    
                 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className=" w-[1000px] flex flex-row justify-between"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <h1 className=" text-white  text-4xl font-extrabold ">LOGO</h1>
            <ul className=" text-white my-2   flex w-90 flex-row  justify-between">
              {MenuItems.map((item, index) => {
                return (
                  <li
                    className=" font-[650] w-20 mr-[20px]  relative hover:text-yellow flex"
                    key={index}
                    onMouseOver={() => this.handleHover(index)}
                    onMouseOut={this.handleMouseOut}
                  >
                    <motion.a
                      className="{item.cName}  
                     
                      block hover:text-yellow-300"
                      to={item.url}
                    >
                      {item.title}
                    </motion.a>
                    {this.state.hoveredIndex === index && (
                      <motion.div animate={slashMotion.hover}>
                        <h2 className="text-[15px]"> {item.icon}</h2>
                      </motion.div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.nav>
      </>
    );
  }
}

export default Navbar;
