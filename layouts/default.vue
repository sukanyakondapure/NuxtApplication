<template>
  <div>
    <Header />
    <div class="wrapper">
      <div class="container">
        <div class="row">
          <div class="span3">
            <Sidebar/>
            <!--/.sidebar-->
          </div>
          <!--/.span3-->
          <nuxt />
          <!--/.span9-->
        </div>
      </div>
      <!--/.container-->
    </div>
    <Footer/>
  </div>
</template>

<style>
</style>
<script>
import Header from "~/components/Header.vue";
import Sidebar from "~/components/Sidebar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
};
</script>