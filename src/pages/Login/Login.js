import React from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro } from '../../Routes/coordinator'
import { ContainerForm, ContainerLogin, Input } from './styled'
import { useForm } from '../../hooks/useForm'

export default function Login() {
  //Primeiro criamos um estado unificado para os dois estados abaixo:
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")


  const {form, onChange, limparInputs} = useForm({email:"", password:""})
  const navigate = useNavigate()


 
  console.log(form)

  // const limparForm = () => {
  //   setForm(form)
  // }
  // const onChangeEmail = (e) => {
  //   setEmail(e.target.value)
  // }
  // const onChangeSenha = (e) => {
  //   setPassword(e.target.value)
  // }

  const enviaLogin = (e) => {
    e.preventDefault()
    limparInputs()
  }

  return (
    <ContainerLogin>
      <ContainerForm onSubmit={enviaLogin}>
        <label htmlFor='email'>Email:</label>
        <Input
          id='email'
          value={form.email}
          onChange={onChange}
          placeholder="nome@email.com"
          required
          name="email"
          type='email'
        />
        <label htmlFor='senha'>Senha:</label>
        <Input
          id='senha'
          value={form.password}
          onChange={onChange}
          placeholder="Digite sua senha"
          required
          name="password"
          type='password'
        />
        <button>Fazer Login</button>
      </ContainerForm>
      <button onClick={() => irParaCadastro(navigate)}>Ainda não tenho uma conta</button>
    </ContainerLogin>
  )
}
