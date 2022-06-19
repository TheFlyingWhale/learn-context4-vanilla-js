import React from "react";

// The initial state of the context
const initialState = {
    user: {
        name: "Ole",
        age: 26,
    },
};

// Reduces actions given by dispatching
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME": {
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload,
                },
            };
        }
        case "SET_AGE": {
            return {
                ...state,
                user: {
                    ...state.user,
                    age: action.payload,
                },
            };
        }
        default: {
            return state;
        }
    }
};

// The context
export const Context = React.createContext({
    state: initialState,
    actions: {
        setName: () => {},
        setAge: () => {},
    },
});

export const UseContext = () => React.useContext(Context);

// Provides state and dispatch for the context
export const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const setName = (name) => {
        dispatch({
            type: "SET_NAME",
            payload: name,
        });
    };

    const setAge = (age) => {
        dispatch({
            type: "SET_AGE",
            payload: age,
        });
    };

    const commands = {
        setAge,
        setName,
    };

    return (
        <Context.Provider value={{ state, commands }}>
            {children}
        </Context.Provider>
    );
};
