import { Accordion } from 'rsuite';
import 'rsuite/Accordion/styles/index.css';
import { kalinaRest, sophieRest } from './extraData';

export default function Locations(){

    return(
        <div>
            sorry! currenty under construction. 
            <Accordion bordered > 
                <Accordion.Panel header="Favorite Restaraunts" defaultExpanded>   
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
                <Accordion.Panel header="Favorite Sweet Treats" >   
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
                <Accordion.Panel header="Favorite Hangout Spots" >   
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
                <Accordion.Panel header="Day Trips!" >   
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