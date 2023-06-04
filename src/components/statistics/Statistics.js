import { StatisticsItem, Statisticstext, StatisticsTitle } from "./Statistics.styled";
import PropTypes from "prop-types";


export const StatPage = ({onGood, onNeutral,onBad,onTotal,onPositive}) => {
    return (<StatisticsItem>
                
        <StatisticsTitle>STATISTICS</StatisticsTitle><Statisticstext>good:{onGood}</Statisticstext><Statisticstext>neutral:{onNeutral}</Statisticstext><Statisticstext>bad:{onBad}</Statisticstext><Statisticstext>TOTAL:{onTotal}</Statisticstext><Statisticstext>positive feedback:{onPositive}%</Statisticstext>
            </StatisticsItem>
        
    )
}

StatPage.propTypes = {
    onGood:PropTypes.number.isRequired,
    onNeutral:PropTypes.number.isRequired,
    onBad:PropTypes.number.isRequired,
    onTotal:PropTypes.number.isRequired,
    onPositive:PropTypes.number.isRequired,
}