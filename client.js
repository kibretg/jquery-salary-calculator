console.log('I\'m loving it');

$(document).ready(onReady);

function onReady(){
    console.log('in JQ');
    $('.submit').on('click', handleClick);
    
}

function handleClick() {
    let firstName = $('.firstName').val();
    let lastName = $('.lastName').val();
    let idNum = $('.idNum').val();
    let title = $('.title').val();
    let annualSalary = $('.annualSalary').val();

    $('.tableBody').append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNum}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        
    </tr>`)
}