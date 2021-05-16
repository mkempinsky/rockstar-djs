const Button = (props) => {
    return (
        <button {...props}>
            {props.children}
            <style jsx>
                {`
                    button {
                        font-family: Montserrat, sans-serif;
                        color: #fff;
                        background: var(--interactive);
                        padding: 12px;
                        border-radius: 4px;
                        border: none;
                        font-weight: bold;
                        font-size: 16px;
                        min-width: 120px;
                        text-align: center;
                        cursor: pointer;
                    }
                    button:hover {
                        background: var(--interactive-400);
                        transition: all 0.25s;
                    }
                    button:focus {
                        outline: 0;
                    }
                `}
            </style>
        </button>
    );
};
export default Button;
