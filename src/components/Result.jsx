import { Link } from "react-router-dom"
import ResultTable from "./ResultTable"
import { useDispatch } from "react-redux"
import { resetAllAction } from "../redux/question_reducer"
import { resetResultAction } from "../redux/result_reducer"

const Result = () => {

    const dispatch = useDispatch()
    function onRestart() {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    return (
        <>
            <div className="text-white my-10 mx-auto p-5 max-w-3xl flex flex-col gap-6">
                <h1 className="text-2xl text-center border-4 border-spacing-1 border-yellow-500 py-4 uppercase font-bold">Desafío JS</h1>
                <div className="flex justify-center flex-col border border-white py-3 px-4 gap-1">
                    <div className="flex justify-between">
                        <span className="font-bold">Usuario</span>
                        <span className="">Daily Tuition</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">Puntos totales :</span>
                        <span className="">50</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">Total de Preguntas :</span>
                        <span className="">05</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">Aciertos :</span>
                        <span className="">03</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">Puntos Alcanzados :</span>
                        <span className="d">30</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">Resultado</span>
                        <span className="font-bold">Aprobado</span>
                    </div>
                </div>
                <Link className="btn w-fit self-center px-8 py-2" to={"/"} onClick={onRestart}>Inicio</Link>
            </div>
            <div className="text-white my-10 mx-auto p-5 max-w-3xl flex flex-col gap-6">
                <ResultTable></ResultTable>
            </div>
        </>
    )
}
export default Result