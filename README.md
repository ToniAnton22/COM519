# COM519
## How to Setup the Project
#### Instructions

-Download the zip file of the project.

-Unzip it wherever you want.

-Open the folder using Visual Studio Code.

-Open new terminal.

-Run

>npm install

After that run

>npm start

After running the program, click "link" : [Hosting environment](https://localhost:8080)

#### Packages and modules used

    -"dotenv": "^14.2.0",
    -"ejs": "^3.1.6",
    -"express": "^4.17.2",
    -"json": "^11.0.0",
    -"marked": "^4.0.10",
    -"method-override": "^3.0.0",
    -"mongodb": "^4.3.1",
    -"mongoose": "^6.1.7",
    -"nodejs": "^0.0.0",
    -"slugify": "^1.6.5"
#Introduction
Throughout history, information was, and still is the most valuable tool we could use, and living in the golden era of information, there is no wonder that as more is shared across the media, the chances of your casual Joe to remember historical events and to keep track of supplies each day starts plummeting. 

I believe CRUD applications play a crucial role, not only in business, but in your personal life as well, as they provide an easy way to access information through the right keywords. Warehouses especially need these applications as managing deliveries at an industrial scale without any automation has become close to impossible. 

# System Overview

My application is a CRUD database application. It can create, read, update and delete data, essentially mainpulating it.I believe CRUD applications play a crucial role, not only in business, but in your personal life as well, as they provide an easy way to access information through the right keywords. Warehouses especially need these applications as managing deliveries at an industrial scale without any automation has become close to impossible. 

[My CRUD scheme](![image](https://user-images.githubusercontent.com/72076515/150511440-ac9f3179-c4c1-42e7-8779-068eb754da08.png)



The type of database used in this program is a non-relational database type, using MongoDB. My choice was based around the unstructured/semi-structured data, as items in a warehouse don’t have a strict schema they have to follow as they are being stored, and the fluidity provided when it comes to changing the data set without affecting the overall environment/ the application.

# Key Design

The moment the link is accessed, a list of all the items in the mongodb cluster will apear. On this page, the item database is read and transformed into visual and interactive cues.
[Main page](![image](https://user-images.githubusercontent.com/72076515/150557510-2e227019-d434-4e76-b052-fc5d13d4d6b5.png)

The buttons are all made especially clear for visibility. Pressing the "new product" green button will lead you to one of the key function. "create" which creates a new database.

[Create page](![image](https://user-images.githubusercontent.com/72076515/150558089-e91878e4-4793-4c13-b3c1-89cf88e85a68.png)

Pressing "save" will give you the object, and redirect you to said object, while pressing "cancel" will get you back to the list.
[Created data](![image](https://user-images.githubusercontent.com/72076515/150558798-322d0624-50d5-41ea-841f-b99f12a78577.png)

As you can see, the object had been created, and all the data is being displayed. As you can see from the link above the object, the name of the object is displayed instead of the id. I have used slugify to use the object name as a "slug" variable, and find the object and display it in the url instead of the id of the object, as I have considered the overall look, unapealing.

[slug function](![image](https://user-images.githubusercontent.com/72076515/150559684-ad036e2b-6526-4723-b92a-83c94342a918.png)
[calling of slugify(the library)](![image](https://user-images.githubusercontent.com/72076515/150559821-c869c40a-b670-4277-ba1c-de6485fb6150.png)

[The created dataset](![image](https://user-images.githubusercontent.com/72076515/150559955-effd6a8b-8f97-46b8-9281-6d573d5411e5.png)

Outside slugify, I have also made every field to be required, so you can't just put an empty field. 

[Required fields](![image](https://user-images.githubusercontent.com/72076515/150560412-0dae7b62-3031-4b52-9405-1ddfa231b686.png)

The other two key designs, are the "edit" and "delete" functions. Lets test them on the dataset we just created, tortilia.

[edit](![image](https://user-images.githubusercontent.com/72076515/150560706-07ac330e-26d0-493c-8b93-c667acf29b2e.png)
[completed edit](![image](https://user-images.githubusercontent.com/72076515/150560976-294b5412-2af8-4d60-a444-a0937c897156.png)
[old tortilia](![image](https://user-images.githubusercontent.com/72076515/150561083-13efd182-4889-4385-b02f-39e7304eb2bf.png)
[new tortilia](![image](https://user-images.githubusercontent.com/72076515/150561140-1ee6c304-f5ac-46ec-9808-237cc7dc7dfd.png)

And finally, lets try deleting it by pressing the red "delete" button.

[Delete](![image](https://user-images.githubusercontent.com/72076515/150561486-fd8d9d3b-1c64-4ee2-80ce-8dd50b0893ac.png)


# Conclusion

I would like the end this by stating that, doing this project. I have learned how I can create function to manipulate a CRUD applications successfully, while handling non-relational database. I believe that, outside the missing authentification system, which implemented, would have been a long way in terms of security and management, I believe that my program would solve any storing problem any warehouse has, as the simplicity and fluidity of non-relational databases is perfect for something of this caliber, and the lack of navbar on the application is dissapointing, I would love to pick the project up again and add all the things I didn't add here. Overall, this project was a great introduction to nodejs and express, and a great experience.









