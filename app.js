'use strict'


//Event handling, uder interaction is what starts the code execution.

var itemLabel=document.getElementById("itemLabel");//Add a new task.
var itemPrice=document.getElementById("itemPrice");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button

//New task list item
var createNewRow=function(itemLabel, itemPrice){

    var row = document.createElement("tr")
    var cellLabel = document.createElement("td")
    var cellPrice = document.createElement("td")
    var cellActions = document.createElement("td")
    var editButton = document.createElement("button")
    var deleteButton = document.createElement("button")

    cellLabel.innerHTML = itemLabel
    cellPrice.innerHTML = itemPrice
    editButton.innerText = "Edit"
    deleteButton.innerText = "Delete"
    cellActions.append(editButton)
    cellActions.append(deleteButton)
    row.append(cellLabel, cellPrice, cellActions)
    
    return row
}

addButton.addEventListener('click', function(event) {
    var table = document.getElementById('itemsTable')

    // let item = event.target.parentNode()
    let ul = event.target.parentNode.parentNode
    let itemLabel = ul.querySelector('#itemLabel').value
    let itemPrice = ul.querySelector('#itemPrice').value

    
    let tableBody = table.querySelector('tbody')
    tableBody.append(createNewRow(itemLabel, itemPrice))
})