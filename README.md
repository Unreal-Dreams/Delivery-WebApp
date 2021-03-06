Building an full stack web application for delivery of Pakages. Angular is used for frontend and Node, express, nodemon alongside mySQL is used for backend. 

## Features

- Use [**Order Parcel**](#OrderParcel) to get your parcel delivered to your desired location.
- Use [**Feedback**](#Feedback) to share your valuable feedback with us. 
- Use [**Order History**](#OrderHistory) to view and track your past orders.

<!-- ## Demo
You can view the demo and detailed description of the application by viewing the youtube video that I made for the same. 
Link - {https://www.youtube.com/watch?v=-q_-vSbUMpI} -->

## Login  
Please register by filling in your details. You can also use forgot password feature where you can get your password by entering your email id and phone no. 

## Order Parcel
You can order a parcel pickup by filling a form stating the type of parcel, weight, pickup address, drop address and alternate phone no

## Order History
You can watch your order history and track your order with order id. 

## Feedback
You can order a parcel pickup by filling a form stating the type of parcel, weight, pickup address, drop address and alternate phone no

## Overall project structure
This shows the overall structure of project you can access the frontend part by going in frontend/assignment-app and backedn apis are accessible at backend/deliveryApp/app.js

![project structer](https://user-images.githubusercontent.com/56435229/156176005-8f482499-5933-427f-a9da-56bcaeda21f8.png)

## Database Structure 
I have used mySQL as my backend database. mySQL is used for saving user's data, storing cutomer's feedback and saving order details. For creating your own local database insatall XAMPP and create table as shown below. 
![xampp](https://user-images.githubusercontent.com/56435229/156175116-c0dd7ddc-36c2-4721-bda3-a461c5c41a6e.png)

# For storing user's info 
![users](https://user-images.githubusercontent.com/56435229/156175093-14f0d561-9ae8-4b40-a545-4d9df7411352.png)

# For Parcel order section
![orders](https://user-images.githubusercontent.com/56435229/156175034-354bfe85-9ae9-49be-bfa3-f61c5fc163a4.png)

# For Customer feedback
![feedback](https://user-images.githubusercontent.com/56435229/156174949-eff746d3-8fde-46e9-b4e2-b8e4fe4b9ab9.png)

## To run backend server
Update your database project in the highlighted section to store data. Your database will be hosted at localhost:5000 by default. To start backend simply type npm run startBackend in terminal of backend/deliveryApp
![backend Table](https://user-images.githubusercontent.com/56435229/156174705-db251adb-6933-4496-b9be-afc33b7579e7.png)

