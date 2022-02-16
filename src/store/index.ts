import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
    },
})

/*

import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    //e.g. countries = [],
    //e.g. quantity = 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducer: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;


export const counterActions = counterSlice.actions; 
//counterActions object to be used in components that need it
/*
In component where we need the action:

import { counterActions } from <this file path>;

const counter = useSelector((state) => state.counter.counter);

const increaseHandler = () => {
    dipatch(counterActions.increase(10));   10 is the payload
};


export const authActions = authSlice.actions;
*/

/*
Authentication:

function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    return (
        <Fragment>
            <Header />
            {!isAuth && <Auth />}
            {isAuth && <UserProfile />}
            <Counter />
        </Fragment>
    )
}

**********
In Auth.js component
**********
import {useDispatch} from 'react-redux';
import { authActions } from '../store/index';

const Auth = () => {
    const dispatch = useDispatch();

    const loginHandler = (event) => {
        event.preventDefault        //to prevent acutal authentication
        
        dispatch(authActions.login());
    };

    return (
        <main>
            <section>
                <form onSubmit={loginHandler}>
                    <div>
                        <label> htmlFor='email'>Email</label>
                        <input type='text' id='email' />
                    </div>
                </form>
            </section>
        </main>
    )
};


*********
Header.js
*********
import {useSelector,useDispatch} from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuthenticated)

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    return (
        <header>
            <h1>Redux Auth</h1>
            {isAuth && (
                <nav>
                    <ul>
                        <li><a href='/'>My Products</a></li>
                        <li><a href='/'>My Sales</a></li>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}



*/