/* export const INPUT_DATA2 = [
    {
        inputId: "initial",
        inputTitle: "Initial Investment",
        value: 1000,
        type: "number",
        inputName: "initial",
    },
    {
        inputId: "annual",
        inputTitle: "Annual Investment",
        value: 1200,
        type: "number",
        inputName: "annual",
    },] */

export default function UserInput({ onChange, data2 }) {
    console.log("data2", data2);

    return (
        <section id="user-input">
            <div className="input-group">
                {data2.slice(0, 2).map((element) => (
                    <label key={element.inputId}>
                        {element.inputTitle}
                        <input
                            type="number"
                            required
                            value={element.value || ""}
                            onChange={(e) =>
                                onChange(element.inputId, e.target.value)
                            }
                        />
                    </label>
                ))}
            </div>
            {/*ici on map et on slice la data pour l'organier comme on veut mais on doit faire deux map différents.*/}{" "}
            <div className="input-group">
                {data2.slice(2, 4).map((element) => (
                    <label key={element.inputId}>
                        {element.inputTitle}
                        <input
                            type="number"
                            required
                            value={element.value || ""}
                            onChange={(e) =>
                                onChange(element.inputId, e.target.value)
                            }
                        />
                    </label>
                ))}
            </div>
        </section>
    );
}
