const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

let book1 = document.getElementById('book1')
console.log(book1)

let status1 = book1.querySelector(".status").getAttributeNames('status');
console.log(status1)
let reserve1 = book1.querySelector(".reserve").getAttributeNames('reserve');
let checkout1 = book1.querySelector(".checkout").getAttributeNames('checkout');
let checkin1 = book1.querySelector(".checkin").getAttributeNames('checkin');

let book2 = document.getElementById('book2')
console.log(book2)

let status2 = book2.querySelector(".status").getAttributeNames('status'); 
console.log(status2);
let reserve2 = book2.querySelector(".reserve").getAttributeNames('reserve');
let checkout2 = book2.querySelector(".checkout").getAttributeNames('checkout');
let checkin2 = book2.querySelector(".checkin").getAttributeNames('checkin');

let book3 = document.getElementById('book3')
console.log(book3)

let status3 = book3.querySelector(".status").getAttributeNames('status');
console.log(status3)
let reserve3 = book3.querySelector(".reserve").getAttributeNames('reserve');
let checkout3 = book3.querySelector(".checkout").getAttributeNames('checkout');
let checkin3 = book3.querySelector(".checkin").getAttributeNames('checkin');

checkin1 = none;
status1[0][1] = 'red';
reserve1= STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
checkout1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';

/*checkin[1].color = none;
status[1].style.color = STATUS_MAP.status.color
reserve[1] = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
checkout[1] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin[1] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';

checkin[2].color = none
status[2].style.color = STATUS_MAP.status.color
reserve[2] = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
checkout[2] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin[2] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';*/