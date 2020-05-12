<template>
     <div class="span9">
                        <div class="content">

                            <div class="module">
                                <div class="module-head">
                                    <h3>List Users</h3>
                                    <a href="/addUser" class="btn btn-small btn-primary" style="float: right; margin-top: -23px;">Add User</a>
                                </div>
                                <div class="module-body">

                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile no</th>
                                                 <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <a href="/editUser" class="btn btn-small btn-primary">Edit</a>&nbsp;&nbsp;
                                                        <a href="#"  class="btn btn-small btn-danger">Delete</a>
                                                    </td>
                                                </tr>
                                           
                                        </tbody>
                                    </table>                                    
                                </div>
                            </div>

                        </div><!--/.content-->
                    </div><!--/.span9-->


</template>
<script>
import axios from 'axios';
export default {
//     data(){

//     },
//     created:{
//         load
//     },
//     methods:{
// postPost() {
//       axios
//         .put(`http://nuxtapi.com/api/users/{id}`, {
//           name: this.name,
//           email: this.email,
//           gender: this.gender,
//           mobile: this.mobile,
//           address: this.address
//         })

//         .then(response => {})
//         .catch(e => {
//           this.errors.push(e);
//         });
//     }
//     }
}
</script>