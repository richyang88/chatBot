/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
// import axios from 'axios'

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
 class Login extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        message: 'Hello World '
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    // componentDidMount() {
        // axios.get('/api/helloworld')
        //     .then((res) => {
        //         this.setState({message: res.data})
        //     })
        // console.log("hello world")
    // }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        setState="Hello World"
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
