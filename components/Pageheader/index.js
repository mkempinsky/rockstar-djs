const PageHeader = () => {
    return (
        <>
            <div className="header" />
            <style jsx>
                {`
                    .header {
                        width: 100%;
                        background: linear-gradient(
                                to right top,
                                rgba(20, 30, 48, 0.7),
                                rgba(36, 59, 85, 0.2)
                            ),
                            url('/dj_background.jpg');
                        height: 350px;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                    }
                `}
            </style>
        </>
    );
};

export default PageHeader;
