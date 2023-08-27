import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../Store';
const Counter = () => {
  const dispatch =useDispatch()
  const counter =useSelector(state=>state.counter.counter)
  const show = useSelector(state=>state.counter.showConter)
  const incrementHandler =()=>{
    dispatch(counterActions.increment())
  }
  const decrementHandler =()=>{
    dispatch(counterActions.decrement())
  }
 

  const increaseHandler =()=>{
    dispatch(counterActions.increse(10))
  }
 
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {!show &&  <div className={classes.value}>{counter}</div>
      }
     <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increse</button>
       </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
