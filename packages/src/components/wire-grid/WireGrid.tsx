import React from "react";
import { styles as wireGridStyles } from "./WireGrid.styles";
import { renderCellValue } from "../../usecases/gridRows";

import type { WireGridProps } from "../../models";

export const WireGrid: React.FC<WireGridProps> = ({ rows }) => {
    if (rows.length === 0) return <p>No data available</p>;

    const columnNames = Object.keys(rows[0]);

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

            {rows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {columnNames.map((colName, colIndex) => (
                        <div
                            key={colIndex}
                            style={{
                                padding: "8px",
                                borderBottom:
                                    rowIndex === rows.length - 1
                                        ? "none"
                                        : wireGridStyles.border,
                            }}
                        >
                            {renderCellValue(row[colName])}
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};
