import React,{useState,useMemo} from 'react'


function UseMemo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(()=> expensiveCalculation(count),[count]);

    const incrementHandler = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-info'>
                            This is useMemmo class.
                        </h1>

                    </div>
                    <div className="row mt-4">
                        <div className="col text-center">
                            <div>
                                <h2 className='text-primary'>My Todos</h2>
                                {todos.map((todo, index) => {
                                    return <p key={index}>{todo}</p>;
                                })}
                                <button className='btn btn-info' onClick={addTodo}>Add Todo</button>
                            </div>
                            <hr />
                            <div>
                                Count: {count} <br />
                                <button className='btn btn-success' onClick={incrementHandler}> Increment</button>
                                <h2>Expensive Calculation</h2>
                                {calculation}
                            </div>
                            {/* <button className='btn btn-success' onClick={incrementHandler}> Increment</button>
                    <h3 className="my-3">{count}</h3>
                    <button className="btn btn-danger" onClick={decrementHandler}>Decrement</button> <br />
                    <button className="btn btn-warning mt-2 " onClick={() => { setCount(0) }}>Reset</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000; i++) {
      num += 1;
    }
    return num;
  };

export default UseMemo