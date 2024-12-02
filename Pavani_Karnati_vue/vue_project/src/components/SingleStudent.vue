<template>
  <div id="studentinfo">
    <p id="name">{{ student.studentName }}</p>
    <p id="id">{{ student.studentID }}</p>
    <p id="class">{{ student.class }}</p>
    <p id="email">{{ student.email }}</p>
    <button @click="showdata" class="details-btn">Show More</button> 
    <StudentDetailsModal :student="student" v-if="showModal" @close="closeModal" />
  </div>
</template>

<script>
import StudentDetailsModal from './StudentDetailsModal.vue';
export default {
  name: 'SingleStudent',
  props: {
    student: Object,
  },
  components: {
    StudentDetailsModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    showdata() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
<style scoped>
#studentinfo {
  background-color:#ffc2d1;
  border: 2px solid rgb(22, 20, 20);
  border-radius:20px;
  padding: 20px;
  margin: 10px auto; /* Center the container */
  font-family: "Lora", serif;
  font-weight: 500;
  width: 95%;
  text-align: left; /* Align text content */
}

#studentinfo p,
#studentinfo button {
  display: inline-block; /* Arrange all items inline */
}

#name {
  margin-left:30px;
  width: 20%; /* Ensure student name has space to the left */
  text-align: left; /* Align the name to the left */
}
#id{
  margin-left:100px;
  margin-right:90px;
}
#class {
  margin-left:40px;
  margin-right:90px;
  width: 20%; /* Ensure student name has space to the left */
  text-align: center; /* Align the name to the left */
}
#email {
  margin-left:-60px;
  margin-right:150px;
  width: 10%; /* Ensure student name has space to the left */
  text-align: center; /* Align the name to the left */
}
.details-btn {
  border: transparent;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  background-color:#168aad;
  opacity: 0.8;
  color: white;
  display: inline-block; /* Inline button */
  margin-left: 27px; /* Push button to the right */
}
</style>
