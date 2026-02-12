fetch("data.json")
.then(res => res.json())
.then(data => {

  if(document.getElementById("businessName"))
      document.getElementById("businessName").textContent = data.businessName;

  if(document.getElementById("nationalContainer")){
      data.nationalTours.forEach(t => {
          document.getElementById("nationalContainer").innerHTML += `
          <div class="card">
              <h3>${t.name}</h3>
              <p>${t.days}</p>
              <p><b>₹${t.price}</b></p>
              <p>${t.details}</p>
          </div>`;
      });
  }

});

