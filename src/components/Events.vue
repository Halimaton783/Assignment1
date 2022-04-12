<template>

<div class="container">
    <button class="btn-users">New Event</button>
    <h3 class="p-6 text-center"></h3>
    <table class="user-table">
        <thead class="thead-bg">
            <tr>
                <th>Event</th>
                <th>Description</th>
                <th>Status</th>
                <th>Created</th>
                <th>Due Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{user.event}}</td>
                <td>{{user.description}}</td>
                <td>{{user.status}}</td>
                <td>{{user.created}}</td>
                <td>{{user.duedate}}</td>
                <td>{{user.action}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: "Events",
   data() {
       return {
           users: [
                { event: 'IT and Book Fair', description: 'Description goes here', status: 'ONGOING', created: '05/07/2019', duedate: '09/07/2019', action: 'action' },
                { event: 'Blood Donation', description: 'Description goes here', status: 'DONE', created: '05/01/2019', duedate: '05/01/2019', action: 'action' },
                { event: 'Monthly Maintenance', description: 'Monthly Maintenance', status: 'OVERDUE', created: '03/07/2019', duedate: '04/07/2019', action: 'action' },
               
           ]
       };
   }
};
</script>


<style scoped>

.container {
    display: table;
    justify-content: left;
    width: 100%;
    padding: 50px;
}

.thead-bg {
    background-color: rgb(255, 255, 255);
    }

.btn-users {
    background-color: rgb(13, 159, 91);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.user-table{
    border-collapse: collapse;
    width: 100%;
}

.user-table td, .user-table th {
    border: 0px solid grey;
    padding: 18px;
    font-size: 20px;
    
}

.user-table td, .user-table tr {
    color: black;
    padding: 18px;
    font-size: 20px;
}

.user-table tr:nth-child(even){background-color: #ffffff;}

.user-table tr:hover {background-color: rgb(255, 255, 255);}

.user-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgb(255, 255, 255);
    color: rgb(148, 145, 145);
}

h3 {
    color: black;
}

</style>