export default function IconFacebook(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={props.width || '40'}
            height={props.height || '40'}
            viewBox="0 0 40 40">
            <defs>
                <path
                    id="58hxa"
                    d="M160 6149c-11.045 0-20 8.953-20 20s8.955 20 20 20 20-8.953 20-20-8.955-20-20-20z"
                />
                <path
                    id="58hxb"
                    d="M162.426 6163.47c-.338 0-.714.444-.714 1.04v2.062h3.572v2.944h-3.572v8.832h-3.374v-8.832h-3.058v-2.944h3.058v-1.73c0-2.482 1.722-4.502 4.088-4.502h2.858v3.13z"
                />
            </defs>
            <g>
                <g transform="translate(-140 -6149)">
                    <g>
                        <use fill="transparent" xlinkHref="#58hxa" />
                    </g>
                    <g>
                        <use fill={props.fill || '#fff'} xlinkHref="#58hxb" />
                    </g>
                </g>
            </g>
        </svg>
    );
}
