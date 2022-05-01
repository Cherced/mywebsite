import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { StarterPage } from '../Components/StarterPage'

const App = () => {
    const [starter, setStarter] = useState(true);
    const router = useRouter();
    function goHome () {
        router.push('/home');
    }
    useEffect(() => {
        setTimeout(() => {
        setStarter(false);
    }, 4000);
    }, []);

  return (
      <React.Fragment>
    {
        starter ? <StarterPage /> : (goHome())
    }
    </React.Fragment>
  )
}

export default App