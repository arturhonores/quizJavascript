import { useRef } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import logoJavascript from "/js-icon.png"
import { setUserId } from "../redux/result_reducer"

const Home = () => {
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return (
        <div className="text-white my-10 mx-auto p-5 max-w-3xl flex flex-col gap-6">
            <div className="border-4 border-spacing-1 border-yellow-500 py-4 flex justify-center items-center gap-2">
                <h1 className="text-2xl text-center uppercase font-bold">Desafío</h1>
                <img src={logoJavascript} alt="" width="40px" />
            </div>
            <ol className="list-decimal list-inside">
                <li>Se te harán 12 preguntas una tras otra.</li>
                <li>Se otorgan 10 puntos por la respuesta correcta.</li>
                <li>Cada pregunta tiene tres opciones. Solo puedes elegir una opción.</li>
                <li>Puedes revisar y cambiar respuestas antes de que termine el cuestionario.</li>
                <li>El resultado se revelará al final del cuestionario (😺, 🐯, 🦁).</li>
            </ol>
            <form className="self-center w-1/2" onSubmit={(e) => e.preventDefault()}>
                <input ref={inputRef} type="text" placeholder="Nombre" className="text-slate-900 w-full text-center focus:outline-none focus:border-yellow-500 focus:ring-yellow-500" />
            </form>
            <div className="self-center">
                <Link className="btn px-8 py-2" to={"quiz"} onClick={startQuiz}>Iniciar</Link>
            </div>
        </div>
    )
}
export default Home