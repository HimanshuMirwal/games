var IncomeCounter = 0;
var ExpenseCounter = 0;
var IncomeTotal = 0;
var ExpenseTotal = 0;
var TotalBudget = 0;
function abc() {
    var IncomeExpenses = document.getElementById("IncomeExpenses").value;
    if (IncomeExpenses === '-') {
        ChangeStylesDataEntryForMinus();
    } else {
        ChangeStylesDataEntryForPlus();
    }
}
function ChangeStylesDataEntryForMinus() {
    document.getElementById("IncomeExpenses").style = "border-color:red;"
    document.getElementById("Description").style = "border-color:red;"
    document.getElementById("Description").value = "";
    document.getElementById("Value").style = "border-color:red";
    document.getElementById("Value").value = "";
    document.getElementById("Submit").style = "border-color:red;color:red";



}
function ChangeStylesDataEntryForPlus() {
    document.getElementById("IncomeExpenses").style = "border-color:green;"
    document.getElementById("Description").style = "border-color:green;"
    document.getElementById("Description").value = "";
    document.getElementById("Value").style = "border-color:green;"
    document.getElementById("Value").value = "";
    document.getElementById("Submit").style = "border-color:green;color:green;"
    
}

function DataForIncomeAndExpense() {
    var Discription = document.getElementById("Description").value;
    var Value = document.getElementById("Value").value;
    var IncomeExpenses = document.getElementById("IncomeExpenses").value;
    if (Discription.length > 0 || Discription.length < 35 && Value.length > 0 || Value.length < 15) {
        if(IncomeExpenses === '+'){
        updateDataForIncome(Discription, Value);
        IncomeTotal = parseInt(Value) +  parseInt(IncomeTotal);
        IncomeTotal  = IncomeTotal.toFixed(2);
         document.getElementById("IncomeTotal").innerHTML="";
        document.getElementById("IncomeTotal").innerHTML="+" + IncomeTotal;
        }
        else{
        updateDataForExpense(Discription, Value);
        ExpenseTotal = parseInt(Value) +  parseInt(ExpenseTotal);
        ExpenseTotal  = ExpenseTotal.toFixed(2);
         document.getElementById("ExpenseTotal").innerHTML="";
        document.getElementById("ExpenseTotal").innerHTML="-" + ExpenseTotal;
        }
    } else {
        alert("Please fill the form correctly.");
    }
    TotalBudget =parseInt(IncomeTotal) - parseInt(ExpenseTotal);
    if(TotalBudget > 0){
        document.getElementById("TotalBudget").innerHTML="";
        document.getElementById("TotalBudget").innerHTML="+"+TotalBudget.toFixed(2);
    }
    else{
        document.getElementById("TotalBudget").innerHTML=TotalBudget.toFixed(2);
    }

}

