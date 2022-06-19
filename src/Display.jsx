import { UseContext, Context } from "./Context";

const Display = () => {
    const { state } = UseContext(Context);
    const { name, age } = state.user;

    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </>
    );
};

export default Display;
