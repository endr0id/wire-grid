import React from "react";
import { Color, Size } from "../enums/enums";

type GridProps = {
    data: { [key: string]: string | number }[];
};

const borderProperty = `1px solid ${Color.Border}`;
const borderNone = "none";
const firstColumn = 0;

export const WyreGrid: React.FC<GridProps> = ({ data }) => {
    if (data.length === 0) return <p>No data available</p>;

    const headers = Object.keys(data[0]);
    const lastColumn = headers.length - 1;

    return (
        <div
            style={{
                width: `${Size.FullWidth}`,
                height: `${Size.FullHeight}`,
                border: borderProperty,
                borderRadius: "5px",
            }}
        >
            <div>Grid header</div>
            <table
                style={{
                    width: `${Size.FullWidth}`,
                    height: `${Size.FullHeight}`,
                    borderCollapse: "collapse",
                    borderColor: `${Color.Border}`,
                }}
            >
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                style={{
                                    borderLeft: borderNone,
                                    borderTop: borderProperty,
                                    borderRight: borderNone,
                                    borderBottom: borderProperty,
                                }}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map((header, colIndex) => (
                                <td
                                    key={header}
                                    style={{
                                        borderLeft:
                                            colIndex === firstColumn
                                                ? borderNone
                                                : borderProperty,
                                        borderTop: borderProperty,
                                        borderRight:
                                            colIndex === lastColumn
                                                ? borderNone
                                                : borderProperty,
                                        borderBottom: borderProperty,
                                    }}
                                >
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>Grid footer</div>
        </div>
    );
};
