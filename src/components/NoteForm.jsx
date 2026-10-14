import { useState} from "react";

const NoteForm = () => {

    const [formData, SEtFormData] = useState({
      tittlr: '',
      category: 'work',
      priority: 'Medium',
      description: ''

    })

    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleChange = (e) => {
        SEtFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
         e.preventDefault()

         //Validacion
         if (!formData.title || !formData.description) return

         //Crear objeto de la nota

         const newNote = {id: Date.now(), ...formData}

         //agregar notas a el estado (state)
         setNotes([newNote, ...notes])

         //Reset de campos de formData
         setFormData ({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: ''

         })

    }
    return(
        <>
        <button>
            
        </button>
        </>
    )

}

export default NoteForm;