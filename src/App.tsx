import {ReactNode} from "react";
import Button from "./components/Button.tsx";
import {TimerContextProvider} from "./store/TimerContext.tsx";

export default function App(): ReactNode {

  return (
    <TimerContextProvider>
        <div className="flex items-center gap-2">
          <Button
            clickEvent={() => {}} text={"-"}/>
          <h1 className={"w-[50px] text-emerald-500 font-extrabold text-2xl text-center"}>{}</h1>
          <Button clickEvent={() => {}} text={"+"}/>
        </div>
    </TimerContextProvider>
  )
}

