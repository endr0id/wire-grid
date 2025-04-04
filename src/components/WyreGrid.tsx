import React from "react";
import { Color, Size } from "../enums/enums";

type GridProps = {
    data: { [key: string]: string | number }[];
};

export const WyreGrid: React.FC<GridProps> = ({ data }) => {
    if (data.length === 0) return <p>No data available</p>;

    const headers = Object.keys(data[0]);

    return (
        <div
            style={{
                width: `${Size.FullWidth}`,
                height: `${Size.FullHeight}`,
                border: `1px solid ${Color.Border}`,
                borderRadius: "5px",
            }}
        >
            <div>Grid header</div>
            <table
                border={1}
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
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr>
                            {headers.map((header) => (
                                <td key={index}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>Grid footer</div>
        </div>
    );
};
