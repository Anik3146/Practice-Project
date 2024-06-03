import { useState } from "react";
import { Button, Card, Collapse, Fade, Stack } from "react-bootstrap";


export default function TransitionComp(){

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return(
        <div className="container mt-3">
        <h2>Transition Examples</h2>
        <Button
        onClick={() => {
            setOpen(!open);
            setTimeout(()=>{
                setOpen(false);
            },3000)
        }}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mb-1 mr-1"
      >
        Collapse width
        </Button>
        <div style={{minHeight : '150px'}}>
        <Fade in={open}>
        <div id="example-collapse-text">
            <Card body style={{ 
            width: '400px', 
            backgroundColor: '#333', // Dark background color
            color: '#fff', // Light text color
            border: '1px solid #666' // Dark border color
        }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Card>
         </div>
        
        </Fade>
       
        </div>
        
       
        </div>
    )

}