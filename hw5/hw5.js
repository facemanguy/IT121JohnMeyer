//Replace title
var elTitle = document.getElementById('title');
elTitle.textContent = 'Uncle Joe\'s Ice Creamery';

//Replace tagline
var elTagLine = document.getElementById('tagline');
elTagLine.textContent = 'The best ice cream in town!';

//Adjust css class for each item
var flavorList = document.querySelectorAll('li.flavor');
if (flavorList.length > 0){
    //Loop through to change class once content is generated
    for (var i = 0; i < flavorList.length; i++){
        flavorList[i].className = 'rainbow' + i;
    }
}

//Change specific child text
var itemTwo = document.getElementById('itemTwo');
var itemTwoText = itemTwo.firstChild.nodeValue;
itemTwoText = itemTwoText.replace('Blueberry Pie', 'Rocky Road');
itemTwo.firstChild.nodeValue = itemTwoText;

//Add a new element to list
var newItem = document.createElement('li');
var newItemText = document.createTextNode('Espresso Chunk');
newItem.appendChild(newItemText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newItem);

//Grab attribute of element
var itemThree = document.getElementById('itemThree');
if(itemThree.hasAttribute('class')){
    var attr = itemThree.getAttribute('class');
    //Change attribute to new class and add Text
    itemThree.classList.remove();
    itemThree.classList.add('soldOut');
    itemThree.textContent += ' SOLD OUT!';

    //Another Idea
    // var lineChecker = document.getElementById('lineChecker');
    // lineChecker.innerHTML = '<p>The ' + attr + ' line is cyan</p>';
}