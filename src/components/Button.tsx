import {ReactNode} from "react";
import {motion} from "framer-motion";

export default function Button({ clickEvent, text }:
{ clickEvent: () => void  ,text: string }
): ReactNode {
  return (
    <motion.button
      initial={{
        scale: 1
      }} whileTap={{
        scale: 0.9
      }} transition={{
        duration: 0.1,
        type: "spring",
        stiffness: 350
      }}
      onClick={clickEvent}
      className={"w-12 h-12 rounded-md bg-gray-800 border-none outline-none text-emerald-500 font-bold text-2xl"}
    >
      {text}
    </motion.button>
  );
}
