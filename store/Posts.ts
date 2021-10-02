import { Module, VuexModule, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/api'
import PostInterface from '@/interfaces/post'
import { apiLink } from "~/config";

@Module({
  name: 'Posts',
  stateFactory: true,
  namespaced: true,
})
export default class PostsModule extends VuexModule {
  posts: PostInterface[] = []

  @Action
  public async getPosts() {
    const posts = await $axios.$get(apiLink)
    return posts
  }
}
