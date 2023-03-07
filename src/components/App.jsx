import { useEffect, useState } from "react";
import { StatPage } from "./statistics/Statistics";
import FeedbackOptions from "./feedback/Feedback";
import { FeedbackStyle, Section, SectionTitle, StatisticsBox, StatisticsText } from "./App.styled";



export default function App () {
    
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  //   state = {
  //           good: 0,
  //           neutral: 0,   
  //           bad: 0   
  // }
  

const HandleClickGood=()=>{
  setGood(state=>state+1);
}
const HandleClickNeutral=()=>{
  setNeutral(state=>state+1);
}
const HandleClickBad=()=>{
  setBad(state=>state+1);
}


  // HandleClickButton = e => {
  //   const option = e.target.name;

  //   if (option) {
  //     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  //   }
  // };

  useEffect(() => {
    const countTotalFeedback = good + neutral + bad;
    const result = Math.ceil((good / countTotalFeedback) * 100);
    return `${result}%`;
  }, [good, neutral, bad]);
        
  //   countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // countPositiveFeedback = () => {
  //   const totalFeedback = this.countTotalFeedback();
  //   const goodFeedback = this.state.good;
  //   let result = 0;

  //   if (totalFeedback > 0) {
  //     result = Math.ceil((goodFeedback / totalFeedback) * 100);
  //   }

  //   return `${result}%`;
  // };

    // render() {
      // const { good, neutral, bad } = this.state;
      // const countTotalFeedback = this.countTotalFeedback();
      // const countPositiveFeedback = this.countPositiveFeedback();
      // const HandleClickButton = this.HandleClickButton;
      // const options = Object.keys(this.state);
       
      return (
        // <div>
          <Section title="Please leave feedback">
          <FeedbackStyle>
            
            
              <SectionTitle title="Please leave feedback">
Please leave feedback</SectionTitle>
            <FeedbackOptions good={good}
              neutral={neutral}
              bad={bad}
              onLeaveFeedbackGood={HandleClickGood }
              onLeaveFeedbackNeutral={HandleClickNeutral}
            onLeaveFeedbackBad={HandleClickBad}
            />
          </FeedbackStyle>
                       
          <StatisticsBox>
                {countTotalFeedback > 0 ? (
         <StatPage
                onGood={good}
                onNeutral={neutral}
                onBad={bad}
                onTotal={countTotalFeedback}
                onPositive={countPositiveFeedback} />) : (<StatisticsText>There is no feedback</StatisticsText>)}
            
            </StatisticsBox>
          </Section>
        // </div>
        )
    }
// }

// export default App