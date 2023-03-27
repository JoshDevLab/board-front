<template>
  <div>
    <h1>게시판</h1>
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.author }}</td>
          <td>{{ post.createdAt }}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/board/registerBoard" class="btn btn-primary">글 등록</router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: '첫 번째 게시글' },
        { id: 2, title: '두 번째 게시글' },
        { id: 3, title: '세 번째 게시글' },
      ],
    };
  },
};
</script>
