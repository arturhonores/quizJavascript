import { useRef } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const inputRef = useRef(null)

    return (
        <div className="text-white my-10 mx-auto p-5 max-w-3xl flex flex-col gap-6">
            <h1 className="text-2xl text-center border-4 border-spacing-1 border-yellow-500 py-4 uppercase font-bold">Desafío JS</h1>
            <ol className="list-decimal list-inside">
                <li>Se te harán 12 preguntas una tras otra.</li>
                <li>Se otorgan 10 puntos por la respuesta correcta.</li>
                <li>Cada pregunta tiene tres opciones. Solo puedes elegir una opción.</li>
                <li>Puedes revisar y cambiar respuestas antes de que termine el cuestionario.</li>
                <li>El resultado se revelará al final del cuestionario (😺, 🐯, 🦁).</li>
            </ol>
            <form className="self-center w-1/2">
                <input ref={inputRef} type="text" placeholder="Nombre de usuario" className="text-slate-900 w-full" />
            </form>
            <div className="self-center">
                <Link className="btn px-8 py-2" to={"quiz"}>Iniciar</Link>
            </div>
        </div>
    )
}
export default Home