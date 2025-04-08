import React from "react";

const borderColor: string = "#e0e0e0";

const border: string = `1px solid ${borderColor}`;

const wrapper: React.CSSProperties = {
    display: "grid",
    border: border,
    borderRadius: "5px",
};

const columnHeader: React.CSSProperties = {
    position: "relative",
    padding: "8px",
    fontWeight: "bold",
    borderBottom: border,
};

const divider: React.CSSProperties = {
    position: "absolute",
    top: "6px",
    right: "0px",
    bottom: "6px",
    width: "1px",
    backgroundColor: borderColor,
};

export const styles = {
    border,
    wrapper,
    columnHeader,
    divider,
};
