<template>
  <div>
    <header-info />
    <div class="container mt-2">
      <heading
        class="mb-4"
        :is-data-shown="isDataShown"
        @showData="showData"
      />
      <div  v-if="isDataShown">
        <info
          :post-list="items"
        />
        <client-only>
          <div class="d-flex justify-content-center">
            <paginate
              v-model="page"
              :page-count="pageCount"
              :click-handler="pageHandlerChange"
              :prev-text="$t('prev')"
              :next-text="$t('next')"
              :page-class="'page-item'"
              :container-class="'pagination'"
            >
            </paginate>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from "lodash"
import HeaderInfo from '~/components/HeaderInfo.vue'
import Heading from '~/components/Heading.vue'
import { getModule } from 'vuex-module-decorators'
import Posts from '~/store/Posts'
import Info from "~/components/Info.vue"
export default Vue.extend({
  name: 'Result',
  components: {
    Heading,
    HeaderInfo,
    Info
  },
  data() {
    return {
      isDataShown: false,
      isLoading: true,
      posts: [],
      page: +this.$route.query.page | 1,
      pageSize: 5,
      pageCount: 0,
      allItems: Array(),
      items: []
    }
  },
  methods: {
    pageHandlerChange(page: number) {
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
    },
    showData (): void {
      this.isDataShown = !this.isDataShown
    }
  },
  async mounted() {
    try {
      const posts = getModule(Posts, this.$store)
      this.posts = await posts.getPosts()
    
      if (this.allItems) {
        this.allItems = _.chunk(this.posts, this.pageSize)
      }
      this.pageCount = _.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
      if (this.$route.query.page) {
        this.isDataShown = true
        this.page = +this.$route.query.page
      }
      this.isLoading = false
    } catch(e) {
      console.log(e);
    }
  }
})
</script>
<style>
  .pagination {
    align-items: center;
  }
  .pagination li a {
    color: #000;
    display: block;
    margin: 0 3px;
    padding: 7px 10px;
    border: 1px solid #dee2e6;;
  }
  .page-item.active a {
    z-index: 1;
    background-color: #007bff;
    border-color: #007bff;
  }
  .page-item.active a {
    color: #fff;
  }
  .page-link {
    cursor: pointer;
  }
</style>
