import './App.css'

function App(): JSX.Element {
    const wave = (): void => {}

    return (
        <div className="mainContainer">
            <div className="dataContainer">
                <div className="header">👋 Hey there!</div>

                <div className="bio">
                    I am Gonçalo and I worked as an artis for a while so
                    that&apos;s pretty cool right? Connect your Ethereum wallet
                    and wave at me!
                </div>
                <button type="button" className="waveButton" onClick={wave}>
                    Wave at Me
                </button>
            </div>
        </div>
    )
}

export default App
