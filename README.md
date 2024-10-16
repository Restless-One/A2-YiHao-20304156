# README.md

git repository link: https://github.com/Restless-One/A2-YiHao-20304156?tab=readme-ov-file

### Task 1
 Done at 6 OCT
![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/Screenshot%202024-10-06%20at%204.25.42%E2%80%AFpm.png)

### Task 2
 Done at 7 OCT
#### Show Contact
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/show%20contact.png)

#### Add Contact
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/add%20contect%20command.png)

#### Delete Contact
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/Delete%20contact%20command.png)

#### Update Contact
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/update%20contact.png)

#### Show Phone
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/show%20phones.png)

#### Add Phone
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/add%20phone.png)

#### Delete Phone
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/delete%20phone.png)

#### Update Phone
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/update%20phone.png)

### Task 3
##### update contact.model
```JavaScript
     const Contact = sequelize.define("contact", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING,
            allowNull: true
        }
 ```
 ##### update contact.controller
 ```JavaScript
     const contact = {
        name: req.body.name,
        address : req.body.address
    };
 ```
 ##### update phone.model
 ```JavaScripe
        phone_type: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING
        },
 ```
 ##### update phone.controller
 ```JavaScript
     const phone = {
       phone_type : req.body.type,
       phone_number : req.body.number,
        contactId: parseInt(req.params.contactId)
    };
 ```
 ##### frontend adjust
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-front.png)

 ##### api test for task3
 
 ###### get contact
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-getcontact.png)
 
 ###### add contact
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-addcontact.png)

 ###### delete contact
 ![iamge](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-deletecontact.png)

 ###### update contact
 ![iamge](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-updatecontact.png)

 ###### get phone
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-getphone.png)
 
 ###### add phone
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-addphone.png)

 ###### delete phone
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-deletephone.png)

 ###### update phone
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-updatephone.png)
 ### Task 4
 ####  Create new table "Company"
 create a new file `company.model.js`
 code for `company.model.js`
 ```JavaScript
 module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
        company_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        company_name: {
            type: Sequelize.STRING
        },
        company_address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        contactId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'contacts',
                key: 'id',
            }
        }
    });

    return Company;
};
 ```




 #### API creation and test
 ###### API create:
    ```JavaScript
    router.post("/contacts/:contactId/companies", companies.create);

    router.get("/contacts/:contactId/companies", companies.findAll);

    router.get("/contacts/:contactId/companies/:companyId", companies.findOne);

    router.put("/contacts/:contactId/companies/:companyId", companies.update);

    router.delete("/contacts/:contactId/companies/:companyId", companies.delete);
    ```

  ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task4-table.png)  

 ###### API test
 add company
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task4-createcompany.png)
 get company
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task4-getcomany.png)
 update company
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task3-updatephone.png)
 delete company
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task4-deletecomany.png)

 Task 5 

 #### GUI for company: 
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/Task5%20table%20empty.png)

 #### Add company
 ##### Front
 ##### Table
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/Task5%20front%20addcompany.png)

 #### update company
 ##### Front
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/Task%20front%20updatecompany.png)
 ##### Table
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/Task5%20table%20updatecompany.png)

 #### Delete company

 ##### Front
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/Task5%20front%20deletecompany.png)

 ##### Docker
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/task5%20deletedocker.png)

 ##### Table
 ![image](https://github.com/Restless-One/A2-YiHao-20304156/blob/main/screenshot/Task5%20table%20delete.png)
 

