import React from "react";
import { Color, Size } from "../enums/enums";
import Divider from "./divider/Divider";

type GridProps = {
    data: { [key: string]: string | number }[];
};

const borderProperty = `1px solid ${Color.Border}`;

export const WyreGrid: React.FC<GridProps> = ({ data }) => {
    if (data.length === 0) return <p>No data available</p>;

    const headers = Object.keys(data[0]);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
                border: borderProperty,
                borderRadius: "5px",
                overflow: "hidden",
            }}
        >
            {headers.map((header, index) => (
                <div
                    key={header}
                    style={{
                        position: "relative",
                        padding: "8px",
                        backgroundColor: "#f5f5f5",
                        fontWeight: "bold",
                        borderBottom: borderProperty,
                    }}
                >
                    {header}
                    {index !== headers.length - 1 && <Divider />}
                </div>
            ))}

            {data.map((property, index) => (
                <React.Fragment key={index}>
                    <div
                        style={{
                            padding: "8px",
                            borderBottom: "1px solid #eee",
                        }}
                    >
                        {property.id}
                    </div>
                    <div
                        style={{
                            padding: "8px",
                            borderBottom: "1px solid #eee",
                        }}
                    >
                        {property.name}
                    </div>
                    <div
                        style={{
                            padding: "8px",
                            borderBottom: "1px solid #eee",
                        }}
                    >
                        {property.age}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};
