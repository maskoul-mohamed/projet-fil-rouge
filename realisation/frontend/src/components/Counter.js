import { useDispatch, useSelector} from "react-redux"; 
import { 
    increment, 
    decrement, 
    reset,
    incrementByAmount
} from "../features/counter/counterSlice"
import { useState } from "react";

export const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    const addAmount = Number(incrementAmount)
    return(
        <section>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => resetAll()}>Reset</button>
            <div>
                <input 
                    type="text"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)} 
                />
            </div>
            <button onClick={() => dispatch(incrementByAmount(addAmount))}>Add Amount</button>
        </section>
    )
}

