<template>
  <div class="headings">
    <h2 id="heading1">Student Name</h2>
    <h2 id="heading2">Student ID</h2>
    <h2 id="heading3">Class</h2>
    <h2 id="heading4">Email</h2>
    <img id="logo" src="https://www.gpb.org/sites/default/files/styles/three_two_702x468/public/blogs/images/2016/12/13/screen_shot_2016-12-13_at_3.37.45_pm.png?h=cf52eb32&itok=haBkrdwG" />
  </div>
  <div v-for="student of studentdata" :key="student.id">
    <SingleStudent :student="student" />
  </div>
</template>

<script>
import SingleStudent from './SingleStudent.vue';

export default {
  name: 'StudentBox',
  props: {
    studentdata: Array,
  },
  components: {
    SingleStudent,
  },
};
</script>


<style scoped>
.headings {
  font-family: "Lora", serif;
  font-weight: 500;
  
}

.headings h2,
.headings img {
  display: inline-block; /* Makes elements appear inline */
  margin-right: 10px; /* Adds spacing between elements */
  vertical-align: middle; /* Aligns text and image vertically */
}

#heading1,#heading2,#heading3,#heading4 {
  margin-left:40px;
  margin-right:160px;
  width: auto; 
}

#logo {
  width: 148px; /* Set an appropriate size for the logo */
  height: 80px;
}
</style>
