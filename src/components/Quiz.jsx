import Questions from "./Questions"

const Quiz = () => {
    const onPrev = () => { console.log("funciona") }
    const onNext = () => { console.log("funciona") }
    return (
        <div className="text-white my-10 mx-auto p-5 max-w-3xl flex flex-col gap-6">
            <h1 className="text-2xl text-center border-4 border-spacing-1 border-yellow-500 py-4 uppercase font-bold">Desafío JS</h1>
            {/* display questions */}
            <Questions />
            <div className="grid grid-cols-2">
                <button className="btn justify-self-start px-6 py-1" onClick={onPrev}>Atrás</button>
                <button className="btn justify-self-end px-6 py-1" onClick={onNext}>Siguiente</button>
            </div>
        </div>
    )
}
export default Quiz