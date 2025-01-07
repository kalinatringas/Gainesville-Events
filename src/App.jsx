import { Tabs } from 'rsuite'
import Sophie  from './Sophie.jsx'
import Kalina from './Kalina.jsx'
import './App.css'
import 'rsuite/Tabs/styles/index.css';
import Locations from './Locations.jsx';

function App() {


  return (
    <>

    <Tabs defaultActiveKey="1" appearance="pills" className='center'>
    <Tabs.Tab eventKey="1" title="Welcome" className='tabLabels'>
      <h1>Hello friends! Me (kalina) and sophie have compiled a list of things going on in gainesville,<br/> that way you are never bored :D 
      <br/> for clarification, we will not be attending all of these events, that would be impossible. However, these are all <br/> hand picked
      going-ons in gainesville that we would be intersted in going to! </h1>

    </Tabs.Tab>
    <Tabs.Tab eventKey="2" title="Sophie"className='tabLabels'>
      <Sophie/>
    </Tabs.Tab>
    <Tabs.Tab eventKey="3" title="Kalina"className='tabLabels'>
      <Kalina/>
    </Tabs.Tab>
    <Tabs.Tab eventKey='4' title="Extras" className='tabLabels'>
      <Locations/>
    </Tabs.Tab>
  </Tabs>
    </>
  )
}

export default App
