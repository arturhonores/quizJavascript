import { useState } from "react";
import { questions } from "./data";

const Questions = () => {

    const [checked, setChecked] = useState(undefined)
    const onSelect = () => {
        console.log("radio button change")
    }
    const question = questions[0]

    return (
        <div>
            <h2 className="py-4 text-lg"><span>{question.id}. </span>{question.question}</h2>
            <ul key={question.id}>
                {
                    question.options.map((q, i) => (
                        <li key={i} className="py-2">
                            <input
                                type="radio"
                                value={checked}
                                name="options"
                                id={`q${i}-option`}
                                onChange={onSelect}
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