export default {
    getCategories() {
        return this.$axios.$get('categories');
    },
    deleteCategory(context, id) {
        return this.$axios.$delete(`categories/${id}`)
    }
};