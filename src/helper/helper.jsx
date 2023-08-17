import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function attempts_Number(result) {
    return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
    return result.map((element, i) => answers[i] === element).filter(i => i).map(i => point).reduce((prev, curr) => prev + curr, 0);
}

/**función para determinar aprobado o desaprobado */
export function flagResult(totalPoints, earnPoints) {
    return (totalPoints * 50 / 100) < earnPoints; /** earn 50% marks */
}

export function emojiResult(earnPoints) {
    if (earnPoints > 80) {
        return "🦁"
    } else if (earnPoints > 40) {
        return "🐯"
    } else {
        return "😺"
    }
}

export function textResult(earnPoints) {
    if (earnPoints > 80) {
        return "Con una melena majestuosa y un dominio imponente de JavaScript, eres el león que lidera la manada de desarrolladores con gracia y sabiduría. ¡Eres el rey de la selva del código!"
    } else if (earnPoints > 40) {
        return "Eres audaz y poderos@ en el reino del código. Tu ferocidad al resolver problemas te convierte en el tigre temido de JavaScript. ¡No te conformes y sigue aprendiendo!"
    } else {
        return "Aún eres un minin@ en el mundo de JavaScript, pero con poco de práctica te deslizarás con elegancia entre las líneas de código. ¡Sigue esforzándote gat@ ninja de JavaScript!"
    }
}

/**check user auth */
export function CheckUserExist({ children }) {
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={"/"} replace={true}></Navigate>
}