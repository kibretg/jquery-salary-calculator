console.log('I\'m loving it');

$(document).ready(onReady);

function onReady(){
    console.log('in JQ');
    //event listener that will call handleClick function
    $('#submit').on('click', handleClick); 
    //event listener that will call handleDeleteClick function
    $('#tableBody').on('click', '.deleteEmp', handleDeleteClick);
    
}

function handleClick() {
    console.log('button clicked');
    
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNum = $('#idNum').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

    $('#tableBody').append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNum}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td>
            <button class="deleteEmp">Delete</button>
        </td>
        
    </tr>`)

    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNum').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}

function handleDeleteClick(){
    console.log('Delete');

    $(this).closest('tr').remove();

    
}