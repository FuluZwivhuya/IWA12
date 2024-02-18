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

status = document.querySelector(".status").getAttributeNames(status)
console.log(typeof status)

reserve= document.querySelector(".reserve");
checkout = document.querySelector(".checkout");
checkin= document.querySelector(".checkin");

status = document.querySelector(".status");
console.log(status)
reserve= document.querySelector(".reserve");
checkout= document.querySelector(".checkout");
checkin= document.querySelector(".checkin");

status= document.querySelector(".status");
console.log(status)
reserve= document.querySelector(".reserve");
checkout = document.querySelector(".checkout");
checkin= document.querySelector(".checkin");

checkin.color = none;
status[0].style.color = STATUS_MAP.status.color;
reserve[0]= STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
checkout[0] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin[0] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';

checkin[1].color = none;
status[1].style.color = STATUS_MAP.status.color
reserve[1] = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
checkout[1] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin[1] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';

checkin[2].color = none
status[2].style.color = STATUS_MAP.status.color
reserve[2] = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled';
checkout[2] = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled';
checkin[2] = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled';