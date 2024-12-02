<template>
  <!--Step 3 use the component-->
  <MyHeader Heading="Student Data Hub"/> 
  <StudentBox :studentdata=studentdata />
</template>

<script>
// Step: 1 Import the components
import MyHeader from './components/MyHeader.vue'
import StudentBox from './components/StudentBox.vue'

export default{
  name: 'App',
  // Step 2: Register the components
  components:{
    MyHeader,
    StudentBox
  },
  data(){
    return {
      studentdata: []
    }
  },
  methods:{
    //promoises
    async fetchstudentdata(){
      const res = await fetch('https://student-final-nodedata.onrender.com/api');
      const data = await res.json();
      console.log(data);
      return data;
    }
  },
  async created(){
      this.studentdata = await this.fetchstudentdata();
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
}
.container {
  max-width: 400px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 0.3em solid black;
  padding: 30px;
  border-radius: 5px;
}
div{
  margin-bottom: 0.5em;

}
</style>
