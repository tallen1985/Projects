let inputField = document.getElementById('inputField');
let btn = document.getElementById('searchBtn');
let resultsBox = document.getElementById('resultsBox');
let results = {};
btn.addEventListener('click', clickButton);

function clickButton() {
    if (inputField.value) {
        sendRequest();
    }
    else {
        resultsBox.innerHTML = '<h2 id="resultsHeading">Results</h2><p>Please enter search criteria</p>';
    }
}

function sendRequest() 
{
    let xhr = new XMLHttpRequest();
    let url = 'https://api.openbrewerydb.org/breweries/';
    xhr.responseType='json';

    xhr.onreadystatechange = () => 
    {
        if (xhr.readyState === XMLHttpRequest.DONE) 
        {
        results = xhr.response;
        resultsBox.innerHTML = '<h2 id="resultsHeading">Results</h2>';
        if(results.length == 0){
            resultsBox.innerHTML = '<h2 id="resultsHeading">Results</h2><p>No results found</p>';
        } else {
        results.forEach((element) => {
                
                createBrewBox(resultsBox, element);
        });
        }
    }
    };
xhr.open('GET', `${url}?by_name=${inputField.value}`);
xhr.send();
}

function createBrewBox(box,element){
    let newDiv = document.createElement('div');
    newDiv.className = 'breweryBox';
    let newEl = document.createElement('h2');
    newEl.innerHTML = element.name;
    newDiv.appendChild(newEl);
    newEl = document.createElement('p');
    newEl.innerHTML = (element.city +', ' + element.state);
    newDiv.appendChild(newEl);
    newEl = document.createElement('p');
    newEl.innerHTML = (element.brewery_type);
    newDiv.appendChild(newEl);
    box.appendChild(newDiv);
}

