export default function Result({ input }) {
    // ici on declare une varable qui va faire appel a la fonction calculate calculateInvestmentResults
    // cette fonction a besoin des valeurs de input passé en prop dans cle composant resul dans app en paramettre pour faire les calcules.
    // on va ensuite utiliser investResult pour dynamyser l'affichage
    // const investResults = calculateInvestmentResults(input);
    // input contient les valeur suivantes mises a jour lorsque le client a tappé dans les inputs :  initialInvestment,annualInvestment,expectedReturn,duration,
    return (
        <section>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest per Year</th>
                        <th>Total Interest</th>
                        <th>Invested capital</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>aaaa</td>
                        <td>bbbb</td>
                        <td>cccc</td>
                        <td>dddd</td>
                        <td>eeee</td>
                    </tr>
                </tbody>

                <tfoot>nothing on tfoot </tfoot>
            </table>
        </section>
    );
}
