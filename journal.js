/*<section class="section-three">
            <img class="section-three-img" src="images/pexels-divinetechygirl-1181279.jpg" alt="" width="100%">

            <div class="section-description"></div>
            <p class="today-date">NOV 21, 2025</p>
            <h2 class="section-three-h2">Blog one</h2>
            <p class="section-three-p">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </div>
        </section>*/

        import { journalList } from "./data.js"

        document.getElementById('section-three').innerHTML = renderBlogs()
    
        function renderBlogs(){
            const displayBlogs = journalList.map(function(journal){
                return`
                <div class="section-three-grid">
            <img class="section-three-img" src="${journal.image}" alt="" width="100%">

            <div class="section-description"></div>
            <p class="today-date">${journal.date}</p>
            <h2 class="section-three-h2">${journal.title}</h2>
            <p class="section-three-p">${journal.description}</p>
            </div>
            `
            }).join('')

            return displayBlogs
        }

        let displayDate = document.getElementById('date')
        const dateSnapShot = new Date()
        displayDate.textContent = 'Copyright ©' + dateSnapShot.getFullYear()

