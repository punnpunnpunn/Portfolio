import picture from '../assets/my_pic.png'

function Home() {
    return <div className='home'>
        <div className='text'>
            <h3>Hello there! I'm</h3>
            <h1>Punpun (Punnawit Payapvattanavong) </h1>
            <h2>[Insert Descrption here]</h2>
        </div>
        <img src= {picture} alt="Punpun's Picture"/>
    </div>
}

export default Home