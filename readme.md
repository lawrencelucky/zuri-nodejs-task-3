# My NodeJs solution to connect an express app to a database (NoSQL - MongoDB)

This project is hosted on [heroku link](https://immense-taiga-34489.herokuapp.com/api/bio).

## Available endpoints

In this CRUD application you can hit the following endpoints

### `GET / READ`

To read all the bios from the database, you hit this endpoint [https://immense-taiga-34489.herokuapp.com/api/bio](https://immense-taiga-34489.herokuapp.com/api/bio)

### `GET / READ`

To read a single bio from the database, you hit this endpoint [https://immense-taiga-34489.herokuapp.com/api/bio/:id](https://immense-taiga-34489.herokuapp.com/api/bio/6097d070dbd8e63a28793fdc) using a unique ID of the bio you want to get/read.

### `POST / CREATE`

To create a bio you are required to submit the following hitting this endpoint [https://immense-taiga-34489.herokuapp.com/api/bio](https://immense-taiga-34489.herokuapp.com/api/bio)

`name` which is required and must be unique.

`email` which is required and must be unique.

`country` not required.

### `PATCH / UPDATE`

To update an existing bio you are required to submit the ID of the bio you want to update and the field you want to update to this endpoint [https://immense-taiga-34489.herokuapp.com/api/bio/:id](https://immense-taiga-34489.herokuapp.com/api/bio/6097d070dbd8e63a28793fdc)

### `DELETE`

To delete a bio from the database, you hit this endpoint [https://immense-taiga-34489.herokuapp.com/api/bio/:id](https://immense-taiga-34489.herokuapp.com/api/bio/6097d070dbd8e63a28793fdc) using a unique ID of the bio you want to delete.
