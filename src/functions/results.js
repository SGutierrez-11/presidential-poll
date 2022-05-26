var myChart = document.getElementById("myChart").getContext('2d');;

const presidents = [];
const votes = [];
let total = 0;


const barColors = [
  "#BD2C26",
  "#51DB69",
  "#DB613B",
  "#506266",
  "#FF6384",
  "#2677BD",
  "#84FF63",
  "#8463FF",
  "#F0A630"
];

const dataset = {
  labels: presidents,
  datasets: [{
    backgroundColor: barColors,
    data: votes
  }]
};


const options = {
  tooltips: {
    enabled: false
  },
  plugins: {
    datalabels: {
      formatter: (value, chart) => {

        let sum = 0;
        let dataArr = chart.chart.data.datasets[0].data;
        dataArr.map(data => {
          sum += data;
        });
        let percentage = (value * 100 / sum).toFixed(2) + "%";
        return percentage;


      },
      color: '#fff',
    }
  }
};




const getResultsAPI = async () => {
  let url = `https://presidentialpoll.herokuapp.com/api/candidates/all`;
  let response = await fetch(url, { method: 'GET' });
  let result = await response.json();
  total = result.data[0]['SUM(votes)'];


  url = `https://presidentialpoll.herokuapp.com/api/candidates/all`;
  response = await fetch(url, { method: 'GET' });
  results = await response.json();

  results.data.forEach(element => {
    presidents.push(element.president);
    votes.push(element.votes);

  });

}



getResultsAPI().then(() => {
  new Chart(myChart, {
    type: "doughnut",
    data: dataset,
    options: options
  });

}
);