import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch =useDispatch()
  const counter =useSelector(state=>state.counter)
  
  const incrementHandler =()=>{
    dispatch({type:"increment"})
  }
  const decrementHandler =()=>{
    dispatch({type:"decrement"})
  }

  const incrementHandlerBy5 =()=>{
    dispatch({type:"incrementBy5"})
  }
  const decrementtHandlerBy5 =()=>{
    dispatch({type:"decrementBy5"})
  }
  // decremenenby5
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementHandlerBy5}>IncrementBy5</button>
        <button onClick={decrementtHandlerBy5}>Decremenenby5</button>


      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
