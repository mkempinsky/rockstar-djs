import {BREAKPOINT} from '../../lib/styles';

const Container = (props) => {
    return (
        <div className="container" style={props.style}>
            {props.children}
            <style jsx>
                {`
                    .container {
                        padding: 30px 20px 30px 150px;
                    }
                    @media screen and (min-width: ${BREAKPOINT}) {
                        .container {
                            padding: 60px 0;
                            max-width: 1200px;
                            margin: 0 auto;
                        }
                    }
                `}
            </style>
        </div>
    );
};
export default Container;
