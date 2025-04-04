import React from "react";
import { Color } from "../constants/constant";
import Divider from "./Divider";

type GridProps = {
    data: { [key: string]: string | number }[];
};

const borderProperty = `1px solid ${Color.border}`;

export const WireGrid: React.FC<GridProps> = ({ data }) => {
    if (data.length === 0) return <p>No data available</p>;

    const columnNames = Object.keys(data[0]);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columnNames.length}, 1fr)`,
                border: borderProperty,
                borderRadius: "5px",
                overflow: "hidden",
            }}
        >
            {columnNames.map((name, index) => (
                <div
                    key={index}
                    style={{
                        position: "relative",
                        padding: "8px",
                        backgroundColor: "#f5f5f5",
                        fontWeight: "bold",
                        borderBottom: borderProperty,
                    }}
                >
                    {name}
                    {index !== columnNames.length - 1 && <Divider />}
                </div>
            ))}

            {data.map((property, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {columnNames.map((name, columnIndex) => (
                        <div
                            key={columnIndex}
                            style={{
                                padding: "8px",
                                borderBottom: borderProperty,
                            }}
                        >
                            {property[name]}
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
