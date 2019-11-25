import React from 'react'
import ReactGA from 'react-ga';

function AppOne() {

    const ClickHandler = () => {
        ReactGA.event({
            category: 'Button',
            action: 'Click the button from first page'
          });
        alert('Send the information to google analystic that I touched the click button')
    }

    return (
        <div>
            First Page
            <br />
            <button onClick={ClickHandler}>Click</button>
        </div>
    )
}

export default AppOne
