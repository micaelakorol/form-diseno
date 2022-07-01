/* eslint-disable no-unused-vars */
import React from 'react'
import useForm from '../hooks/useForm'
import '../css/form.css'
import {styles} from '../componentes/styles'
import { initialForm } from './initialForm' //si hay problemas, copiar contenido aca como estaba.


const validationsForm = (form) => {
    let errors = {}; 
     let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
          let regexComments = /^.{1,255}$/;

//Validacion de errores:
if(!form.name.trim()){
    errors.name = 'El campo Nombre está vacío'
        }else if(!regexName.test(form.name.trim())){
            errors.name = 'El campo nombre solo acepta letras y espacios en blanco'
}
    else if(!form.email.trim()){
        errors.email = 'El campo Email es requerido'
}           
        else if(!regexEmail.test(form.email.trim())){
    errors.email = 'Escriba un formato email válido'
}

        else if(!form.subject.trim()){
             errors.subject = 'El campo Asunto es requerido'
}

        else if(!form.comments.trim()){
             errors.comments = 'El campo Comentario es requerido'
}
        else if(!regexComments.test(form.comments.trim())){
             errors.comments = 'El campo Comentarios no debe exceder los 255 caracteres'
}

return errors;
}

//onBlur = realiza la validacion del campo del input cuando se pierde el foco del input en el que estaba.
const Form = () => {
    const {form,errors,handleBlur,handleChange,handleSubmit} = useForm(initialForm,validationsForm)
  return (
       <>
    <div className='contenedor-form'>
    <form onSubmit={handleSubmit} className='form'>
        <img src={require('../img/img.jpg')} alt="" className='imagen_logo'/>
        <input type="text" name='name' placeholder='Nombre'autoComplete='off' onChange={handleChange}
    onBlur={handleBlur} value={form.name} required
    />
        {errors.name && <p style={styles}>*{errors.name}</p>}

    <input type="email" name='email' placeholder='name@example.com'  autoComplete='off' onChange={handleChange} onBlur={handleBlur} value={form.email} required
/>
        {errors.email && <p style={styles}>*{errors.email}</p>}

    <input type="text" name='subject' placeholder='Asunto' autoComplete='off' onChange={handleChange}
onBlur={handleBlur} value={form.subject} required
/> 
        {errors.subject && <p style={styles}>*{errors.subject}</p>}

    <textarea name="comments" cols="50" rows="5" placeholder='Escribe tus comentarios' onChange={handleChange} onBlur={handleBlur} value={form.comments} required></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <b>Tú opinión nos interesa!</b>
    

    <button className='boton' type='submit'> Enviar </button>
</form>
</div>
</>
  )
}

export default Form