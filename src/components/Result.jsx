import { Link } from "react-router-dom"
import ResultTable from "./ResultTable"
import { useDispatch, useSelector } from "react-redux"
import { attempts_Number, earnPoints_Number, emojiResult, textResult } from "../helper/helper"

/**import actions */
import { resetAllAction } from "../redux/question_reducer"
import { resetResultAction } from "../redux/result_reducer"
import { useEffect } from "react"

const Result = () => {

    const dispatch = useDispatch()
    const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state)

    useEffect(() => {
        console.log(earnPoints)
    })

    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10);
    /**flagResult function import from helper.jsx */
    // const flag = flagResult(totalPoints, earnPoints)

    /**emoji-result */
    const emoji = emojiResult(earnPoints)
    const textEmoji = textResult(earnPoints)

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
                        <span className="">{userId}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">Puntos totales :</span>
                        <span className="">{totalPoints || 0}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">Total de Preguntas :</span>
                        <span className="">{queue.length || 0}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">Preguntas Contestadas :</span>
                        <span className="">{attempts || 0}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-bold">Puntos Alcanzados :</span>
                        <span className="d">{earnPoints || 0} </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">Resultado:</span>
                        {/* <span className={`font-bold ${flag ? "text-green-500" : "text-red-500"}`}>{flag ? "Aprobado" : "Desaprobado"}</span> */}
                        <span className="text-3xl text-center">{emoji}</span>
                        <span className="text-center italic text-yellow-400">{textEmoji}</span>
                    </div>
                </div>
                <Link className="btn w-fit self-center px-8 py-2" to={"/"} onClick={onRestart}>Inicio</Link>
            </div>
            {/* <div className="text-white my-10 mx-auto p-5 max-w-3xl flex flex-col gap-6">
                <ResultTable></ResultTable>
            </div> */}
        </>
    )
}
export default Result