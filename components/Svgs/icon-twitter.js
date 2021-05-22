export default function IconTwitter(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={props.width || '40'}
            height={props.height || '40'}
            viewBox="0 0 40 40">
            <defs>
                <path
                    id="rbbma"
                    d="M90 6149c-11.047 0-20 8.953-20 20s8.953 20 20 20 20-8.953 20-20-8.953-20-20-20z"
                />
                <path
                    id="rbbmb"
                    d="M98.11 6166.38c0 4.95-3.766 10.654-10.652 10.654a10.59 10.59 0 0 1-5.738-1.684c.292.036.59.052.892.052a7.515 7.515 0 0 0 4.65-1.602 3.752 3.752 0 0 1-3.498-2.602c.228.042.462.068.706.068.34 0 .672-.046.986-.13a3.752 3.752 0 0 1-3.004-3.672v-.046c.504.28 1.082.45 1.696.468a3.747 3.747 0 0 1-1.16-5 10.626 10.626 0 0 0 7.716 3.912 3.745 3.745 0 0 1 6.38-3.416 7.487 7.487 0 0 0 2.376-.906 3.76 3.76 0 0 1-1.644 2.07 7.447 7.447 0 0 0 2.148-.59 7.51 7.51 0 0 1-1.864 1.94c.008.162.01.324.01.484z"
                />
            </defs>
            <g>
                <g transform="translate(-70 -6149)">
                    <g>
                        <use fill="transparent" xlinkHref="#rbbma" />
                    </g>
                    <g>
                        <use fill={props.fill || '#fff'} xlinkHref="#rbbmb" />
                    </g>
                </g>
            </g>
        </svg>
    );
}
