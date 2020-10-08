import bcrypt from "bcryptjs";

const users = [
	{
		name: "admin user",
		email: "admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "John Doe",
		email: "john@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Jane user",
		email: "jane@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default users;
