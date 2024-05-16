/* eslint-disable react/prop-types */
import { Button } from "@gluestack-style/react";

const CustomButton = (props) => {

    const {
        text,
        onClick,
        iconPosition,
        type,
        size,
        fullWidth,
        color,


    } = props;
    return (
        <Button
            variant={type}
            onClick={onClick}
            my={2}
            endIcon={
                iconPosition == "right" ? (
                    useIcon('error', '5')
                ) : null
            }
            startIcon={
                iconPosition == "left" ? (
                    useIcon('secondary', '5')
                ) : null
            }
            size={size}
            fullWidth={fullWidth}
            color={color}
        >
            {text}
        </Button>
    );
};

export default CustomButton;


