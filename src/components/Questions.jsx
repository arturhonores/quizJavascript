import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/**Custom Hook */
import { useFetchQuestion } from "../hooks/FetchQuestion";

const Questions = ({ onChecked }) => {

    const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError }] = useFetchQuestion()

    const questions = useSelector(state => state.questions.queue[state.questions.trace])

    useEffect(() => {
        // console.log(questions)
    },)
    const onSelect = (i) => {
        onChecked(i)
    }

    if (isLoading) return <h3>isLoading</h3>
    if (serverError) return <h3>{serverError || "Unknown Error"}</h3>

    return (
        <div>
            <h2 className="py-4 text-lg">{questions?.question}</h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i} className="py-2">
                            <input
                                type="radio"
                                value={checked}
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(i)}
                                className="peer/option checked:bg-yellow-500 checked:hover:bg-yellow-500 checked:active:bg-yellow-500 checked:focus:bg-yellow-500 focus:bg-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                            />
                            <label htmlFor={`q${i}-option`} className="peer-checked/option:text-yellow-500 ml-3">{q}</label>
                        </li>
                    ))
                }


            </ul>
        </div>
    );
}
export default Questions