function updateDataForIncome(DiscriptionValue, IncomeValue) {
    alert(DiscriptionValue + IncomeValue);

    var IncomeList = document.getElementById("INCOMELIST");

    var ChildIncomeDiv=document.createElement("div");
    ChildIncomeDiv.setAttribute("id", "ChildIncomeDiv"+ IncomeCounter);
    ChildIncomeDiv.setAttribute("class", "ChildIncomeDiv");
    IncomeList.appendChild(ChildIncomeDiv);

    var NewListElementDiscription = document.createElement("ul");
    NewListElementDiscription.setAttribute("id", "IncomeList" + IncomeCounter);
    NewListElementDiscription.setAttribute("class", "IncomeTitleList");


    ChildIncomeDiv.appendChild(NewListElementDiscription);
    // document.getElementById("IncomeDiscription" + IncomeCounter).innerHTML="hellohey";

    var IncomeListDiscription = document.createElement("li");
    IncomeListDiscription.setAttribute("id", "IncomeDiscription" + IncomeCounter);
    IncomeListDiscription.setAttribute("class", "IncomeTitle");
    NewListElementDiscription.appendChild(IncomeListDiscription);
    document.getElementById("IncomeDiscription" + IncomeCounter).innerHTML = DiscriptionValue;

    var IncomeListValue = document.createElement("li");
    IncomeListValue.setAttribute("id", "IncomeValue" + IncomeCounter);
    IncomeListValue.setAttribute("class", "IncomeValue");
    NewListElementDiscription.appendChild(IncomeListValue);
    document.getElementById("IncomeValue" + IncomeCounter).innerHTML = "+" + IncomeValue;





    var IncomeListRemove = document.createElement("input");
    IncomeListRemove.setAttribute("type", "button");
    IncomeListRemove.setAttribute("value", "\u00D7");
    IncomeListRemove.setAttribute("disable", "true");

    console.log('\u00D7');
    IncomeListRemove.setAttribute("id", "IncomeRemove" + IncomeCounter);
    IncomeListRemove.setAttribute("class", "IncomeRemove");
    NewListElementDiscription.appendChild(IncomeListRemove);


    document.getElementById("IncomeRemove" + IncomeCounter).addEventListener("click", function () {
        alert("removing");
        var val = this.id;
        var num=val.match(/\d+/g).map(Number);
        var remove = "ChildIncomeDiv"+num;
        IncomeList.removeChild(document.getElementById(remove));
        // var IncomeListRemove = document.createElement("li");
        // IncomeListRemove.setAttribute("id", "IncomeRemove" + num);
        // IncomeListRemove.setAttribute("class", "IncomeRemove");
        // document.getElementById("IncomeList" + num).appendChild(IncomeListRemove);
        // document.getElementById("IncomeRemove" + num).innerHTML = "&#10005;";
    });
    // document.getElementById("ChildIncomeDiv" + IncomeCounter).addEventListener("mouseout", function () {
    //     var val= this.id;
    //     var num=val.match(/\d+/g).map(Number);
    //     var parent = document.getElementById("IncomeList" + num);
    //     var child = document.getElementById("IncomeRemove" + num);
    //     parent.removeChild(child);
    //     console.log(this);
    // });

    

    




    //     document.getElementById("RowID" + IncomeCounter).addEventListener("mouseover", function () {
    //     var val = this.id;
    //     childBtn = document.createElement("input");
    //     childBtn.setAttribute("type", "button");

    //     childBtn.setAttribute("id", "Remove" + IncomeCounter);
    //     childBtn.setAttribute("class", "MoneyAmount");
    //     document.getElementById(val).appendChild(childBtn);
    //     document.getElementById("Remove" + IncomeCounter).innerHTML = " - ";
    // });

    // document.getElementById("RowID" + IncomeCounter).addEventListener("mouseout", function () {
    //     var parent = document.getElementById(this.id);
    //     var child = document.getElementById("Remove" + IncomeCounter);

    //     parent.removeChild(child);
    // });




    // childTh = document.createElement("th");
    // childTh.setAttribute("id", DiscriptionValue + IncomeCounter);
    // childTh.setAttribute("class", "DiscriptionOfIncome");
    // childtr.appendChild(childTh);
    // document.getElementById(DiscriptionValue + IncomeCounter).innerHTML = DiscriptionValue;


    // childTd = document.createElement("td");
    // childTd.setAttribute("id", "Amount" + IncomeCounter);
    // childTd.setAttribute("class", "MoneyAmount");
    // childtr.appendChild(childTd);
    // document.getElementById("Amount" + IncomeCounter).innerHTML = IncomeValue;



    document.getElementById("Description").value = "";
    document.getElementById("Value").value = "";
    // console.log("helllo i am the Child Div");
    // // parentTest.appendChild(childDiv);
    IncomeCounter++;
}

function updateDataForExpense(Discription, Value){
    alert( Discription + " " + Value);

    var ExpenseList = document.getElementById("EXPENSELIST");

    var ChildExpenseDiv=document.createElement("div");
    ChildExpenseDiv.setAttribute("id", "ChildExpenseDiv"+ ExpenseCounter);
    ChildExpenseDiv.setAttribute("class", "ChildExpenseDiv");
    ExpenseList.appendChild(ChildExpenseDiv);

    var NewListElementDiscription = document.createElement("ul");
    NewListElementDiscription.setAttribute("id", "ExpenseList" + ExpenseCounter);
    NewListElementDiscription.setAttribute("class", "ExpenseTitleList");


    ChildExpenseDiv.appendChild(NewListElementDiscription);
    // document.getElementById("IncomeDiscription" + IncomeCounter).innerHTML="hellohey";

    var ExpenseListDiscription = document.createElement("li");
    ExpenseListDiscription.setAttribute("id", "ExpenseDiscription" + ExpenseCounter);
    ExpenseListDiscription.setAttribute("class", "ExpenseTitle");
    NewListElementDiscription.appendChild(ExpenseListDiscription);
    document.getElementById("ExpenseDiscription" + ExpenseCounter).innerHTML = Discription;

    var ExpenseListValue = document.createElement("li");
    ExpenseListValue.setAttribute("id", "ExpenseValue" + ExpenseCounter);
    ExpenseListValue.setAttribute("class", "ExpenseValue");
    NewListElementDiscription.appendChild(ExpenseListValue);
    document.getElementById("ExpenseValue" + ExpenseCounter).innerHTML = "-" + Value;





    var ExpenseListRemove = document.createElement("input");
    ExpenseListRemove.setAttribute("type", "button");
    ExpenseListRemove.setAttribute("value", "\u00D7");
    ExpenseListRemove.setAttribute("disable", "true");

    console.log('\u00D7');
    ExpenseListRemove.setAttribute("id", "ExpenseRemove" + ExpenseCounter);
    ExpenseListRemove.setAttribute("class", "ExpenseRemove");
    NewListElementDiscription.appendChild(ExpenseListRemove);


    document.getElementById("ExpenseRemove" + ExpenseCounter).addEventListener("click", function () {
        alert("removing");
        var val = this.id;
        var num=val.match(/\d+/g).map(Number);
        var remove = "ChildExpenseDiv"+num;
        ExpenseList.removeChild(document.getElementById(remove));
    });

    document.getElementById("Description").value = "";
    document.getElementById("Value").value = "";
    ExpenseCounter++;
}
