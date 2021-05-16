const FaqCard = ({title = '', children}) => {
    return (
        <div className="faq__card">
            <h4 className="faq__question">{title}</h4>
            <p className="faq__answer">{children}</p>
            <style jsx>{`
                .faq__card {
                    border-left: 2px solid var(--interactive);
                    padding-left: 30px;
                    margin-bottom: 60px;
                }
                .faq__answer {
                    color: var(--gray-400);
                    font-style: italic;
                }
            `}</style>
        </div>
    );
};
export default FaqCard;
