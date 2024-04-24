// Navigation
let login = document.getElementById('login');
let navBar = document.getElementById('navigation-bar');
let home = document.getElementById('home');

let mng_cus = document.getElementById('manage-customer');
let mng_item = document.getElementById('manage-item');
let mng_sales = document.getElementById('manage-sale');
let mng_employee = document.getElementById('manage-employee');
let mng_supplier = document.getElementById('manage-supplier');


login.style.display ='block';
navBar.style.display = 'none';
home.style.display = 'none';

mng_cus.style.display = 'none';
mng_item.style.display = 'none';
mng_sales.style.display = 'none';
mng_employee.style.display = 'none';
mng_supplier.style.display = 'none';

function loginBtn() {
    login.style.display = 'none';

    home.style.display = 'block';
    navBar.style.display = 'block';
}

function logoutBtn() {
    login.style.display = 'block';

    navBar.style.display = 'none';
    home.style.display = 'none';
    mng_cus.style.display = 'none';
    mng_item.style.display = 'none';
    mng_sales.style.display = 'none';
    mng_employee.style.display = 'none';
    mng_supplier.style.display = 'none';

}

function mngSupplier() {
    mng_supplier.style.display = 'block';

    mng_cus.style.display = 'none';
    home.style.display = 'none';
    mng_item.style.display = 'none';
    mng_sales.style.display = 'none';
    mng_employee.style.display = 'none';
}

function mngSales() {
    mng_sales.style.display = 'block';

    mng_cus.style.display = 'none';
    home.style.display = 'none';
    mng_item.style.display = 'none';
    mng_employee.style.display = 'none';
    mng_supplier.style.display = 'none';
}

function mngItem() {
    mng_item.style.display = 'block';

    mng_cus.style.display = 'none';
    home.style.display = 'none';
    mng_sales.style.display = 'none';
    mng_employee.style.display = 'none';
    mng_supplier.style.display = 'none';
}

function mngCustomer() {
    mng_cus.style.display = 'block';

    mng_item.style.display = 'none';
    home.style.display = 'none';
    mng_sales.style.display = 'none';
    mng_employee.style.display = 'none';
    mng_supplier.style.display = 'none';
}

function mngEmployee() {
    mng_employee.style.display = 'block';

    mng_cus.style.display = 'none';
    home.style.display = 'none';
    mng_item.style.display = 'none';
    mng_sales.style.display = 'none';
    mng_supplier.style.display = 'none';
}

function goHome() {
    home.style.display = 'block';

    mng_employee.style.display = 'none';
    mng_cus.style.display = 'none';
    mng_item.style.display = 'none';
    mng_sales.style.display = 'none';
    mng_supplier.style.display = 'none';
}
