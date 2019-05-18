console.log('I\'m loving it');

$(document).ready(onReady);

function onReady(){
    console.log('in JQ');
    //event listener that will call handleClick function
    $('#submit').on('click', handleClick); 
    //event listener that will call handleDeleteClick function
    $('#tableBody').on('click', '.deleteEmp', handleDeleteClick);
    $('#totalMonthlyCounter').append(totalAnnualSalary/12);
    
}

let totalAnnualSalary = 186000;

function handleClick() {
    console.log('button clicked');
    //create variables to hold data
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const idNum = $('#idNum').val();
    const title = $('#title').val();
    const annualSalary = Number($('#annualSalary').val());

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

    //clear inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNum').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    totalAnnualSalary += annualSalary;
    calcSalaries();

}

function handleDeleteClick(){
    console.log('Delete');

    $(this).closest('tr').remove();

    totalAnnualSalary -= annualSalary;
    calcSalaries();
}

function calcSalaries(){
    let monthlySal = totalAnnualSalary / 12;

    console.log('monthlySal', monthlySal);

    
    


 $('#totalMonthlyCounter').text(Math.round(monthlySal));
}

