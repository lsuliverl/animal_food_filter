import { useState } from "react";

const Countting = () => {
    const [count, setCount] = useState(0);

    const upNumber = () => {
        setCount(count + 1);
    };

    const downNumber = () => {
        if (count <= 0) {
            return count;
        }
        setCount(count - 1);
    };
    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={upNumber}>누르면 숫자 1 증가</button>
                <button onClick={downNumber}>누르면 숫자 1 감소</button>
            </div>
        </>
    );
};

export default Countting;
