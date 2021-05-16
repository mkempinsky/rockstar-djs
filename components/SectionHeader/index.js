import {BREAKPOINT} from '../../lib/styles';

const SectionHeader = ({title = '', subtitle = ''}) => {
    return (
        <div className="header-container">
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <style jsx>
                {`
                    .header-container {
                        display: block;
                        position: relative;
                        width: fit-content;
                        text-align: center;
                        margin: 0 auto 30px auto;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .header-container {
                            margin: 0 auto 60px auto;
                        }
                    }
                    h2 {
                        text-align: center;
                        color: var(--orange);
                        font-size: 60px;
                    }
                    h4 {
                        text-align: center;
                        color: #fff;
                        background: #000;
                        width: fit-content;
                        margin: 0 auto;
                        padding: 3px 10px;
                        transform: rotate(-4deg);
                        text-transform: uppercase;
                        font-size: 12px;
                        border: 3px solid #fff;
                    }
                `}
            </style>
        </div>
    );
};
export default SectionHeader;
