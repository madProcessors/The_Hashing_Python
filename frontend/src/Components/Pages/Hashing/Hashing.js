import React, { useState } from 'react'
import {
    Container, Button, Form, FormGroup,
    Label, Input, Table, Card, CardBody, CardHeader
} from "reactstrap";
import './hashing.css';
import TheLoader from '../../Layout/TheLoader/TheLoader';
import getCookie from '../../../Logic/Cookie';

const Hashing = () => {
    const [text, setText] = useState('');
    const [hash, setHash] = useState('');
    const [showHash, setShowHash] = useState(false);
    const [loader, setLoader] = useState(false);
    const [tableRows, setTableRows] = useState([]);

    /*Asks server for hashing process*/
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate
        const inputText = text.trim();
        if (inputText === '') {
            alert('Enter something :(');
            return;
        }

        setLoader(true);

        const data = {
            text
        }

        const token = '12345';
        let responseData;
        // console.log(`data a enviar:`, data);


        fetch('http://localhost:8000/api/hash/create', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'X-CSRFToken': getCookie('csrftoken'),
                'Token': token,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                setLoader(false);
                console.log(`data:`, data);
                setHash(data.hash);
                setShowHash(true);
            })
            .catch(error => {
                console.log(`error: ${error}`);
                setLoader(false);
                alert('Couldn\'t build your hash :(. Please, try again later');
            });
    }

    return (
        <Container>
            <TheLoader show={loader} />
            <Form className="hashForm" onSubmit={handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 col-xs-12">
                    <Input
                        type="text"
                        name="preHash"
                        id="preHash"
                        placeholder="Type something..."
                        onChange={(e) => {
                            setText(e.target.value);
                            setShowHash(false);
                        }}
                        maxLength={30}
                        autoComplete="off"
                    />
                </FormGroup>
                <Button>HASH IT!</Button>
            </Form>
            <div className='hash-card-container' style={{ display: (showHash ? 'block' : 'none')}}>
                <Card className='hash-card'>
                    <CardHeader className='hash-card-header'>This is your hash...</CardHeader>
                    <CardBody className='hash-card-body'>{hash}</CardBody>
                </Card>
            </div>
            
            <div className='infoLabel-container'>
                {tableRows.length === 0 && <h5>You don't have any hashes yet</h5> }
            </div>
            
            <div className='hashTable-container'>
                <Table className='hashTable'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hash</th>
                            <th>Creation date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows.map((row, i) => {
                            return (
                                <tr>
                                    <td>
                                        {i}
                                    </td>
                                    <td>
                                        {row.hash}
                                    </td>
                                    <td>
                                        {row.creation_date}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}
export default Hashing;