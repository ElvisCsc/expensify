import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1} ={}) =>({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy =1 } ={}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
     count
});

const resetCount = () => ({
    type: 'RESET'
});

const store = createStore( (state = { count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count: action.count
            };
        case 'RESET':
            return{
                count: 0
            };
        default:
            return state;
    }
});

const unsubcribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10}));
store.dispatch(setCount({ count: -100}));

/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
      name: 'sue'
    }
};
Desktop/react-pro/Recap/mine/boilerplate-v1
const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
console.log(name);*/
