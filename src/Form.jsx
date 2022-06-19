import { useContext } from "react";
import { Context, actions } from "./Context";

const Form = () => {
    const { commands } = useContext(Context);
    const { setName, setAge } = commands;

    const submitName = (e) => {
        e.preventDefault();
        const input = e.target[0].value;
        setName(input);
    };

    const submitAge = (e) => {
        e.preventDefault();
        const input = parseInt(e.target[0].value);
        setAge(input);
    };

    return (
        <>
            <form onSubmit={submitName}>
                <label>
                    Name:
                    <input type="text" />
                </label>
                <button type="submit">submit</button>
            </form>

            <form onSubmit={submitAge}>
                <label>
                    Age:
                    <input type="number" />
                </label>
                <button type="submit">submit</button>
            </form>
        </>
    );
};

export default Form;
