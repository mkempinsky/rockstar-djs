export default function IconChevron(props) {
    return (
        <svg
            {...props}
            width={props.width || '8'}
            height={props.height || '13'}
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.38879 1.72644L6.65815 6.95701L1.42758 12.2264"
                stroke={props.stroke || '#6A6A6A'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
