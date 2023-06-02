import AssignmentItem from "./AssignmentItem.js"

export default {
    components: { AssignmentItem },

    template: `
        <section v-show="assignments.length" class="mt-5">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>
                <assignment-item  
                    v-for="assignment in assignments" 
                    :key="assignment.id" 
                    :assignment="assignment">
                </assignment-item>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    }
}