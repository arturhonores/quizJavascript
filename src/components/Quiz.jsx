import { useEffect, useState } from "react"
import Questions from "./Questions"

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion"
import { PushAnswer } from "../hooks/setResult"

/*redux store import*/
import { useSelector, useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"

const Quiz = () => {
    const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()

    /**next button event handler */
    const onNext = () => {
        if (trace < queue.length) {
            /**increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /**insert a new result in the array */
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
        }

        /** reset the value of the checked variable */
        setChecked(undefined)
    }

    /**prev button event handler */
    const onPrev = () => {
        if (trace > 0) {
            /**decrease the trace value by one using MovePrevAction */
            dispatch(MovePrevQuestion())
        }
    }

    const onChecked = (check) => {
        console.log(check)
        setChecked(check)
    }

    /**finished exam after the last question */
    if (result.length && result.length >= queue.length) {
        return <Navigate to={"/result"} replace={true}></Navigate>
    }

    return (
        <div className="text-white my-10 mx-auto p-5 max-w-3xl flex flex-col gap-6">
            <h1 className="text-2xl text-center border-4 border-spacing-1 border-yellow-500 py-4 uppercase font-bold">Desafío JS</h1>
            {/* display questions */}
            <Questions onChecked={onChecked} />
            <div className="grid grid-cols-2">
                {trace > 0 ? <button className="btn justify-self-start px-6 py-1" onClick={onPrev}>Atrás</button> : <div></div>}
                <button className="btn justify-self-end px-6 py-1" onClick={onNext}>Siguiente</button>
            </div>
        </div>
    )
}
export default Quiz