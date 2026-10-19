import { useState } from "react"

const NoteForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        category: 'work',
        priority: 'Medium',
        desription: ''
    })

    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validacion
        if (!formData.title || !formData.description) return

        // Crear el objeto de la nota
        const newNote = {id: Date.now(), ...formData}

        // Agregar notas a el estado (state)
        setNotes([newNote, ...notes])

        // Reset de campos de formData
        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: ''
        })
    }

    return(
        <>
            <button 
                className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg 
                            cursor-pointer hover: bg-purple-200 hover: border-purple-300 trasintion mb-4"
                onClick = {()=>setIsFormVisible(!isFormVisible)}        
            >
                {isFormVisible ? 'Hide Form X' : 'Add New Note +'} 
            </button>

            { isFormVisible && (
                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="mb-4">
                        <label htmlFor="" className="block-font-semibold">Title</label>
                    </div>
                </form>
            )}
        </>
    )

}

export default NoteForm;