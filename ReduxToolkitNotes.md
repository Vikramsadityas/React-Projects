#Redux is a state library
and redux tool kit is its advaance verison
react-redux is a bridge between react and redux
#steps
1. install redux and redux toolkit
2. create a store
    here we need configureStore where we need to input it
3. create a slice
    1.Now we create a slice by using create slice which we import also we impoeted nano id for giving ids
    2.Now we create a intial State of that were we give initial value as intialState.
    3.Now we create a slice using createSlice where we give name,initialState and reducers
    4.Reducers are nothing but functionality it is a objects here we can add different functions such as in Todo we make addtodo and removeTodo you can see in code  
    5.Now we create our function in reducres which is a function which takes two arguments state and action
    
4. create a provider
5. create a component
    in components if we need to send values we uses useDispatch() and to select values to take values we used useSelector
