import React, { createContext, Dispatch, useContext, useReducer } from 'react';

export type CommonStateType = {
  isHoverMenu: boolean;
  isClickedMenu: boolean;
};

const initialState: CommonStateType = {
  isHoverMenu: false,
  isClickedMenu: false,
};

const CommonStateContext = createContext<CommonStateType>(initialState);

type Action = { type: 'HOVER'; payload: boolean } | { type: 'CLICKED'; payload: boolean };
type CommonDispatch = Dispatch<Action>;

const CommonDispatchContext = createContext<CommonDispatch | null>(null);

function commonReducer(state: CommonStateType, action: Action): CommonStateType {
  switch (action.type) {
    case 'HOVER':
      return { ...state, isHoverMenu: action.payload };
    case 'CLICKED':
      return { ...state, isClickedMenu: action.payload };
    default: {
      return state;
    }
  }
}

export function CommonContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(commonReducer, initialState);

  return (
    <CommonDispatchContext.Provider value={dispatch}>
      <CommonStateContext.Provider value={state}>{children}</CommonStateContext.Provider>
    </CommonDispatchContext.Provider>
  );
}

export function useCommonState() {
  const state = useContext(CommonStateContext);
  return state;
}

export function useCommonDispatch() {
  const dispatch = useContext(CommonDispatchContext);
  if (!dispatch) {
    throw new Error('CommonProvider not found');
  }
  return dispatch;
}
