const ResultTable = () => {
    return (
        <div>
            <table className="table w-full">
                <thead className="table-header-group font-bold bg-gray-700">
                    <tr className="table-row">
                        <td className="">Nombre</td>
                        <td>Intentos</td>
                        <td>Puntaje</td>
                        <td>Resultado</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Daily Tuition</td>
                        <td>03</td>
                        <td>20</td>
                        <td>Passed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ResultTable