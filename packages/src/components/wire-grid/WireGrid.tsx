import React from "react";
import { styles as wireGridStyles } from "./WireGrid.styles";
import type { WireGridProps } from "../../models";

export const WireGrid: React.FC<WireGridProps> = ({ data }) => {
    if (data.length === 0) return <p>No data available</p>;

    const columnNames = Object.keys(data[0]);

    return (
        <div
            style={{
                ...wireGridStyles.wrapper,
                gridTemplateColumns: `repeat(${columnNames.length}, 1fr)`,
            }}
        >
            {columnNames.map((colName, colIndex) => (
                <div key={colIndex} style={wireGridStyles.columnHeader}>
                    {colName}

                    {colIndex !== columnNames.length - 1 && (
                        <div style={wireGridStyles.divider} />
                    )}
                </div>
            ))}

            {data.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {columnNames.map((colName, colIndex) => (
                        <div
                            key={colIndex}
                            style={{
                                padding: "8px",
                                borderBottom:
                                    rowIndex === data.length - 1
                                        ? "none"
                                        : wireGridStyles.border,
                            }}
                        >
                            {row[colName]}
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
