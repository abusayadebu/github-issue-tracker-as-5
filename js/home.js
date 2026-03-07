let allIssues = [];

// catch the issueCardContainer
const issueCardContainer = document.getElementById("issueCardContainer")
// catch the totalIssuesCount
let totalIssuesCount = document.getElementById("totalIssuesCount")

// catch loader 
const loader = document.getElementById("loader")

// catch buttons
const allFilterBtn = document.getElementById("allFilterBtn")
const openFilterBtn = document.getElementById("openFilterBtn")
const closedFilterBtn = document.getElementById("closedFilterBtn")


// showLoader
function showLoader(){
 loader.classList.remove("hidden")
}

// hideLoader
function hideLoader(){
 loader.classList.add("hidden")
}





// loadIssues
async function loadIssues(){
  // show the loader
    showLoader()
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json()
    allIssues = data.data;
    // hideLoader()
    hideLoader();
    // console.log(allIssues, "allissues");
    displayIssues(allIssues)
}

// displayIssues
async function displayIssues(issues){
  issueCardContainer.innerHTML = ""; // clear previous cards
    issues.forEach(issue =>{
        // console.log(issue);
        const card = document.createElement("div")
        card.innerHTML = `
             <div class="card bg-base-100 shadow-sm border-t-4 ${issue.status === 'open' ? 'border-green-400' : 'border-purple-400'} flex flex-col h-full">
  <div class="card-body">
    <div class="flex items-center justify-between">
        <img class="w-[30px]" 
     src="${issue.status === 'open' ? './assets/Open-Status.png' : './assets/closed-status.png'}" 
     alt="${issue.status === 'open' ? 'Open' : 'Closed'}">
    <div class="badge px-6 py-4 rounded-4xl font-medium text-red-800 uppercase ${issue.priority === 'high' ? 'bg-[#FECACA] text-[#EF4444]' : issue.priority === 'medium' ? 'bg-[#FFF6D1] text-[#FF59E0B]' : 'bg-[#9CA3AF] text-gray-400'}">${issue.priority}</div>
    </div>

    <!-- cart title -->
     <h3 class="text-[#1F2937] text-lg font-semibold capitalize">${issue.title}</h3>
     <p class="text-[#64748B] text-lg line-clamp-2">${issue.description}</p>

     <!-- labels -->
      <div class="flex gap-2 flex-wrap">
        ${issue.labels.map(label => 
          `<span class="px-3 py-1 rounded-full text-sm font-medium uppercase ${
            label === 'bug' ? 'bg-red-200 text-red-800' :
            label === 'help wanted' ? 'bg-yellow-200 text-yellow-800' :
            label === 'enhancement' ? 'bg-green-200 text-green-800' :
            label === 'good first issue' ? 'bg-purple-200 text-purple-800' :
            label === 'documentation' ? 'bg-blue-200 text-blue-800' :
            'bg-gray-200 text-gray-800'
          }">${label}</span>`
        ).join('')}
      </div>
        <hr class="text-gray-300 my-4">
    <!-- footer -->
    <div class="">
        <p class="text-[#64748B] text-lg">#${issue.id} by <span>${issue.author}</span></p>
        <p class="text-[#64748B] text-lg">${issue.createdAt}</p>
    </div>
  </div>
</div>
        `

        issueCardContainer.appendChild(card)
    })
}

// open filter btn
openFilterBtn.addEventListener("click", () => {
  openFilterBtn.classList.add("btn-primary")
  allFilterBtn.classList.remove("btn-primary")
  closedFilterBtn.classList.remove("btn-primary")

  // show loader 
  showLoader()
  
  // // empty the issueCardContainer
  // issueCardContainer.innerHTML = " ";

  // filter the issues from the all issues and show only the open issues
  const openIssues = allIssues.filter(issue => issue.status === "open");
  displayIssues(openIssues)
  // hide loader
  hideLoader()
  // console.log(openIssues);
  // totalIssues count update
  totalIssuesCount.innerText = `${openIssues.length} Issues`;
})





loadIssues()