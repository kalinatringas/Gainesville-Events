import './App.css'
import { useState } from 'react';
import { Modal, Button } from 'rsuite'
import 'rsuite/Modal/styles/index.css';

export default function Kalina(){

    const [open, setOpen] = useState(false);
    const [modalId, setModalId] = useState(null);

    const handleOpen = (id) => {
        setModalId(id); 
        setOpen(true);
    };    
    
    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            setModalId(null);
        }, 300);
    };

    const modalContent ={
        13: [
            {label: "Grove Street Farmers Market @4-7pm", link: "https://maps.app.goo.gl/meGeemcuoYQxu3P97", note: "Me and my roomies fave"},
            {label: "Dispicable Me 4 Movie on Flavet Field @6:00pm", link:"https://calendar.ufl.edu/event/43248-great-gator-welcome-back-movies-on-the-lawn", note:"MINIONS"}
            ],
        14: [
            {label: "Great Gator Welcome Reitz Lawn @ 11a-2p", link: "https://studentlife.ufl.edu/great-gator-welcome/"},
            
            {label: "Florida Basketball @ 9:00pm", link: "https://floridagators.com/sports/mens-basketball/schedule/2024-25"}
            ], 
        15:[
            {label:"Farmers Market at Celebration Pointe @4-7pm", link:"https://www.google.com/maps?q=Farmers+Market+at+Celebration+Pointe+3528+SW+45th+St,+Gainesville,+FL+32607"}
        ],
        17:[
            {label:"Gatornights @7pm "}
        ],
        18:[
            {label:"Saturday Farmers Market @8:30-noon", link:"https://441market.com/index.html#/"},
            {label: "Florida Basketball @ 7:00pm", link:"https://floridagators.com/sports/mens-basketball/schedule/2024-25"}
        ],
        19:[
            {label: " ! Florida Vintage Market ", link: "https://www.instagram.com/thefloridavintagemarket?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", note: "One of my favorites!! Highlyyyy reccomend"},
            {label: "Florida Basketball @ 1:00pm", link: "https://floridagators.com/sports/mens-basketball/schedule/2024-25"}
        ],
        20:[
            {label: "Grove Street Farmers Market @4-7pm", link:"https://maps.app.goo.gl/meGeemcuoYQxu3P97"}
        ],
        21:[
            {label: "Cirque Kalabanté @7:30 $12", link: "https://performingarts.ufl.edu/events/cirque-kalabante/", note: "I have not personally seen this show but I really wanna go see it"}
        ],
        22:[
            {label:"Gator Market at Reitz Lawn @10a-2p", link: "https://union.ufl.edu/gatormarket/", note:"if you want to sell stuff, the rates for students are really good"},
            {label: "Farmers Market at Celebration Pointe @4-7pm", link:"https://www.google.com/maps?q=Farmers+Market+at+Celebration+Pointe+3528+SW+45th+St,+Gainesville,+FL+32607"},
            {label: "Open Mic at How Bazar @8-10p"}
        ],
        25:[
            {label: "Hoggetowne Medieval Faire", link:"https://maps.google.com/?q=Hoggetowne+Medieval+Faire%3A+Hoggetowne+Goes+Downtown+200+SE+Depot+Ave.%2C+Gainesville%2C+FL+32601", note: "HIGHTLY RECCOMENT BEST EVENT OF THE YEAR YAAS"}
        ]
    };


    return<>
    <h2>January</h2>
    <div className='table-container'>
        <table>
            <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
        <tr>
            <td onClick={() => handleOpen(12)} id='12'>12</td>
            <td onClick={() => handleOpen(13)} id='13'>13</td>
            <td onClick={() => handleOpen(14)} id='14'>14</td>
            <td onClick={() => handleOpen(15)} id='15'>15</td>
            <td onClick={() => handleOpen(16)} id='16'>16</td>
            <td onClick={() => handleOpen(17)} id='17'>17</td>
            <td onClick={() => handleOpen(18)} id='18'>18</td>
        </tr>
        <tr>
            <td onClick={() => handleOpen(19)} id ='19'>19</td>
            <td onClick={() => handleOpen(20)} id ='20'>20</td>
            <td onClick={() => handleOpen(21)} id ='21'>21</td>
            <td onClick={() => handleOpen(22)} id ='22'>22</td>
            <td onClick={() => handleOpen(23)} id ='23'>23</td>
            <td onClick={() => handleOpen(24)} id ='24'>24</td>
            <td onClick={() => handleOpen(25)} id ='25'>25</td>
        </tr>
        </table>
        </div>
        <article>
            I like fun house parties, markets, and free stuff on campus!
        </article>

        <h3>Kalinas favorite places to be on campus:</h3>
        <ul className='about-me'>
            <li>Marston Basement (for locking in... duh)</li>
            <li>Plaza of the Americas</li>
            <li>Reitz Union Lawn (free stuff city) ♪(^∇^*)</li>
        </ul>
        <h3>Favorite Places off Campus</h3>
        <ul className='about-me'>
            <li>Karma Cream :-]</li>
            <li>My friends apartments... sneaky sneaky (●'◡'●)</li>
            <li>CYM coffee</li>
        </ul>
        <Modal
        open={open}
        onClose={handleClose} >
        <Modal.Header>
         <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {modalContent[modalId] ? (
                        <ul>
                            {modalContent[modalId].map((item, index, note) => (
                             
                                <text key={index}>
                                    <li>
                                    <a href = {item.link} target='_blank' rel="noopener noreferrer">
                                    {item.label}</a>
                                    </li>
                                    <dd>{item.note}</dd>
                                    </text>                          
                            ))}
                        </ul>
                    ) : (
                        <p>No details available for this date.</p>
                    )}        
            </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleClose} appearance="primary">
            Ok
        </Button>
        </Modal.Footer>
        </Modal>
    </>
}