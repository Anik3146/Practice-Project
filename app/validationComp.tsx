import { useEffect, useState } from "react";
import { Col, Form, FormText, InputGroup, Row } from "react-bootstrap";


export default function ValidationComp(){
    
    const [str, setStr] = useState('');
    const [validStatus, setValidStatus] = useState(false);
    const [validStatus2, setValidStatus2] = useState(false);
    

    const handleChange = (e : any) => {
        e.preventDefault();
        if(e.target.value == '')
            setValidStatus(false);
        else 
            setValidStatus(true);
    }

    const handleChange2 = (e : any) => {
        e.preventDefault();
        if(e.target.value == '')
            setValidStatus2(false);
        else 
            setValidStatus2(true);
    }
    
    
   /* useEffect(()=>{
        if(str == '')
            setIsInvalid(true);
        else
            setIsInvalid(false);
    },[str])
    */
    return(
        <>
    <div className="container mt-3">
        <div className="container mt-3 mb-2">
      
        <Form className="mb-2" noValidate validated={validStatus}>
        <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={handleChange} type="text" placeholder="City" required isInvalid={!validStatus}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        </Form>
    <Row>
        <Col xs={12} md={6}>
        <Form className="mt-2" noValidate validated={validStatus2}>
        <InputGroup hasValidation >
          <Form.Control
            type="text"
            onChange={handleChange2}
            required
            isInvalid={!validStatus2}
          />
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup>
    </Form>  
        </Col>
    </Row>
    
        </div>

     

     </div>
        </>
    )
}