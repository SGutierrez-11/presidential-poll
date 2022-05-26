var myChart = document.getElementById("myChart").getContext('2d');;

const candidates = [];
const votesCandidates=[];
let totalVotes = 0;

/*const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };*/

/*const data = {
  labels: candidates,
  datasets: [{
    label: 'My First Dataset',
    data: votes,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(39, 113, 207, 0.2)',
      'rgba(89, 111, 190, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgb(39, 113, 207)',
      'rgb(89, 111, 190)'
    ],
    borderWidth: 1
  }]
};*/

const getCandidatesAPI = async () => {
    let url = 'https://presidentialpoll.herokuapp.com/api/candidates/all';
    let response = await fetch(url, {method:'GET'});
    let obj = await response.json();

    let n = 0;
    console.log(obj);

    for(let i in obj){
        n = n + obj[i].votes;
        candidates.push(obj[i].president);
        votesCandidates.push(obj[i].votes)
    }
    console.log(votesCandidates);

    totalVotes = n;

    for(let i in votesCandidates){
        votesCandidates[i]=(votesCandidates[i]/totalVotes)*100;
        votesCandidates[i]=Math.round(votesCandidates[i]);
    }
    console.log(totalVotes);
    console.log(votesCandidates);

}


getCandidatesAPI().then(() => {
    new Chart(myChart, {
      type: "pie",
      data: {
        labels: candidates,
        datasets: [{
          label: 'Percentage of Votes',
          data: votesCandidates,
          backgroundColor: [
            'rgba(255, 99, 132, 0.1)',
            'rgba(255, 159, 64, 0.1)',
            'rgba(255, 205, 86, 0.1)',
            'rgba(75, 192, 192, 0.1)',
            'rgba(54, 162, 235, 0.1)',
            'rgba(153, 102, 255, 0.1)',
            'rgba(39, 113, 207, 0.1)',
            'rgba(89, 111, 190, 0.1)',
            'rgba(201, 203, 207, 0.1)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(39, 113, 207)',
            'rgb(89, 111, 190)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
         plugins: {
            legend: {
               position: 'top',
            }
    }
      }
    });
}
);
