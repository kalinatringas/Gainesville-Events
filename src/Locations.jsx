import { Accordion } from 'rsuite';
import 'rsuite/Accordion/styles/index.css';
import { kalinaRest } from './extraData';

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
                        <tbody>
                             {kalinaRest.map(item => <th key={item}>{item}</th>)}
                        </tbody>
                    </table>
                </Accordion.Panel>
                <Accordion.Panel header="Favorite Sweet Treats" >   
                    <text>meow bruh</text>
                </Accordion.Panel>
                <Accordion.Panel header="Favorite Hangout Spots" >   
                    <text>meow bruh</text>
                </Accordion.Panel>
                <Accordion.Panel header="Day Trips!" >   
                    <text>meow bruh</text>
                </Accordion.Panel>
            </Accordion>
            

        </div>
    )
}