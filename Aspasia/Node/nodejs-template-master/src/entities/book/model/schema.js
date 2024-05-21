import { db, DataTypes } from '@Application/database';

export default db.define('book', {
	title: DataTypes.STRING,
	price: DataTypes.INTEGER,
});

