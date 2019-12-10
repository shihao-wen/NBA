import React, { useEffect } from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';

window.d3_hexbin = { hexbin: hexbin }; // workaround library problem

// ShotChart does not support React.
// This is a React Wrapper to use the library.
const ShotChart = props => {
  // what to display on the DOM.
  useEffect(() => {
    // nba.stats.shots returns a Promise
    nba.stats
      .shots({
        PlayerID: props.playerId,
        Season: '2018-19'
      })
      .then(response => {
        console.log(response);
        const final_shots = response.shot_Chart_Detail.map(shot => ({
          x: (shot.locX + 250) / 10,
          y: (shot.locY + 50) / 10,
          action_type: shot.actionType,
          shot_distance: shot.shotDistance,
          shot_made_flag: shot.shotMadeFlag
        }));

        const courtSelection = d3.select('#shot-chart');
        // clear the shot chart when slider value is changed, not a re-rendering
        // without this line, the shot chart will not update later.
        courtSelection.html('');
        const chart_court = court().width(500);
        // shot render threshold: min number of shots required
        // for a hexbin to display
        const chart_shots = shots()
          .shotRenderThreshold(props.minCount)
          .displayToolTips(props.displayTooltip)
          .displayType(props.chartType);
        courtSelection.call(chart_court);
        courtSelection.datum(final_shots).call(chart_shots);
      });
  });

  return <div id='shot-chart'></div>;
};
// make sure the playerId is a number and it is not empty
ShotChart.propTypes = {
  playerId: PropTypes.number.isRequired,
  minCount: PropTypes.number,
  chartType: PropTypes.string,
  displayTooltip: PropTypes.bool
};

export default ShotChart;

// // ShotChart does not support React.
// // This is a React Wrapper to use the library.
// export class ShotChart extends React.Component {
//     // make sure the playerId is a number and it is not empty
//     static propTypes = {
//         playerId: PropTypes.number.isRequired,
//         minCount: PropTypes.number,
//         chartType: PropTypes.string,
//         displayTooltip: PropTypes.bool,
//     }

//     // what to display on the DOM.
//     componentDidUpdate() {
//         // nba.stats.shots returns a Promise
//         nba.stats.shots({
//             PlayerID: this.props.playerId,
//             Season: "2018-19"
//         }).then((response) => {
//             console.log(response);
//             const final_shots = response.shot_Chart_Detail.map(shot => ({
//                 x: (shot.locX + 250) / 10,
//                 y: (shot.locY + 50) / 10,
//                 action_type: shot.actionType,
//                 shot_distance: shot.shotDistance,
//                 shot_made_flag: shot.shotMadeFlag,
//             }));

//             const courtSelection = d3.select("#shot-chart");
//             // clear the shot chart when slider value is changed, not a re-rendering
//             // without this line, the shot chart will not update later.
//             courtSelection.html('');
//             const chart_court = court().width(500);
//             // shot render threshold: min number of shots required
//             // for a hexbin to display
//             const chart_shots = shots()
//                 .shotRenderThreshold(this.props.minCount)
//                 .displayToolTips(this.props.displayTooltip)
//                 .displayType(this.props.chartType);
//             courtSelection.call(chart_court);
//             courtSelection.datum(final_shots).call(chart_shots);
//         });
//     }
//     render() {
//         return (
//             <div id="shot-chart"></div>
//         );
//     }
// }
