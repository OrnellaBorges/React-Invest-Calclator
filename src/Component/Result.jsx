import { calculateInvestmentResults } from "../util/investment.js";
import { transformData } from "../util/investment.js";

export default function Result({ input }) {
    // ici on declare une varable qui va faire appel a la fonction calculate calculateInvestmentResults
    // cette fonction a besoin des valeurs de input passé en prop dans cle composant resul dans app en paramettre pour faire les calcules.
    // on va ensuite utiliser investResult pour dynamyser l'affichage
    console.log("input", input);
    const toto = transformData(input);
    console.log("toto", toto);

    // Ne pas utiliser une variable transformData, car c'est une fonction et non une variable
    // Appeler directement transformData(input) au lieu de créer une variable
    const investResults = calculateInvestmentResults(toto);
    console.log("investResult", investResults);

    /* voici ce qu'on reçoit  dans investResults: */
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
                        {/* on va mapper investResults ce qu'on a reçu dans investResults */}
                        {investResults.map((element) => {
                            return (
                                <tr key={element.year}>
                                    <td>{element.year}</td>
                                    <td>{element.year}</td>
                                    <td>{element.year}</td>
                                    <td>{element.year}</td>
                                </tr>
                            );
                        })}
                    </tr>
                </tbody>

                <tfoot>nothing on tfoot </tfoot>
            </table>
        </section>
    );
}
