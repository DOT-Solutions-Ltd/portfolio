import { faqData1, faqData2 } from "../../data";
import { useState } from 'react'
import "./Faqs.css"

const Faqs = () => {
    const [faqId, setFaqId] = useState(null);

    const storeFaqId = (id) => {
        setFaqId((prev) => prev !== id ? id : null);
    };

    return (
        <div className='faq-container' >
            <div className="faq-top-text-cont">
                <p className="faq-text1">FAQs</p>
                <h3 className="faq-text2">Frequently Asked Questions</h3>
            </div>
            <div className="faq-answers-wrapper">
                <div className="faq-answers1">
                    {
                        faqData1.map(({ id, question, answer, isOpen }) => {
                            return (
                                <div key={id} className={`${faqId === id ? "faq-selected" : "faq"}`} onClick={() => storeFaqId(id)} >
                                    {
                                        faqId === id ? (
                                            <>
                                                <div className="faq-question-wrapper">
                                                    <h5 style={{ color: "#ffffff" }} className="faq-question">{question}</h5>
                                                    <p style={{ color: "#ffffff" }} className="faq-icon">-</p>
                                                </div>
                                                <h5 className="faq-selected-answer" >{answer}</h5>
                                            </>
                                        ) : (
                                            <>
                                                <h5 className="faq-question">{question}</h5>
                                                <p className="faq-icon">+</p>
                                            </>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="faq-answers2">
                    {
                        faqData2.map(({ id, question, answer, isOpen }) => {
                            return (
                                <div key={id} className={`${faqId === id ? "faq-selected" : "faq"}`} onClick={() => storeFaqId(id)} >
                                    {
                                        faqId === id ? (
                                            <>
                                                <div className="faq-question-wrapper">
                                                    <h5 style={{ color: "#ffffff" }} className="faq-question">{question}</h5>
                                                    <p style={{ color: "#ffffff" }} className="faq-icon">-</p>
                                                </div>
                                                <h5 className="faq-selected-answer" >{answer}</h5>
                                            </>
                                        ) : (
                                            <>
                                                <h5 className="faq-question">{question}</h5>
                                                <p className="faq-icon">+</p>
                                            </>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Faqs