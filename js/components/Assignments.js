import AssignmentList from "./AssignmentList.js";
import AppButton from "./AppButton.js";

export default {

    components: { AssignmentList, AppButton },

    template: `
    <input type="text" class="border rounded py-1 px-1 mr-2" v-model="newAssignment">

    <app-button @click="addAssignment"></app-button>

    <assignment-list :assignments="filter.InProgress" title="In Progress"></assignment-list>

    <assignment-list :assignments="filter.Completed" title="Completed"></assignment-list>
    `,

    data() {
        return {
          newAssignment: '',
          assignments: [
            { name: 'Home Work', complete: false, id: 1 },
            { name: 'Projects', complete: false, id: 2 },
            { name: 'Fields', complete: false, id: 3 }
          ]
        }
      },

      methods: {
        addAssignment() {
          if (this.newAssignment.length) {
            this.assignments.push({
              name: this.newAssignment,
              complete: false,
              id: this.assignments.length + 1
            });
            this.newAssignment = '';
          }
        }
      },

      computed: {
        filter() {
            return {
                InProgress: this.assignments.filter((item) => !item.complete),
                Completed: this.assignments.filter((item) => item.complete)
            }
        }
      }
}