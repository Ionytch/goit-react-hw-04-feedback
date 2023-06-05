import { Feedback, FeedbackButton, FeedbackItem } from "./feedback.styled";
import PropTypes from "prop-types";


function FeedbackOptions({ options, onLeaveFeedback}) {
    return (
        <Feedback>
      
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
    
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.string.isRequired,
}; 

export default FeedbackOptions;