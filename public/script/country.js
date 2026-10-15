  // Function to fetch country data
  function fetchCountries() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const select = document.getElementById('country');
        data.forEach(country => {
          if (country.idd && country.idd.root && country.idd.suffixes) {
            const option = document.createElement('option');
            const callingCode = country.idd.root + country.idd.suffixes[0];
            option.value = callingCode;
            option.textContent = country.flag + ' ' + callingCode + ' (' + country.name.common + ')';
            select.appendChild(option);
          }
        });
      })
      .catch(error => console.error('Error fetching countries:', error));
  }

  // Call the function to fetch countries when the page loads
  window.onload = fetchCountries;