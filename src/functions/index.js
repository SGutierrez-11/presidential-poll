const candidateContainer = document.getElementById('candidateContainer');

const getCandidatesAPI = async () => {
    let url = 'https://presidentialpoll.herokuapp.com/api/candidates/all';
    let response = await fetch(url, {method:'GET'});
    let obj = await response.json();

    console.log(obj);

    for(let i in obj){
        let candidate = new presidentialCandidate(obj[i].id, obj[i].president, obj[i].vicepresident, obj[i].politicParty, obj[i].imagePresident, obj[i].votes)
        let component = new candidateComponent(candidate);
        component.render(candidateContainer);
    }
}

getCandidatesAPI();