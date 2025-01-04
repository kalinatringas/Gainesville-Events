import './App.css'
import { useState } from 'react';
import { Modal, Button } from 'rsuite'
import 'rsuite/Modal/styles/index.css';

export default function Sophie(){

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
    
    }


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
            You can check out all my favorite events by hoovering over and clicking!
        </article>
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