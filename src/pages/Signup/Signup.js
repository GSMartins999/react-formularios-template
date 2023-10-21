import React from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import { useForm } from '../../hooks/useForm'

export default function Signup() {
    const {form, onChange, limparInputs} = useForm({nomeUsuario:"", email:"", senha:"", confirmaSenha:""})
    // const [nomeUsuario, setNomeUsuario] = useState("")
    // const [email, setEmail] = useState("")
    // const [senha, setSenha] = useState("")
    // const [confirmaSenha, setConfirmaSenha] = useState("")

    // const onChangeNome = (e) => {
    //     setNomeUsuario(e.target.value)
    // }
    // const onChangeEmail = (e) => {
    //     setEmail(e.target.value)
    // }
    // const onChangeSenha = (e) => {
    //     setSenha(e.target.value)
    // }
    // const onChangeConfirmaSenha = (e) => {
    //     setConfirmaSenha(e.target.value)
    // }

    const enviarCadastro = (e) => {
        // * EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        if (form.senha === form.confirmaSenha) {
                console.log(form)
        }
        e.preventDefault()
        limparInputs()
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    id='nome'
                    value={form.nomeUsuario}
                    onChange={onChange}
                    placeholder="username"
                    name="nomeUsuario"
                    required
                    type='name'
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                    title='Esse campo só aceita letras'
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    id='email'
                    value={form.email}
                    onChange={onChange}
                    placeholder="nome@email.com"
                    name="email"
                    required
                    type='email'
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    id='senha'
                    value={form.senha}
                    onChange={onChange}
                    placeholder="Crie sua senha"
                    name="senha"
                    required
                    type='password'
                    pattern='.{8,}'
                    title='Esse campo requer um número minímo de caracteres para a senha'

                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    id='confirma-senha'
                    value={form.confirmaSenha}
                    name="confirmaSenha"
                    onChange={onChange}
                    placeholder="Confirme a senha"
                    required                  
                    type='password'
                    pattern='.{8,}'
                    title='Esse campo requer um número minímo de caracteres para a senha'
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
