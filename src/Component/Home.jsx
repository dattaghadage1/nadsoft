import '../CSS/home.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import '../CSS/home.css'
import { animated, useSpring } from 'react-spring'
// import {}
function Home() {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      Config: { mass: 1, tension: 20, friction: 10 },
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-8 d-flex flex-wrap justify-content-center">
            <div className="container main-section ">

              <div className="row text-center">
                <div className="col m-5">
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown button
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item active" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col m-5">
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown button
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><a className="dropdown-item active" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>

                  </div>
                </div>

                <div className="col m-5">
                  <button class="btn btn-secondary" type="submit">Button</button>
                </div>
              </div>
              {/* </div> */}
              {/* .................................Counter-secoction------------------------------ */}
              <section>
                <div className="row funnels">
                  <div className="col">
                    <ul className='list-unstyled d-flex justify-content-evenly flex-wrap'>
                      <li>Visitor<span><Number n={4} /></span></li>
                      <li>Conversion<span><Number n={525} /></span></li>
                      <li>Amount<span><Number n={25.6} /></span></li>
                      <li>Sell<span><Number n={54} /></span></li>
                      <li>AOV<span><Number n={125} /></span></li>
                    </ul>
                  </div>
                </div>

              </section>
              {/* ..........................................step......................... */}
              <div className="row  d-flex justify-content-between  mt-5  mb-5">
                <h2>Funnel Step <button className='' >Button</button></h2>
                <div className="col-5 step mt-3 ">
                  <h3>Headline 1</h3>
                  <ul className='d-flex gap-5 flex-wrap'>
                    <li>Amount<span><Number n={32564} /></span></li>
                    <li>Sell<span><Number n={32564} /></span></li>
                    <li>AOV<span><Number n={32564} /></span></li>
                  </ul>
                </div>
                <div className="col-5 step mt-3">
                  <h3>Headline 2</h3>
                  <ul className='d-flex mt-4 gap-5 flex-wrap'>
                    <li>Amount<span><Number n={32564} /></span></li>
                    <li>Sell<span><Number n={32564} /></span></li>
                    <li>AOV<span><Number n={32564} /></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home