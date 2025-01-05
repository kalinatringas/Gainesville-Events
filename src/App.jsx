import { Tabs } from 'rsuite'
import  Sophie  from './Sophie.jsx'
import Kalina from './Kalina.jsx'
import './App.css'
import Filter from './Filter.jsx'

function App() {


  return (
    <>
    <Tabs defaultActiveKey="1" vertical appearance="subtle" >
    <Tabs.Tab eventKey="1" title="Welcome" className='tabLabels'>
      <h1>Hello friends! Me (kalina) and sophie have compiled a list of things going on in gainesville,<br/> that way you are never bored :D 
      <br/> for clarification, we will not be attending all of these events, that would be impossible. However, these are all <br/> hand picked
      going-ons in gainesville that we would be intersted in going to! </h1>
      <Filter className='filter'/>
    </Tabs.Tab>
    <Tabs.Tab eventKey="2" title="Sophie"className='tabLabels'>
      <Sophie/>
    </Tabs.Tab>
    <Tabs.Tab eventKey="3" title="Kalina"className='tabLabels'>
      <Kalina/>
    </Tabs.Tab>
  </Tabs>
      
    </>
  )
}

export default App
