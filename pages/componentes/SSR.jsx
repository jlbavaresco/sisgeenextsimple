function SSR({ predios }) {

    return (
        <div>
            <h1>Aprendendo Next JS</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Sigla</th>
                    </tr>
                </thead>
                <tbody>
                    {predios.map(objeto => (
                        <tr key={objeto.codigo}>
                            <td>{objeto.codigo}</td>
                            <td>{objeto.nome}</td>
                            <td>{objeto.descricao}</td>
                            <td>{objeto.sigla}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SSR;

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predios`);
    const predios = await res.json();
    return {
        props: {
            predios
        }
    }
}