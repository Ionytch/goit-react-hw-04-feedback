import { useState } from "react";
import { StatPage } from "./statistics/Statistics";
import FeedbackOptions from "./feedback/Feedback";
import { FeedbackStyle, Section, SectionTitle, StatisticsBox, StatisticsText } from "./App.styled";



export default function App () {
    
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  
  const options = ['good', 'neutral', 'bad'];
  
 const HandleClickButton = e => {
   const name = e.target.name;
   switch (name) {
      case 'good':
        setGood(state => state + 1);
        setTotalFeedback(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        setTotalFeedback(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        setTotalFeedback(state => state + 1);
        break;

      default:
        return;
    }

    
  };
  
  
 const countPositiveFeedback = () => {
  
    const result = Math.ceil((good / totalFeedback) * 100);

  
  return result?result:0;
  }; 
  
          
      return (
        
          <Section title="Please leave feedback">
          <FeedbackStyle>
            
            
              <SectionTitle title="Please leave feedback">
Please leave feedback</SectionTitle>
            <FeedbackOptions options={options}
              onLeaveFeedback={HandleClickButton}
              />
          </FeedbackStyle>
                       
          <StatisticsBox>
                {totalFeedback > 0 ? (
         <StatPage
                onGood={good}
                onNeutral={neutral}
                onBad={bad}
                onTotal={totalFeedback}
                onPositive={countPositiveFeedback()} />) : (<StatisticsText>There is no feedback</StatisticsText>)}
            
            </StatisticsBox>
          </Section>
        
        )
    }


