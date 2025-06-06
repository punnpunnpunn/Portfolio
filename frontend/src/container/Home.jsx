import picture from '../assets/my_pic.png'

function Home() {
    return <div className='home'>
        <div className='text'>
            <h3>Hello there! I'm</h3>
            <h1>Punpun (Punnawit Payapvattanavong) </h1>
            <br/><br/>
            <h4>Computer Science Major | Mathematical Applications in Economics and Finance Specialist | Statistics Minor @ University of Toronto</h4>
            <footer>[Contacts here]</footer>
        </div>
        <img src= {picture} alt="Punpun's Picture"/>
    </div>
}

export default Home