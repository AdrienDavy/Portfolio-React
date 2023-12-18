import background from '@videoSources/home.mp4';
const Home = () => {
  return (
    <div className='home-container'>
      <video src={background} autoPlay muted loop />
    </div>
  )
}

export default Home
