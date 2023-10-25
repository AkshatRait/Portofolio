import "./index.css"

const Timeline = () => {
  return (
    <div class="timeline">
                  <div class="timeline-empty">
                  </div>
               <div class="timeline-middle">
                   <div class="timeline-circle"></div>
               </div>
               <div class="timeline-component timeline-content">
                <h3>HTML</h3>
                <p>Some Text</p>
           </div>
                <div class="timeline-component timeline-content">
                         <h3>CSS</h3>
                         <p>Some Text.</p>
                </div>
                <div class="timeline-middle">
                    <div class="timeline-circle"></div>
                </div>
                <div class="timeline-empty">
                </div>

                <div class="timeline-empty">
                </div>

               <div class="timeline-middle">
                   <div class="timeline-circle"></div>
               </div>
               <div class=" timeline-component timeline-content">
                <h3>Javascript</h3>
                <p>Some Text.</p>
           </div>

       </div>
  )
}

export default Timeline