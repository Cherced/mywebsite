import React , {useState} from 'react'
import { MatrixAnimation } from '../Components/MatrixAnimation'

const VideoAboutMe = () => {


const [starterMore, setStarterMore] = useState(true)

setTimeout(() => {
    setStarterMore(false)
}, 8000)

        

  return (
    <React.Fragment>
        {
            starterMore ? <MatrixAnimation /> : 
            (
            <React.Fragment>
            <div className="matrixContainer" id="matrix">	
            <div className="d1 c1 de" style={{left: 5}}>q8w<span>1</span>ertyuioklsdfgh<span>j</span>zxc</div>
            <div className="d3 f1" style={{left: 30}}>hgd4ldhbc9kpugccsr<span>q</span></div>
            <div className="d1 f2 c1" style={{left: 60}}>tr<span>z</span>ews0yfkldf4cvgbhj<span>n</span></div>
            <div className="d2 f1" style={{left: 80}}>sodhr49wh<span>u</span>yfbsrnlepjh</div>
            <div className="d4 c3 de" style={{left: 110}}>fue73<span>s</span>jf0tbkxpowf<span>v</span>n</div>
            <div className="d2 c1" style={{left: 140}}>sjdhfgueiwfgivecjowxkwpkpo<span>m</span>vcjoeuur</div>
            <div className="d3 f2 c1" style={{left: 170}}>tr<span>z</span>hfggh</div>
            <div className="d1 c1" style={{left: 185}}>thgp<span>m</span>srthdvytfv09876t<span>q</span>fgv</div>
            <div className="d3 de" style={{left: 200}}>dhiwgfdue<span>s</span>rjm</div>
            <div className="d4 f1" style={{left: 250}}>osadh<span>a</span>rshdyfeujm</div>
            <div className="d2 de" style={{left: 290}}>fwedjsdjh<span>l</span>gmrghftdercwewergjm</div>
            <div className="d3 f2" style={{left: 310}}>sodhr49wh<span>a</span>yfbsrnlepjh</div>
            <div className="d1 f1" style={{left: 350}}>p00oi<span>0</span>nf5sujhgdgbrjs36gdr<span>g</span>jpo</div>
            <div className="d4 c1" style={{left: 390}}>h68kgdetklbf<span>b</span>eswk</div>
            <div className="d2 de" style={{left: 410}}>dfrttvb<span>s</span>cfsr</div>
            <div className="d1 c1 de" style={{left: 430}}>sgfy<span>b</span>0hfrese<span>4</span>kc</div>
            </div>
            <div className="VideoSelection_Container">
            <ul className="MenuSelection">
                <li>
                    <h1> ENGLISH </h1>
                </li>
                <li>
                    <h1> SPANISH </h1>
                </li>
            </ul>
          </div>
          </React.Fragment>
            )
        }
    </React.Fragment>
  )
}

export default VideoAboutMe