export interface IInitializeArg {
  seconds: number;
  timerIsOn: boolean;
}
enum Action {
  START = "START",
  STOP = "STOP",
  RESET = "RESET",
  TICK = "TICK"
}
export type ActionType = {
  type: Action
}

export const initializeArg: IInitializeArg = {
  seconds: 0,
  timerIsOn: false
}

export const reducer = (state: IInitializeArg, action: ActionType): IInitializeArg => {
  switch (action.type) {
    case Action.START:
      return {...state, timerIsOn: true}
    case Action.STOP:
      return {...state, timerIsOn: false}
    case Action.RESET:
      return {...initializeArg}
    case Action.TICK:
      return {...state, seconds: state.seconds + 1}
    default:
      return state;
  }
}


