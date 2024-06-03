import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row, Stack } from "react-bootstrap";

export default function FormComp(){

    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        textArea : ''
    });

    const [checkBoxStatus, setCheckBoxStatus] = useState({
        checkbox : false,
        switch : false,
        radio : false
    });

    const [clicked, isClicked] = useState(false);
    const [failedStatus, setFailedStatus] = useState(false);
    const [age, setAge] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');


    const handleInputChange = (event : any)=>{
        const {name, value} = event.target;
        setFormData(
           {
             ...formData,
             [name] : value
           }
        );
    }

    
    const handleSubmit = (event : any) => {
        event.preventDefault();
        if(formData.firstName == '' || formData.lastName=='' || formData.email=='')
          setFailedStatus(true);

        isClicked(true);

        setTimeout(()=>{
          isClicked(false);
        },5000)
        
        setTimeout(()=>{
          setFailedStatus(false);
        },5000)

        console.log(`First name is : ${formData.firstName}\nLast name is : ${formData.lastName}`);
        console.log(`The email is : ${formData.email}\nthe texts are : ${formData.textArea}\nthe age is : ${age}`);
        console.log(`Switch status : ${checkBoxStatus.switch}`);
        console.log(`CheckBoxStatus : ${checkBoxStatus.checkbox}`);
        console.log(`Radio Status : ${checkBoxStatus.radio}`);
        console.log(`The selected option is : ${selectedValue}`);
        //console.log(`the switch status is : ${isChecked}\n`);
    }

    const handleRangeChange = (event : any) => {
        setAge(event?.target.value);
    }

    const onSelectionChange = (e : any)=>{
        setSelectedValue(e.target.value);
    }

    const handleCheckBox = (type : any, boolStatus : any ) => {
          setCheckBoxStatus(
            {
               ...checkBoxStatus,
               [type] : boolStatus
            }
          )
    }

    return (
        <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2>Form Submission</h2>
            <Form onSubmit={handleSubmit}>
              <Stack direction="vertical" gap={3}>
                <Row>
                  <Col> 
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Enter First Name :</Form.Label>
                  <Form.Control 
                  name="firstName"
                  as="textarea" rows={1}
                  onChange={handleInputChange} 
                 />
              </Form.Group>
                  </Col>
                  <Col> 
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Enter Last Name :</Form.Label>
                  <Form.Control 
                  name="lastName"
                  as="textarea" rows={1}
                  onChange={handleInputChange} 
                 />
              </Form.Group>
                  </Col>
                </Row>
                {clicked && (formData.firstName!='' &&formData.lastName!='' &&formData.email!='') 
                && <Alert variant="success" onClose={() => isClicked(false)} dismissible>
                    Form submitted successfully!
                </Alert>
            }
            {
              failedStatus && 
              <Alert variant="danger" onClose={() => setFailedStatus(false)} dismissible>
                    Failed to sumbit the form!
                </Alert>
            }
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address :</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  placeholder="name@example.com" 
                  onChange={handleInputChange}
                />
              <Form.Text id="emailHelpBlock" muted>
                Email should contain valid addresses containing @ character without any spaces.
              </Form.Text>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write something :</Form.Label>
                <Form.Control 
                name="textArea"
                as="textarea" rows={3}
                onChange={handleInputChange}
                
                 />
              </Form.Group>

              <Form.Label>Age : </Form.Label>
              <Form.Range
               value={age}
               onChange={handleRangeChange}
               style={{ width: '20%' }} 
               />
               value : {age}  
               
              {
                  <Row>
                  {
                      ['switch', 'checkbox', 'radio'].map((type, index) => (
                          <Col key={index}>
                              <Form.Check 
                                  type={type as 'switch' | 'checkbox' | 'radio'}
                                  id={`custom-${type}`}
                                  label={`Check this ${type}`}
                                  checked= {checkBoxStatus[type as keyof typeof checkBoxStatus]} //keyof typeof means key type of
                                  onChange={(e)=>handleCheckBox(type, e.target.checked)}
                              />
                          </Col>
                      ))
                  }
              </Row>
              }
              <Form.Select aria-label="Default select example" onChange={onSelectionChange}>
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              </Form.Select>
              <div>Selected value: {selectedValue}</div>
              <Button variant="secondary" type="submit" style={{ width: '100px' }}>Submit</Button>
              
              </Stack>
            </Form>
            <br />
            

          </div>
        </div>
      </div>
      

    );
}