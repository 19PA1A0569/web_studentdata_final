<template>
  <div id="show_data">
    <span class="close" @click="closeModal">&times;</span>
    <h2 class="heading">Student Details</h2>
    <p id="name">Student Name: {{ student.studentName }}</p>
    <p id="id">Student ID:{{ student.studentID }}</p>
    <p id="class">Class: {{ student.class }}</p>
    <p id="email">Email: {{ student.email }}</p>
    <p id="age">Age: {{ student.age }}</p>
    <p id="contact">Contact Number: {{ student.contactNumber }}</p>
    <p id="noofcourses">Email: {{ student.noofcoursesEnrolled }}</p>
    <p id="attendence">Attendence: {{ student.attendence }}%</p>
    <p id="gpa">GPA: {{ student.gpa }}</p>
    <StudentDetailsModal v-if="showModal" :student="student" @close="closeModal" />
    
  </div>
</template>

<script>
export default {
  name: 'StudentDetailsModal',
  props: {
    student: Object, // Contains student details
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>


<style scoped>
.heading{
   color:#03045e;
}
#show_data {
  background-image:url('https://img.freepik.com/premium-photo/blue-office-desk-with-notebook-pen-glasses-mini-tree-blue-desk-flat-lay-background-top-view-workspace-table-office-with-copy-space-business-study-learning-concept_271541-1237.jpg');
  position: fixed; /* Stay in place */
  left: 0;
  text-align:center;
  top: 0; 
  overflow: auto; /* Enable scroll if needed */
  border: 2px solid black; /* Light blue border */
  border-radius: 80px; /* Rounded corners */
  padding: 10px; /* Add spacing inside the border */
  margin: 210px 40%; /* Center the container */
  width: 40%; /* Adjust the width of the container */
  font-family: "Lora", serif; /* Add font styling */
  background-color: pink; /* Light background color */
}

.close {
  color: #aaa;
  float: right;
  color:black;
  margin-right:40px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}

</style>
