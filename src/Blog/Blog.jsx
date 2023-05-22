import React from 'react';

const Blog = () => {
    return (
        <div className='mx-32 mb-20'>
            <div>
                <h1 className='text-center text-3xl text-slate-600 font-bold mt-10 mb-3'>1.Context Api</h1>
                    <p className=''>
                        A. Context provides a way to pass data through the component tree without having to pass props down manually at every level. <br />
                        B. In a typical React application <br />
                        C. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. <br />
                        D. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component: <br />
                        E. However, sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, theme, or a data cache.

                    </p>
            </div>
            <div>
                <h1 className='text-center text-3xl text-slate-600 font-bold mt-10 mb-3'>2.Custom Hook</h1>
                    <p className=''>
                        A. Building your own Hooks lets you extract component logic into reusable functions. <br />
                        B. Traditionally in React, we’ve had two popular ways to share stateful logic between components: render props and higher-order components. We will now look at how Hooks solve many of the same problems without forcing you to add more components to the tree. <br />
                        C. Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. Its name should always start with use so that you can tell at a glance that the rules of Hooks apply to it. <br />
                        D. In the beginning, our stated goal was to remove the duplicated logic from the FriendStatus and FriendListItem components. Both of them want to know whether a friend is online. <br />

                    </p>
            </div>
            <div>
                <h1 className='text-center text-3xl text-slate-600 font-bold mt-10 mb-3'>3.UseRef</h1>
                    <p className=''>
                        A. This page describes the APIs for the built-in Hooks in React. <br />
                        B. During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState). <br />
                        C. If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value. Here’s an example of a counter component that uses both forms of setState: <br />
                        D. The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render: <br />

                    </p>
            </div>
            <div>
                <h1 className='text-center text-3xl text-slate-600 font-bold mt-10 mb-3'>4.UseMemo</h1>
                    <p className=''>
                        A. useMemo is a React Hook that lets you cache the result of a calculation between re-renders. <br />
                        B.calculateValue: The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call your function during the initial render. On next renders, React will return the same value again if the dependencies have not changed since the last render. Otherwise, it will call calculateValue, return its result, and store it so it can be reused later. <br />
                        C. useMemo is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it. <br />
                        D. useMemo is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it. <br />

                    </p>
            </div>
        </div>
    );
};

export default Blog;