<template>
    <div class="card">
      <div class="card-header">
        <h1>게시판 글 등록</h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="title" class="form-label">제목:</label>
            <input type="text" class="form-control" id="title" v-model="form.title" required>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">내용:</label>
            <textarea class="form-control" id="content" v-model="form.content" rows="5" required></textarea>
          </div>
          <button type="text" class="btn btn-primary" @click="boardRegister()">글 등록</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                title: '',
                content: ''
            }
        }
    },
}
</script>

<style scoped>

</style>