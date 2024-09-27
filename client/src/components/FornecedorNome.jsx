import React, {useEffect, useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";


const FornecedorNome = () => { 
  
  const [fornecedor, setFornecedor] = useState([]);
  const [buscanome, setBuscaNome] = React.useState("")

  const buscarap = buscanome.toLowerCase() 
  
  var table = fornecedor.filter(item => item.nome.toLowerCase().includes(buscarap))
 
  const navigate = useNavigate();

  
  useEffect(() => {

    fetch("http://localhost:3000/fornecedor").then((res) => {

    return res.json()

    }).then((resp) => {

      setFornecedor(resp)

    }).catch((err) => {
      console.log(err.message)
    }) 
   
  }, []) 



  const LoadEdit = (id) => {
    navigate("/fornecedor/editar/" + id); 
  }
  
  const handleDelete = (id) => {   

        fetch("http://localhost:3000/fornecedor/" + id, {

            method: "DELETE"    

        }).then((res) => {           
          window.location.reload();                       
           
        }).catch((err) => {
          toast.error('Erro ! :' +err.message)
        }) 
  
}

const logout = () => {
  localStorage.clear()
  console.clear();
  
}

    
  return (
    <div className="container-fluid">
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
                <Link to='/'
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
           <div className="p-2 d-flex justify-content-center shadow text-white" style={{backgroundColor:'blue', fontFamily:'arial', width:'140%'}}>
               <h4><strong>Sistema de Gestão Comercial</strong></h4>
           </div>
           <Outlet />
           <div className="px-5 mt-5">                  
                <div>            
                      <label htmlFor="Nome" className="Nome" style={{fontFamily: 'arial', fontSize:'22px'}}>Busca por nome:</label><br />
                      <input style={{fontFamily: 'arial', fontSize:'22px'}} type="search" autoFocus='true' className="consultanome" value={buscanome} onChange={(e) => setBuscaNome(e.target.value)}/>                  
                      <Link to="/fornecedores" className="btn" style={{color: 'white', backgroundColor:'orange', margin: '0 20px', fontSize:'18px', fontFamily:'arial', width:'140px'}}>Voltar:</Link>  
                      <h4 className="h4" ><strong className="strong" style={{color:'red', margin:'0 1200px', fontSize:'25px'}}>Fornecedores:</strong></h4><br />                         
                 
                    <div className="mt-3">
                          <table className="table" id="table" style={{margin:'0 -30px', fontFamily:'arial', fontSize:'20px', width:2600}}>
                              <thead>
                                  <tr>
                                  <th className="th" scope="col">Id:</th>
                                  <th className="th" scope="col">Nome:</th>
                                  <th className="th" scope="col">Endereço:</th>
                                  <th className="th" scope="col">Numero:</th> 
                                  <th className="th" scope="col">Complemento:</th>  
                                  <th className="th" scope="col">Cep:</th> 
                                  <th className="th" scope="col">Cidade:</th>                                                                                                          
                                  <th className="th" scope="col">Email:</th>
                                  <th className="th" scope="col">Telefone:</th>
                                  <th className="th" scope="col">Categoria:</th>
                                  <th className="th" scope="col">Data de Cadastro:</th>                                
                                  <th className="th" scope="col">Ação:</th>                           
                                  </tr> 
                              </thead>
                              <tbody>                                
                                { table &&
                                   table.map(item => (
                                    <tr key={item.id}>
                                           <td className="td">{item.id}</td>
                                           <td className="td">{item.nome}</td>
                                           <td className="td">{item.endereco}</td> 
                                           <td className="td">{item.numero}</td> 
                                           <td className="td">{item.comp}</td>                                                                                                         
                                           <td className="td">{item.cep}</td> 
                                           <td className="td">{item.cidade}</td>
                                           <td className="td">{item.email}</td> 
                                           <td className="td">{item.fone}</td>
                                           <td className="td">{item.catforn}</td>
                                           <td className="td">{item.datacad}</td>
                                           <td className="td" >   
                                           <button className="editar" onClick={() => {LoadEdit(item.id)}} style={{color:'white', backgroundColor:'blue', border:'none', borderRadius:'5px', fontSize:'20px'}}>Editar:</button>                                 
                                           <button className="excluir" onClick={() => {handleDelete(item.id)}} style={{color:'white', backgroundColor:'red', border:'none', borderRadius:'5px', fontSize:'20px'}}>Excluir:</button>                                                                                                                                                                                                                                                                                                                                                                                            
                                           </td>                                

                                    </tr>
                                  ))
                                                                                                     
                                }   
                                                                       
                              </tbody>
                              <ToastContainer/>
                
                          </table> 
           
                    </div>
                  </div><br />
                                                
                 
                </div> 
          
       </div> 
                 
    </div>
 </div>
  )
}

export default FornecedorNome