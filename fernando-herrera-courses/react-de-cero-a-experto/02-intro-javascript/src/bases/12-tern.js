const active = true;

let message = (active) ? 'Active':'Inactive';
console.log(message);

message = (!active) ? 'Active':'Inactive';
console.log(message);

message = (active) && 'Active';
console.log(message);

message = (!active) && 'Active';
console.log(message);