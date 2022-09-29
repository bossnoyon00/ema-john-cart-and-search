import React from 'react';

const Question = (props) => {
    return (
        <div>
            <h4>Assignment Question And Answer :</h4>
            <div>
                <h4>How does react work?</h4>
                <p>How does react work : React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
                <h4>What does different state and props ?</h4>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component</p>
                <h4>How to use Effect work ?</h4>
                <p>Use Effect : When you call useEffect in your component, this is effectively queuing or scheduling an effect to maybe run, after the render is done. After rendering finishes, useEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.</p>

            </div>
        </div>
    );
};

export default Question;