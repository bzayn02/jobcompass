import React ,{useState} from 'react'
import { FormStyled, ModalStyled,PageStyled } from './ModalStyled'
import { AiOutlineClose } from 'react-icons/ai';
export default function Modal({show,setShow}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const closeModal=()=>{  
    setShow(false);
 
  }
  return (
    <ModalStyled className={show ? 'open':""} >

      
        <PageStyled>
        <AiOutlineClose style={{position:"absolute", right:"0"}} onClick={closeModal} color='red' size="2em"/>
        <FormStyled>
        <h1>Let's add a new Job</h1>
  <div class="form-group">
  <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Company Name"/>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter HR Person"/>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Position Applied "/>
    <input type="name" class="form-control" id="exampleInputPassword1" placeholder="Position Applied"/>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Applied Date"/>
    <input type="file" onChange={handleFileInputChange} />
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Job Description' rows="3"></textarea>
  </div>
  </FormStyled>
    <button className='btn btn-danger'>Add Job</button>


        </PageStyled>
    </ModalStyled>
  )
}
