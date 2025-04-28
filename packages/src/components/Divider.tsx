import { Color } from "../constants/constant";

/**
 * A component for separating elements when viewed.
 */
const Divider: React.FC = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: "6px",
                right: 0,
                bottom: "6px",
                width: "1px",
                backgroundColor: Color.border,
            }}
        />
    );
};

export default Divider;
