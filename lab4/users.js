// we use in memory database
let users = [
    { id: 1, name: "Anil Sharma", mob: "987654xxxx", email: "anil@example.com" },
    { id: 2, name: "Monika Verma", mob: "92345xxxxx", email: "monika@example.com" },
];

let nextId = 3;

export const getUsers = () => users;