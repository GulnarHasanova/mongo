import './App.css';
import { Formik,Form,Field } from 'formik';


function App() {
 <Formik    initialValues={
  {
   name:"",
   lastName:"",
   email:"",
   password:"",
   email:""
  }
  
 }
 onSubmit={(values,{resetForm})=>{
   console.log(values);
   resetForm({values:''})
  

}}>

   {
        ({values}) =>(
       <Form>
      <h4>Name</h4>
        <Field name ="name" className="field"/>
        <br/>
        <h4>LastName</h4>
       
        <Field name ="lastName"className="field"/>
        <br/>
       <h4>Email</h4>
      
        <Field name ="email"className="field"/>
        <br/>
        <h4>password</h4>
        <Field name ="password"className="field"/>
    
        <br/>
       <h4> Company</h4>
       
        <Field name ="company"className="field"
        />
        <br/>
       
        <button  type='Submit'>Add</button>
      
       </Form>
        )

      }
  

 </Formik>


}

export default App;
