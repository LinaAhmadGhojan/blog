<template>
  <div class="class-blog">
    <h1>{{pagename}}</h1>
  </div>
  <div class="row">
   
    <div class="col-md-6">
      <div class="posts-area">
        <BlogPost v-for="post in posts" v-bind:key="post.id" :title="post.title" :description="post.description" />
      </div>
    </div>

    <div class="col-md-4">
      <div class="posts-sild">
       <BlogSlid/>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/blog/BlogPost.vue';
import BlogSlid from '../components/blog/BlogSlid.vue';
import JsonPost from '../../json/post.json'
export default {
  data: function()
 { 
  return {
    pagename:"blog",
    pagedescription:"This is an blog page",
    posts:JsonPost,
  } ;
},
name:"blog",
components:{
  BlogPost,BlogSlid
}
    
  }


</script>
  <style>
  @media (min-width: 1024px) {
    .help {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .class-blog{
      text-align: center;
    }

    .posts-area{
      text-align: center;
    
      padding: 20px;

    }

    .posts-sild{
      text-align: left;

    }
    
  }
  </style>
  