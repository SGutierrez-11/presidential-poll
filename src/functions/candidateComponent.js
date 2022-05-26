class candidateComponent{

    constructor(candidate){
        this.candidate=candidate;
    }

    render(container){
        let html = `
        <div class="card" style="width: 18rem;">
        <img src="${this.candidate.imagePresident}" class="card-img-top" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">PRESIDENTE:<br>${this.candidate.president}</h5>
        <p class="card-title">VICEPRESIDENT:<br>${this.candidate.vicepresident}</p>
        <p class="card-text text-primary">PARTIDO POLÍTICO:<br></p>
        <img src="${this.candidate.politicParty}" class="card-politicParty" style="width: 8rem">
        </div>
        <a href="#" id="button${this.candidate.id}" class="btn btn-primary">VOTAR</a>
    </div>
    `;

    let root = document.createElement('div');
    root.innerHTML = html.trim();
    container.appendChild(root.firstChild);

    let button = document.getElementById(`button${this.candidate.id}`);
    button.addEventListener('click', this.action.bind(this));


    }

    action(event){
   
        event.preventDefault();
        let url = `https://presidentialpoll.herokuapp.com/api/candidates/votes/${this.candidate.id}`;
        fetch(url, {method:'PUT'})
        .then(response => response.json())

                window.alert('Se ha registrado su voto');
                window.location.href = "result.html";
          
    } 

}