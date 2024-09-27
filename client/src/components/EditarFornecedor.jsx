import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";


const EditarFornecedor = () => {

    const { forcod } = useParams()

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/fornecedor/" + forcod).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            nomechange(resp.nome);
            enderecochange(resp.endereco);
            numerochange(resp.numero);
            compchange(resp.comp)
            cepchange(resp.cep);
            cidadechange(resp.cidade);
            emailchange(resp.email);
            fonechange(resp.fone);           
            //categoriachange(resp.categoria)       

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("") //=> Nome de usuario obrigatório campo (id)
    const [nome, nomechange] = useState("") //=> Representa o registro, qual é o usuario.
    const [endereco, enderecochange] = useState("")
    const [categoria, categoriachange] = useState([])   
    const [numero, numerochange] = useState("")
    const [comp, compchange] = useState("")
    const [cep, cepchange] = useState("")
    const [cidade, cidadechange] = useState("")
    const [email, emailchange] = useState("")
    const [fone, fonechange] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/catfornecedor").then((res) => {
    
          return res.json()
    
        }).then((resp) => {
    
          categoriachange(resp)
    
        }).catch((err) => {
          console.log(err.message)
        })
      }, [])

    const [values, setValues] = useState({
        id: ''
      })

    const isValidate = () => {
        let isproceed = true
        let errormessage = "Campos não podem estar vazio  !"
        if (id === null || id === '') {
            isproceed = false
            //errormessage += 'Nome:' 
        }
        if (nome === null || nome === '') {
            isproceed = false
            //errormessage += 'Nome:' 
        }
        if (endereco === null || endereco === '') {
            isproceed = false
            //errormessage += 'Nome Completo:' 
        }      
      
        if (cep === null || cep === '') {
            isproceed = false
            // errormessage += 'Salario:' 
        }
        if (cidade === null || cidade === '') {
            isproceed = false
            // errormessage += 'Salario:' 
        }
        if (email === null || email === '') {
            isproceed = false
            // errormessage += 'Salario:' 
        }
        if (fone === null || fone === '') {
            isproceed = false
            // errormessage += 'Salario:' 
        }
        if (!isproceed) {
            toast.warning(errormessage)
        }

        return isproceed
    }


    const editar = (e) => {

        e.preventDefault();

        if (isValidate()) {          
      
              const catforn = document.getElementById('categoria').value;              
              const data = new Date();
              const datacad = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
              const edtobj = { nome, endereco, comp, cep, cidade, email, fone, datacad, catforn, numero }
      
              fetch("http://localhost:3000/fornecedor/" + forcod, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(edtobj)
              }).then((res) => {
                toast.success('Atualizado com sucesso !')
                nomechange('');
                enderecochange('');
                numerochange('');
                compchange('');
                cepchange('');
                cidadechange('');
                emailchange('');
                fonechange('');
      
              }).catch((err) => {
                toast.error('Erro ! :' + err.message)
              })    
       
      
    }

    }

    const logout = () => {
        localStorage.clear()
        console.clear();
    }


    return (
        <div className="container-fluid loginpage" style={{ fontFamily: 'arial' }}>
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary" style={{ fontFamily: 'arial', fontSize: '19px' }}>
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
                    <div className="p-2 d-flex justify-content-center shadow text-white" style={{ backgroundColor: 'blue' }}>
                        <h4><strong>Sistema de Gestão Comercial:</strong></h4>
                    </div>
                    <Outlet />

                    <br />
                    <div className='d-flex justify-content-center align-items-center vh-100'>
                        <div className='bg-white p-4 rounded border'>
                            <h4><center>Editar Fornecedor:</center></h4><br />
                            <form action='' onSubmit={editar}>
                                <div className='mb-3'>
                                    <label htmlFor='nome' style={{ fontSize: '20px', margin: '0 115px' }}>Nome:</label>
                                    <input type='text' placeholder='Entre com o nome:' value={nome} onChange={e => nomechange(e.target.value)} style={{ fontSize: '20px', width: 400, margin: '0 115px' }} className='form-control rounded-0' name='nome' />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='endereco' style={{ fontSize: '20px', margin: '0 115px' }}>Endereço:</label>
                                    <input type="text" value={endereco} onChange={e => enderecochange(e.target.value)} style={{ fontSize: '20px', width: 640, margin: '0 115px' }} placeholder='Entre com o endereço:' className='form-control rounded-0' name='endereco' />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='numero' style={{ fontSize: '20px', margin: '0 115px' }}>Numero:</label>
                                    <label htmlFor='catforn' style={{ fontSize: '20px', margin: '0 -52px' }}>Categoria:</label>
                                    <input type='number' value={numero} onChange={e => numerochange(e.target.value)} style={{ width: 100, margin: '0 115px', fontSize: '20px' }} className='form-control rounded-0' name='numero' />
                                    <select style={{ width: 250, margin: '0 250px', marginTop: '-42px', fontSize: '20px' }} className='form-select' name='categoria' id='categoria' onChange={(e) => setValues({ ...values, id: e.target.value })} >
                                        <option value="Selecione">Selecione:</option>
                                        {categoria.map(val => {
                                            return <option value={val.nome}>{val.nome}</option>
                                        })}
                                    </select>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='comp' style={{ fontSize: '20px', margin: '0 115px' }}>Complemento:</label>
                                    <input type='text' value={comp} onChange={e => compchange(e.target.value)} style={{ fontSize: '20px', width: 120, margin: '0 115px' }} className='form-control rounded-0'/>

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='cep' style={{ fontSize: '20px', margin: '0 115px' }}>Cep:</label>
                                    <input type='text' placeholder='Entre com o cep:' value={cep} onChange={e => cepchange(e.target.value)} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} className='form-control rounded-0' name='cep' />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='cidade' style={{ fontSize: '20px', margin: '0 115px' }}>Cidade:</label>
                                    <input type='text' placeholder='Entre com a cidade:' value={cidade} onChange={e => cidadechange(e.target.value)} style={{ fontSize: '20px', width: 350, margin: '0 115px' }} className='form-control rounded-0' name='cidade' />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='email' style={{ fontSize: '20px', margin: '0 115px' }}>Email:</label>
                                    <input type='email' placeholder='Entre com o email:' value={email} onChange={e => emailchange(e.target.value)} style={{ fontSize: '20px', width: 300, margin: '0 115px' }} className='form-control rounded-0' name='email' />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='fone' style={{ fontSize: '20px', margin: '0 115px' }}>Telefone:</label>
                                    <input type='text' placeholder='Entre com o telefone:' value={fone} onChange={e => fonechange(e.target.value)} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} className='form-control rounded-0' name='fone' />

                                </div><br />
                                <div className='mb-3'>
                                    <button type='submit' className='btn btn-success border rounded-0' style={{ width: 150, margin: '0 115px', fontSize: '16px' }} >Atualizar:</button>
                                    <Link to='/fornecedores' className="btn border rounded-0" style={{ color: 'white', backgroundColor: 'orange', margin: '0 -75px', fontSize: '16px', width: 150 }}>Voltar:</Link>
                                </div>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default EditarFornecedor