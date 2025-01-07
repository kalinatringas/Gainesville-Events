import './App.css'
import { useState } from 'react';
import { Modal, Button , Badge} from 'rsuite'
import 'rsuite/Modal/styles/index.css';
import Filter from './Filter';
import 'rsuite/Badge/styles/index.css';
import {kalinaEvents} from './eventData.js'

export default function Kalina(){

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const [open, setOpen] = useState(false);
    const [modalId, setModalId] = useState(null);
    const [filters, setFilters] = useState([]);

    const handleOpen = (id) => {
        setModalId(id); 
        setOpen(true);
    };    

    const handleFilterChange = (selectedFilters ) =>{
        setFilters(selectedFilters)
    }


    
    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            setModalId(null);
        }, 300);
    };

    const modalContent = kalinaEvents

    const filteredContent = modalId && modalContent[modalId]
    ? modalContent[modalId].filter(item =>
        filters.length === 0 || filters.includes('all') || filters.includes(item.tag)
      )
    : [];

    const countEvents = (index) => { //add filtering feature
        return kalinaEvents[index] ? kalinaEvents[index].filter(item =>
            filters.length === 0 || filters.includes('all') || filters.includes(item.tag)
          ).length : 0 //goes is the index greater than one? cool! here is the number
    };




    return(<div>
    <h2>January</h2>
    <div className='table-container'>
        <table>
            <tr>
            {daysOfWeek.map(day => <th key={day}>{day}</th>)}
            </tr>
        <tr>
        {[...Array(18 - 12 + 1)].map((_, i) => ( <td key={i+12} onClick={() => handleOpen(12 + i)}>
            <div className='badge-container'>
                {countEvents(i+12) > 0?(
                <Badge key={i + 12} content={countEvents(i+12)}>
                    {12 + i}
                </Badge>):(
                    12 + i )
                }
            </div>
        </td>))}  
        </tr>
        <tr>
            {[...Array(25-19+1)].map((_, i)=><td onClick={() => handleOpen(12+i)}>
                <div className='badge-container'>
                {countEvents(i+19)>0?(
                <Badge key = {i+19} content={countEvents(i+19)}>
                 {i+19}
                </Badge>):
                (19+i)}
            </div>
        </td>)}

        </tr>
        </table>
        </div>      
            <Filter onFilterChange={handleFilterChange}/> 
             <div className='container'>
            <article>
                I like house shows, markets, and free stuff on campus!
        
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
        </div>
        <Modal
        open={open}
        onClose={handleClose} >
        <Modal.Header>
         <Modal.Title>Events on this Date!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {filteredContent.length > 0 ?  (
                        <ul>
                             {filteredContent.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} target='_blank' rel="noopener noreferrer">{item.label}</a>
                                    {item.note && <p>{item.note}</p>}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nothing going on here!</p>
                    )}       
            </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleClose} appearance="primary">
            Ok
        </Button>
        </Modal.Footer>
        </Modal>
    </div>
    )
}