import { Accordion } from 'rsuite';
import 'rsuite/Accordion/styles/index.css';
import { kalinaRest, sophieRest } from './extraData';

export default function Locations(){

    return(
        <div className='overflow-extras'>
            <Accordion defaultActiveKey={1} bordered > 
                <Accordion.Panel header="Favorite Restaraunts" eventKey={1}>   
                    <table className='center-extra'>
                        <thead>
                            <th className='th-extras'>Kalina</th>
                            <th className='th-extras'>Sophie</th>
                        </thead>
                        <tbody className='container'>
                            <th> 
                                {kalinaRest.map(item => <text key={item}>{item}<br/></text>)}
                            </th>
                            <th>
                                {sophieRest.map(item => <text key={item}>{item}<br/></text>)}
                            </th>
                        </tbody>
                    </table>
                </Accordion.Panel>
                <Accordion.Panel header="Favorite Sweet Treats" eventKey={2} >   
                <table className='center-extra'>
                        <thead>
                            <th className='th-extras'>Kalina</th>
                            <th className='th-extras'>Sophie</th>
                        </thead>
                        <tbody className='container'>
                            <th> 
                                {kalinaRest.map(item => <text key={item}>{item}<br/></text>)}
                            </th>
                            <th>
                                {sophieRest.map(item => <text key={item}>{item}<br/></text>)}
                            </th>
                        </tbody>
                    </table>
                </Accordion.Panel>
                <Accordion.Panel header="Favorite Hangout Spots" eventKey={3}>   
                <table className='center-extra'>
                        <thead>
                            <th className='th-extras'>Kalina</th>
                            <th className='th-extras'>Sophie</th>
                        </thead>
                        <tbody className='container'>
                            <th> 
                                {kalinaRest.map(item => <text key={item}>{item}<br/></text>)}
                            </th>
                            <th>
                                {sophieRest.map(item => <text key={item}>{item}<br/></text>)}
                            </th>
                        </tbody>
                    </table>
                </Accordion.Panel>
                <Accordion.Panel header="Day Trips!" eventKey={4}>   
                <table className='center-extra'>
                        <thead>
                            <th className='th-extras'>Kalina</th>
                            <th className='th-extras'>Sophie</th>
                        </thead>
                        <tbody className='container'>
                            <th> 
                                {kalinaRest.map(item => <text key={item}>{item}<br/></text>)}
                            </th>
                            <th>
                                {sophieRest.map(item => <text key={item}>{item}<br/></text>)}
                            </th>
                        </tbody>
                    </table>
                </Accordion.Panel>
            </Accordion>
        </div>
    )
}