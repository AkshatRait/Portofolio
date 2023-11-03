import "./index.css"

const Timeline = () => {

  return (
    <div id="timeline">     
        <div class="entries">
        <div class="entry">
            <div class="title">Project 1</div>
            <div class="body">
                <a href="https://akshatrait.github.io/Augmented-Reality/"><img src="/src/assets/ar.png" alt="Augemented Reality Project Picture"></img></a>
            <p><strong>Augmented Reality</strong> was one of my very first project made in a collaborative environment.</p>
            </div>
        </div>
        <div class="entry">
            <div class="title">Project 2</div>
            <div class="body">
           <a href="https://akshatrait.github.io/Level-4-project/"><img src="/src/assets/facebook-clone.png" alt="facebook-clone"></img></a>
            <p><strong>Facebook Clone-</strong> Worked with one another to deliver a Facebook clone based upon the 17 United Nations goals in a week deadline.</p>
            </div>
        </div>
        <div class="entry">
            <div class="title big">Project 3</div>
            <div class="body">
            <img src="/src/assets/pokedex.png" alt="Pokedex"></img>
            <p><strong>Pokedex-</strong> I used a Pokemon API for the very first time.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Timeline