import React, {useState} from 'react';
import { Link, Outlet} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const CadResultado = () => {

  const [entradas, entradaschange] = useState("") 
  const [saidas, saidaschange] = useState("")
  const [mes, meschange] = useState("")


  const isValidate = () => {
    let isproceed = true
    let errormessage = "Campos não podem estar vazio  !"
   
    if(entradas === null || entradas === ''){
      isproceed = false
      //errormessage += 'Nome Completo:' 
    }
    if(saidas === null || saidas === ''){
      isproceed = false
     // errormessage += 'Email:' 
    }
    if(mes === null || mes === ''){
        isproceed = false
       // errormessage += 'Email:' 
    }      
   
    if(!isproceed){
      toast.warning(errormessage)
    }   
    
    return isproceed
   }

 function calcular(){
  
  const resultado = (entradas - saidas).toFixed(2);  
  console.log(resultado) 
  document.getElementById('resultado').value = resultado;
 
 }

 const cadastrar = (e) => { 

     e.preventDefault(); 

     const data = new Date();
     const data_cad = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

     var resultado = document.getElementById('resultado').value; 

     const cadobj = {resultado, entradas, saidas, data_cad, mes}

        if(isValidate()){

            fetch("http://localhost:3000/resultados", {
              method: "POST",
              headers: {'content-type':'application/json'},
              body: JSON.stringify(cadobj)
            }).then((res) => {        
              toast.success('Cadastrado com Sucesso !')        
              entradaschange('')
              saidaschange('')
                               
      
            }).catch((err) => {
              toast.error('Erro ! :' +err.message)
            })                 
      }           
     
}   


const logout = () => {
  localStorage.clear()
  console.clear();
  
}

     
return (
    <div className="container-fluid" style={{fontFamily:'arial'}}>
       <div className="row flex-nowrap">
           <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary" style={{fontFamily:'arial', fontSize:'19px'}}>
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                 <Link
                 to=""
                 className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
                 >
                  <span className='fs-5 fw-bolder d-none d-sm-inline'>
                  Opções:
                </span>
                </Link>
                <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="w-100">
                  <Link
                    to="/home"
                    className="nav-link text-white px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2 ms-2"></i>
                    <span className="ms-2 d-none d-sm-inline">Painel:</span>
                  </Link>
                </li>
                <li className="w-100">
                  <Link
                    to="/usuarios"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-people ms-2"></i>
                    <span className="ms-2 d-none d-sm-inline">
                      Usuarios:
                    </span>
                  </Link>
                </li>                
                <li className="w-100">
                <Link
                  to="/entradas"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-cash-coin ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                   Vendas:
                  </span>
                </Link>
              </li> 
              <li className="w-100">
                <Link
                  to="/compras"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-cash ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                   Compras:
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/despesas"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-coin ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                   Despesas:
                  </span>
                </Link>
              </li> 
              <li className="w-100">
                <Link
                  to="/produtos"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-box-fill ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                   Produtos:
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/fornecedores"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-truck ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                 Fornecedores:
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/clientes"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-person-square ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Clientes:
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/resultado"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-bank ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                     Resultado:
                  </span>
                </Link>
              </li>     
                           
                <li className="w-100" onClick={logout}>
                  <Link to="/"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-power ms-2"></i>
                    <span className="ms-2 d-none d-sm-inline">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col p-0 m-0">
              <div className="p-2 d-flex justify-content-center shadow text-white" style={{backgroundColor:'blue'}}>
                  <h4><strong>Sistema de Gestão Comercial:</strong></h4>
              </div>
              <Outlet /><br/>           
           <div className='d-flex justify-content-center align-items-center'>       
               <div className='bg-white p-4 rounded border' style={{width:'45%', marginTop: '200px'}}>
                 <h4><center>Cadastrar novo Resultado:</center></h4><br /> 
                   <form action='' onSubmit={cadastrar}>                     
                     <div className='mb-3'>      
                     <label htmlFor='entradas' style={{fontSize:'20px', margin:'0 115px'}}>Total de Entradas:</label>
                     <input type='decimal' placeholder='Entre com o total:' value={entradas} onChange={e => entradaschange(e.target.value)} style={{fontSize:'20px', width:200, margin:'0 115px'}} className='form-control rounded-0' name='entradas'/>                   
                     </div>
                     <div className='mb-3'>      
                      <label htmlFor='saidas' style={{fontSize:'20px', margin:'0 115px'}}>Total de Saídas:</label>
                      <label htmlFor='resultado' style={{fontSize:'20px', margin:'0 42px'}}>Resultado:</label>
                      <input type='decimal' placeholder='Entre com o total:' value={saidas} onChange={e => saidaschange(e.target.value)} style={{fontSize:'20px', width:200, margin:'0 115px'}} className='form-control rounded-0' name='saidas'/>
                      <input type='decimal' style={{fontSize:'20px', width:200, margin:'0 415px', marginTop:'-42px'}} className='form-control rounded-0' name='resultado' id='resultado'/>                   
                     </div>
                     <div className='mb-3'>           
                      <label htmlFor='mes' style={{fontSize:'20px', margin:'0 115px'}}>Mês:</label>
                       <select style={{fontSize:'20px', width:150, margin:'0 115px'}} name='mes' id='mes' className='form-select' value={mes} onChange={e => meschange(e.target.value)}>
                       <option value=""></option>    
                       <option value="Janeiro">Janeiro</option>
                       <option value="Fevereiro">Fevereiro</option>
                       <option value="Março">Março</option> 
                       <option value="Abril">Abril</option>
                       <option value="Maio">Maio</option>
                       <option value="Junho">Junho</option>
                       <option value="Julho">Julho</option>
                       <option value="Agosto">Agosto</option>
                       <option value="Setembro">Setembro</option>
                       <option value="Outubro">Outubro</option>
                       <option value="Novembro">Novembro</option>
                       <option value="Dezembro">Dezembro</option>                   
                       </select>
                      </div>                              
                     <div className='mb-3'>
                        <button type='submit' className='btn btn-success border rounded-0' style={{width:150, margin:'0 115px', fontSize:'16px'}}>Cadastrar:</button>
                        <Link to='/resultado'  className="btn border rounded-0" style={{color: 'white', backgroundColor:'orange', margin: '0 66px', fontSize:'16px', width:150}}>Voltar:</Link>                                             
                     </div>
                   <ToastContainer />                
                 </form>
              <button className='btn btn-primary border rounded-0' onClick={calcular} style={{width:150, margin:'0 290px', marginTop:'-94px', fontSize:'16px'}}>Total:</button>
          </div>  
      </div>                            
</div>           
</div>
</div>

  )
}

export default CadResultado