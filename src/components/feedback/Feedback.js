import { Feedback, FeedbackButton, FeedbackItem } from "./feedback.styled";
function FeedbackOptions({ options, onLeaveFeedback}) {
    return (
        <Feedback>
        {/* //     <FeedbackItem >
           
        //         <FeedbackButton name="good" onClick={onLeaveFeedbackGood}>{good}</FeedbackButton>
        //     </FeedbackItem>
        //     <FeedbackItem >
           
        //         <FeedbackButton name="neutral" onClick={onLeaveFeedbackNeutral}>{neutral}</FeedbackButton>
        //     </FeedbackItem>
        //     <FeedbackItem >
           
        //         <FeedbackButton name="bad" onClick={onLeaveFeedbackBad}>{bad}</FeedbackButton>
        //     </FeedbackItem> */}

           {
                options.map(option => (
               <FeedbackItem key={option}>
           
                <FeedbackButton name={option} onClick={onLeaveFeedback}>{option}</FeedbackButton>
            </FeedbackItem>     
                )

                )
            }
            
            
        </Feedback>
    )
}
    
  

export default FeedbackOptions;