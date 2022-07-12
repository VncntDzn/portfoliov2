import React, { createContext, ReactNode, useContext, useReducer } from "react";

type Action =
    | { type: "START_ANIMATION"; start: boolean }
    | { type: "STOP_ANIMATION"; stop: boolean };
type Dispatch = (action: Action) => void;

type State = {
    error: string | undefined;
    status: string | undefined;
    loading: boolean;
    start: boolean;
    stop: boolean;
};

type AnimationProviderProps = { children: ReactNode };

const AnimationContext = createContext<
    { state: State; dispatch: Dispatch } | undefined
>(undefined);

const initialState = {
    error: "",
    status: "",
    loading: false,
    start: false,
    stop: false,
};

const animationReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "START_ANIMATION":
            return {
                ...state,
                status: "success",
                start: true,
            };

        default:
            throw new Error(`Unhandled action type`);
    }
};
const AnimationProvider = ({ children }: AnimationProviderProps) => {
    const [state, dispatch] = useReducer(animationReducer, initialState);
    return (
        <AnimationContext.Provider value={{ state, dispatch }}>
            {children}
        </AnimationContext.Provider>
    );
};

const useAnimationContext = () => {
    const context = useContext(AnimationContext);
    if (context === undefined) {
        throw new Error(
            "useAnimationContext must be used within a AnimationProvider"
        );
    }
    return context;
};

export { AnimationProvider, useAnimationContext };
