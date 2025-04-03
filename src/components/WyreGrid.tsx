import React from "react";

type GridProps = {
    data: { [key: string]: string | number }[];
};

export const WyreGrid: React.FC<GridProps> = ({ data }) => {
    if (data.length === 0) return <p>No data available</p>;

    const headers = Object.keys(data[0]);

    return (
        <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
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
                            <td key={header}>{row[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
