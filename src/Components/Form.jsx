function Form({forms}){
 
  
    return(
    
      
        <>
            <div className="signup modal">
            
            <form name = "form">
            <div className="close-modal"><i class="fa-solid fa-xmark" onClick={forms}></i></div>
            <div class="mb-3">
    <label for="exampleInputEmail1" class="title">Get in Touch</label>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name = "email"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name = "address"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone no</label>
    <input type="phone" class="form-control" id="exampleInputPassword1" phone ="phone"/>
  </div>
  <div class="mb-3 form-check">
    
    <label class="form-check-label" for="exampleCheck1">Contact us</label>
  </div>
  <button  class="btn btn-primary" >Submit</button>
</form>
            </div>
        </>
    )

}

export default Form;