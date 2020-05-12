<template>
  <div class="span9">
    <div class="content">
      <div class="module">
        <div class="module-head">
          <h3>Add User</h3>
          <a
            href="/listUsers"
            class="btn btn-small btn-primary"
            style="float: right; margin-top: -23px;"
          >List Users</a>
        </div>
        <div class="module-body">
          <form class="form-horizontal row-fluid" @submit.prevent="postPost">
            <div class="control-group">
              <label class="control-label" for="basicinput">Name</label>
              <div class="controls">
                <input
                  type="text"
                  id="basicinput"
                  name="name"
                  v-model="name"
                  class="span8"
                  required
                />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="basicinput">Email ID</label>
              <div class="controls">
                <input
                  type="email"
                  id="basicinput"
                  name="email"
                  v-model="email"
                  class="span8"
                  required
                />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="basicinput">Mobile no</label>
              <div class="controls">
                <input
                  type="number"
                  id="basicinput"
                  name="mobileno"
                  v-model="mobile"
                  class="span8"
                  required
                />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Gender</label>
              <div class="controls">
                <label class="radio">
                  <input
                    type="radio"
                    name="gender"
                    id="optionsRadios1"
                    v-model="gender"
                    value="1"
                    checked
                    required
                  />
                  Male
                </label>
                <label class="radio">
                  <input
                    type="radio"
                    name="gender"
                    id="optionsRadios2"
                    v-model="gender"
                    value="0"
                    required
                  />
                  Female
                </label>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label" for="basicinput">Address</label>
              <div class="controls">
                <textarea class="span8" name="address" v-model="address" rows="5"></textarea>
              </div>
            </div>

            <div class="control-group">
              <div class="controls">
                <input type="hidden" name="hidAction" value="Insert" />

                <button type="submit" class="btn btn-small btn-primary">Submit</button>
                <button type="submit" class="btn btn-small btn-danger">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--/.content-->
  </div>
</template>
<script>
// app=new Vue({
//   el:'#submitForm',
// data() {
//     return {
//       name: '',
//       email:'',
//       mobile:'',
//       gender:'',
//       address:''

//     }
//   },
//   methods:{
//     processForm:function(){
//       console.log({name:this.name,email:this.email});
//     alert('processing');
//     }
//   }
// })
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      mobile: "",
      gender: "",
      address: ""
    };
  },

  methods: {
    // Pushes posts to the server when called.
    postPost() {
      axios
        .post(`http://nuxtapi.com/api/user`, {
          name: this.name,
          email: this.email,
          gender: this.gender,
          mobile: this.mobile,
          address: this.address
        })

        .then(response => {})
        .catch(e => {
          this.errors.push(e);
        });
     
    }

  }
};
</script>