import bgImage from '../assets/background.jpg'

const Home = () => {
  return (
    <main style={{backgroundImage:`url(${bgImage})`}} className="flex jutsify-center">
    <div style={{backgroundImage:`url(${bgImage})`}} className="grid grid-cols-2 gap- w-full" >
        <section >
          <h1>ROREM IPSUM DOLOR SIT CONSECTETUR</h1>
           <p>
            adipiscing elit. Ut elit tellus,
           luctus nec ullamcorper mattis, pulvinar dapibus leo,adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
           </p>
        </section>
        <section>01</section>
    </div>
    </main>

  )
}

export default Home