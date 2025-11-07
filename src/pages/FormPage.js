import React from 'react';
import { useForm } from 'react-hook-form';

const FormPage = () => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm();

  // Función que se ejecuta al enviar el formulario si es válido
  const onSubmit = (data) => {
    console.log("Datos del Formulario Enviados:", data);

    alert(`Cotización para ${data.nombre} sobre ${data.producto} enviada con éxito!`); 
    reset();
  };

  return (
    <div className="form-page">
      <h2>Formulario de Solicitud de Cotización Mayorista</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="quote-form">
        
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo:</label>
          <input 
            id="nombre" 
            type="text" 
            {...register("nombre", { 
              required: "El nombre es obligatorio.", 
              pattern:{
                value: /^[a-zA-ZáéíóúÁÉÍÓÚÑñ\s]+$/,
                message: 'solo se permite letras y espacios.'
              }
             })}
          />
          {errors.nombre && <p className="error-message">{errors.nombre.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            id="email" 
            type="email" 
            // Registro con useForm y validación de patrón de email
            {...register("email", { 
              required: "El email es obligatorio.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Formato de email incorrecto."
              }
            })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="producto">Producto de Interés:</label>
          <input 
            id="producto" 
            type="text" 
            // Registro del campo con useForm y validación de campo requerido
            {...register("producto", { required: "Debe especificar el producto que desea cotizar." })}
          />
          {errors.producto && <p className="error-message">{errors.producto.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="cantidad">Cantidad Mínima (10 uds.):</label>
          <input 
            id="cantidad" 
            type="number" 
            // Validación de número mínimo
            {...register("cantidad", { 
              required: "La cantidad es obligatoria.", 
              min: { value: 10, message: "La cotización es por un mínimo de 10 unidades." }
            })}
          />
          {errors.cantidad && <p className="error-message">{errors.cantidad.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
        </button>
      </form>
    </div>
  );
};

export default FormPage;