import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ClassComp(){
  
    class Person {

        public firstName : string;
        public lastName : string;
        public email : string;
        public age : number;
     
        constructor(firstName : string, lastName : string, email :string, age : number)
        {
           this.firstName = firstName;
           this.lastName = lastName;
           this.email = email;
           this.age = age;
        }
     }

     let obj = new Person("Nazmul Hossain", "Anik", "rtc.anik@gmail.com", 26);

    const [record , setRecord] = useState({
       usefirstName : obj.firstName,
       uselastName : obj.lastName,
       useemail : obj.email,
       useage : obj.age
    })


    const handleSubmit = (e:any)=>{
        e.preventDefault(); //must using preventDefault
        obj.firstName = record.usefirstName;
        obj.lastName = record.uselastName;
        obj.email = record.useemail;
        obj.age = record.useage;
        
        console.log(obj);
    }
    const [progress, setProgress] = useState(100);

    useEffect(()=>{
      let newProgress = 100;

      if(record.usefirstName === '')
        newProgress -= 25;
      if(record.uselastName === '')
        newProgress -= 25;
      if(record.useemail === '')
        newProgress -= 25;

      setProgress(newProgress);
    }, [record]);
  
    const onInputChange = (e : any) => {
        const {name, value} = e.target;
        if(name == "useage")
        {
           setRecord({
            ...record,
            [name] : Math.max(0, parseInt(value))
           })
        }
        else
        setRecord({
          ...record,
          [name] : value
        })
    }
     
  return(
  <Container>
  <Form onSubmit={handleSubmit} className="mt-3">
    <Row>
      <Col>
        <Form.Group controlId="formFirstName" className="form-floating">
          <Form.Control
            type="text"
            name = "usefirstName"
            value={record.usefirstName}
            onChange={onInputChange}
            required
          />
          <Form.Label>First Name</Form.Label>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="formLastName" className="form-floating">
          <Form.Control
            type="text"
            name = "uselastName"
            value={record.uselastName}
            onChange={onInputChange}
            required
          />
          <Form.Label>Last Name</Form.Label>
        </Form.Group>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <Form.Group controlId="formEmail" className="form-floating">
          <Form.Control
            type="text"
            name = "useemail"
            value={record.useemail}
            onChange={onInputChange}
            required
          />
          <Form.Label>Email</Form.Label>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="formAge" className="form-floating">
          <Form.Control
            type="number"
            name = "useage"
            value={record.useage}
            onChange={onInputChange}
          />
          <Form.Label>Age</Form.Label>
        </Form.Group>
      </Col>
    </Row>
    <div className="container" style={{ width: "50%" }}>
    <ProgressBar className="mx-4 mt-4 " animated now={progress} label={`${progress}%`} />;
    </div>
    
    <Button variant="secondary" type="submit" className="mt-2">
      Submit
    </Button>
  </Form>
</Container>

    )
}
