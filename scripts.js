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
statuz = document.getElementsByClassName('status');
console.log(statuz);

/*statuz[0].style.color = STATUS_MAP.overdue.color;
statuz[1].style.color = STATUS_MAP.reserved.color;
statuz[2].style.color = STATUS_MAP.shelf.color;*/

checkinz = document.getElementsByClassName('checkin')
console.log(checkinz);
/*checkinz[0].style.color = 'black';
checkinz[1].style.color = 'black';
checkinz[2].style.color = 'black';*/

reservez = document.getElementsByClassName('reserve')
console.log(reservez);
checkoutz = document.getElementsByClassName('checkout')
console.log(checkoutz);

checkinz[0].style.color = 'black';
statuz[0].style.color = STATUS_MAP.overdue.color;
reservez[0]= STATUS_MAP.overdue.canReserve;
checkoutz[0] = STATUS_MAP.overdue.canCheckout;
checkinz[0]= STATUS_MAP.overdue.canCheckIn;

checkinz[1].style.color = 'black';
statuz[1].style.color = STATUS_MAP.reserved.color;
reservez[1] = STATUS_MAP.reserved.canReserve;
checkoutz[1] = STATUS_MAP.reserved.canCheckout;
checkinz[1] = STATUS_MAP.reserved.canCheckIn;

checkinz[2].style.color = 'black';
statuz[2].style.color = STATUS_MAP.shelf.color;
reservez[2] = STATUS_MAP.shelf.canReserve;
checkout[2] = STATUS_MAP.shelf.canReserve;
checkinz[2] = STATUS_MAP.shelf.canCheckIn;


